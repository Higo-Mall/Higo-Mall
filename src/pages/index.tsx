import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from "@components/navbar";
import Slider from "@components/index/slider";
import Footer from "@components/footer";

import "@styles/pages/index.scss";

interface IIndexProps {
    Slider: React.ReactNode;
}

interface IIndexState {
    goodsCategory: string[];
}

class Index extends React.Component<IIndexProps, IIndexState> {
    constructor(props) {
        super(props);
        this.state = {
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

    getGoodsCategory() {
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

    render() {
        return (
            <div id="index">
                <Navbar />

                <div id="content" className="hero_">
                    {this.props.Slider}
                    <div className="hero-body">
                        <div className="category">
                            <p className="category-label">商品分类</p>
                            <ul className="category-list">
                                {this.getGoodsCategory()}
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default () => {
    const {
        allMysqlSlider: { edges },
        allFile: { nodes },
    } = useStaticQuery(graphql`
        query {
            allMysqlSlider(sort: { fields: mysqlId, order: ASC }) {
                edges {
                    node {
                        name
                        bgColor_R
                        bgColor_G
                        bgColor_B
                        link
                    }
                }
            }
            allFile(
                filter: { relativeDirectory: { eq: "img/sliders" } }
                sort: { fields: name, order: ASC }
            ) {
                nodes {
                    publicURL
                }
            }
        }
    `);

    let imgPubURLList = [];
    let linkList = [];
    let bgColorList = [];
    edges.forEach((element) => {
        const node = element.node;
        linkList.push(node.link);
        bgColorList.push(
            [node.bgColor_R, node.bgColor_G, node.bgColor_B].join(", ")
        );
    });
    nodes.forEach((element) => {
        imgPubURLList.push(element.publicURL);
    });

    return (
        <Index
            Slider={
                <Slider
                    amount={edges.length}
                    imgSrcList={imgPubURLList}
                    linkList={linkList}
                    bgColorList={bgColorList}
                />
            }
        ></Index>
    );
};
