import React from "react"
import "@styles/pages/item.scss"

import Navbar from "@components/navbar"
import ProductIntro from "@components/item/product-intro"
import Footer from "@components/footer"

export default class Item extends React.Component {
    render() {
        return (
            <div id="item">
                <Navbar />

                <ProductIntro
                    srcList={[
                        "//img12.360buyimg.com/n5/s54x54_jfs/t1/136914/18/19203/106810/5fd18ceeEecbd8fa5/ccf0388b98e89216.jpg",
                        "//img12.360buyimg.com/n5/s54x54_jfs/t1/111235/25/2465/105543/5ea296f6E7683f7a8/3bef900ddaecde7b.jpg",
                        "//img12.360buyimg.com/n5/s54x54_jfs/t1/94327/35/19624/180845/5ea296f5E52fb5a78/5f926c1fef550853.jpg",
                        "//img12.360buyimg.com/n5/s54x54_jfs/t1/114106/27/2586/128738/5ea296f5Eed9d694c/ce4851f27f2b7eaa.jpg",
                        "//img12.360buyimg.com/n5/s54x54_jfs/t1/115088/30/2518/170703/5ea297a2Eab3251c1/f728a8f97b18292a.jpg",
                        "//img12.360buyimg.com/n5/s54x54_jfs/t1/129666/35/15399/108613/5faa5641Ebd659c4f/41bb4826de107fde.jpg",
                        "//img12.360buyimg.com/n5/s54x54_jfs/t1/117694/33/2550/108213/5ea296f5Ebc96f98a/80e50a4206530566.jpg",
                        "//img12.360buyimg.com/n5/s54x54_jfs/t1/114294/26/2486/310187/5ea296f4Ebc6a9130/536837542006e43a.jpg",
                        "//img12.360buyimg.com/n5/s54x54_jfs/t1/107226/21/13538/132319/5ea296f6E8b154ddb/fe0a4f7c90242321.jpg",
                    ]}
                    info={[
                        "兰士顿 D4耳机入耳式有线降噪隔音 K歌音乐吃鸡游戏耳麦网课电脑办公麦克风 苹果vivo华为oppo手机通用 黑色",
                        "【闪电发货】自营仓闪电发货，质保一年，用坏换新\n【震撼音效】四个喇叭高度解析，舒适入耳无痛佩戴\n【高清通话】高清通话降噪麦克风，手机通用！进店》》",
                    ]}
                />

                <Footer />
            </div>
        )
    }
}
