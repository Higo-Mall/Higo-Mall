import React from "react";
import { graphql } from "gatsby";
import axios from "axios";

import SEO from "@components/seo";
import Slider from "@components/index/slider";

import "@styles/pages/index.scss";

export const query = graphql`
    query {
        site {
            siteMetadata {
                istaticDomain
            }
        }
        file(base: { eq: "slider.php" }) {
            publicURL
        }
    }
`;

type QueryData = {
    site: {
        siteMetadata: {
            istaticDomain: string;
        };
    };
    file: {
        publicURL: string;
    };
};

type PHPData = [
    ...[
        {
            name: string;
            link: string;
            bgColor_R: string;
            bgColor_G: string;
            bgColor_B: string;
        }
    ]
];

interface IIndexProps {
    data: QueryData;
}

interface IIndexState {
    data: PHPData;
    goodsCategory: string[];
}

class Index extends React.Component<IIndexProps, IIndexState> {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            goodsCategory: [
                "女装 /内衣",
                "男装 /运动户外",
                "女鞋 /男鞋 /箱包",
                "美妆 /个人护理",
                "腕表 /眼镜 /珠宝饰品",
                "手机 /数码 /电脑办公",
                "母婴玩具",
                "零食 /茶酒 /进口食品",
                "生鲜水果",
                "大家电 /生活电器",
                "家具建材",
                "汽车 /配件 /用品",
                "家纺 /家饰 /鲜花",
                "医药保健",
                "厨具 /收纳 /宠物",
                "图书音像",
            ],
        };
    }

    setGoodsCategory() {
        let list = [];
        const goodsCategory = this.state.goodsCategory;
        for (let i = 0; i < goodsCategory.length; i++) {
            i === 0
                ? list.push(
                      <li key={i}>
                          <a className="is-active">{goodsCategory[i]}</a>
                      </li>
                  )
                : list.push(
                      <li key={i}>
                          <a>{goodsCategory[i]}</a>
                      </li>
                  );
        }
        return list;
    }

    componentDidMount() {
        let promise = new Promise((resolve, reject) => {
            axios
                .get(this.props.data.file.publicURL)
                .then((response) => {
                    const { data } = response;
                    typeof data === "object" ? resolve(data) : reject();
                })
                .catch((error) => {
                    reject();
                    console.log(error);
                });
        });

        promise
            .then((value: PHPData) => {
                this.setState({ data: value });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    renderIfPHP() {
        const data = this.state.data;
        if (!data) {
            return <div></div>;
        }

        const urlPre =
            "http://" +
            this.props.data.site.siteMetadata.istaticDomain +
            "slider/";

        let imgSrcList = [];
        let linkList = [];
        let bgColorList = [];
        data.forEach((e) => {
            imgSrcList.push(urlPre + e.name);
            linkList.push(e.link);
            bgColorList.push(`${e.bgColor_R}, ${e.bgColor_G}, ${e.bgColor_B}`);
        });

        return (
            <Slider
                amount={data.length}
                imgSrcList={imgSrcList}
                linkList={linkList}
                bgColorList={bgColorList}
            />
        );
    }

    render() {
        return (
            <div id="index">
                <SEO />

                <div id="content" className="hero_">
                    <div id="slider-wrap">{this.renderIfPHP()}</div>
                    <div className="hero-body">
                        <div className="category">
                            <p className="category-label">商品分类</p>
                            <ul className="category-list">
                                {this.setGoodsCategory()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;

export const a = "123";
