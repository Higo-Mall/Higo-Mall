import React from "react";
import { graphql, navigate } from "gatsby";
import axios from "axios";

import SEO from "@components/seo";
import ProductIntro from "@components/item/product-intro";

import "@styles/pages/item.scss";

export const query = graphql`
    query {
        site {
            siteMetadata {
                istaticDomain
            }
        }
        file(base: { eq: "item.php" }) {
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

interface IItemProps {
    data: QueryData;
}

type PHPData = {
    id: string;
    dbResult: {
        name: string;
    };
    isResult: {
        intro: string[];
        detail: string[];
    };
};

interface IItemState {
    data: PHPData;
}

class Item extends React.Component<IItemProps, IItemState> {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        let promise = new Promise((resolve, reject) => {
            const param = new URLSearchParams(location.search);
            const id = param.get("id");
            if (id && /^\d{15}$/.test(id)) {
                axios
                    .get(this.props.data.file.publicURL, {
                        params: {
                            id: id,
                        },
                    })
                    .then((response) => {
                        // ?结果中多出0,1,2等键指向重复的值，是理想结果的两倍
                        // https://github.com/Higo-Mall/Higo-Mall/issues/4
                        // wontfix for now
                        // 似乎是axios返回过程中的正常现象，axios将可转化为对象的字符串自动转化了
                        const { data } = response;
                        typeof data === "object" ? resolve(data) : reject();
                    })
                    .catch((error) => {
                        reject();
                        console.log(error);
                    });
            } else {
                reject();
            }
        });

        promise
            .then((value: PHPData) => {
                this.setState({ data: value });
            })
            .catch((error) => {
                console.log(error);
                navigate("/404");
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
            data.id;
        const introPre = urlPre + "/intro/";
        const detailPre = urlPre + "/detail/";

        let introSrcList = [];
        data.isResult.intro.forEach((element) => {
            introSrcList.push(introPre + element);
        });

        let detailSrcList = [];
        data.isResult.detail.forEach((element) => {
            detailSrcList.push(detailPre + element);
        });
        return (
            <ProductIntro
                srcList={introSrcList}
                info={[
                    "兰士顿 D4耳机入耳式有线降噪隔音 K歌音乐吃鸡游戏耳麦网课电脑办公麦克风 苹果vivo华为oppo手机通用 黑色",
                    "【闪电发货】自营仓闪电发货，质保一年，用坏换新\n【震撼音效】四个喇叭高度解析，舒适入耳无痛佩戴\n【高清通话】高清通话降噪麦克风，手机通用！进店》》",
                ]}
            />
        );
    }

    render() {
        const data = this.state.data;
        return (
            <div id="item">
                <SEO subTitle={data?.dbResult?.name} />

                <div id="product-intro-wrap">{this.renderIfPHP()}</div>
            </div>
        );
    }
}

export default Item;
