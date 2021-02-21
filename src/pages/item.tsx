import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import axios from "axios";

import Navbar from "@components/navbar";
import ProductIntro from "@components/item/product-intro";
import Footer from "@components/footer";

import "@styles/pages/item.scss";

interface IItemProps {
    introSrcList: [string];
}

class Item extends React.Component<IItemProps> {
    render() {
        return (
            <div id="item">
                <Navbar />

                <ProductIntro
                    srcList={this.props.introSrcList}
                    info={[
                        "兰士顿 D4耳机入耳式有线降噪隔音 K歌音乐吃鸡游戏耳麦网课电脑办公麦克风 苹果vivo华为oppo手机通用 黑色",
                        "【闪电发货】自营仓闪电发货，质保一年，用坏换新\n【震撼音效】四个喇叭高度解析，舒适入耳无痛佩戴\n【高清通话】高清通话降噪麦克风，手机通用！进店》》",
                    ]}
                />

                <Footer />
            </div>
        );
    }
}

export default () => {
    // const id = getId();

    const {
        allFile: {
            edges: {
                "0": {
                    node: { publicURL },
                },
            },
        },
    } = useStaticQuery(graphql`
        query {
            allFile(filter: { base: { eq: "item.php" } }) {
                edges {
                    node {
                        publicURL
                    }
                }
            }
        }
    `);

    let promise = new Promise(function (resolve, reject) {
        const param = new URLSearchParams(location.search);
        const id = param.get("id");
        if (id && /^\d{15}$/.test(id)) {
            axios
                .get(publicURL, {
                    params: {
                        id: id,
                    },
                })
                .then((response) => {
                    // ?结果中多出0,1,2等键指向重复的值，是理想结果的两倍
                    const { data } = response;
                    data ? resolve(data) : navigate("/404");
                })
                .catch((error) => {
                    // reject();
                    navigate("/404");
                });
        } else {
            // reject();
            navigate("/404");
        }
    });

    promise
        .then((result) => {})
        .catch((error) => {
            // 在此执行navigate会在执行`gatsby build`时触发：
            // UnhandledPromiseRejectionWarning: ReferenceError: window is not defined
            // 但仍能运行
            // navigate("/404");
        });

    // return <Item introSrcList={[""]} />;
    return <div></div>;
};
