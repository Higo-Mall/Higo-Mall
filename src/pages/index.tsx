import React from "react"
import "@styles/pages/index.scss"

import Navbar from "@components/navbar"
import Slider from "@components/index/slider"
import Footer from "@components/footer"

interface IIndexState {
    goodsCategory: string[]
}

export default class Index extends React.Component<{}, IIndexState> {
    constructor(props) {
        super(props)
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
        }
    }

    getGoodsCategory() {
        let list = []
        const goodsCategory = this.state.goodsCategory
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
                  )
        }
        return list
    }

    render() {
        return (
            <div id="index">
                <Navbar />

                <div id="content" className="hero_">
                    <Slider
                        amount={6}
                        imgSrcList={[
                            "https://img.alicdn.com/imgextra/i1/O1CN01134mwU1nKZ5qy4ELP_!!6000000005071-0-tps-1130-500.jpg_q100.jpg_.webp",
                            "https://img.alicdn.com/simba/img/TB1w.FwEeL2gK0jSZFmSuw7iXXa.jpg",
                            "https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i1/6000000005716/O1CN01c8HD6f1s5yYaZb1qf_!!6000000005716-0-octopus.jpg",
                            "https://a1.alicdn.com/assets/p4p-fallback/mm_12852562_1778064_37676870.jpg",
                            "//img.alicdn.com/imgextra/i4/12/O1CN01UqPa9p1BxXOZO8lEH_!!12-0-luban.jpg_q100.jpg_.webp",
                            "//img.alicdn.com/imgextra/i2/89/O1CN01oKFGmc1CWntYc9pca_!!89-0-luban.jpg_q100.jpg_.webp",
                        ]}
                        linkList={["", "", "", "", "", ""]}
                        bgColorList={[
                            "202, 20, 33",
                            "232, 232, 232",
                            "202, 20, 33",
                            "232, 232, 232",
                            "246, 142, 20",
                            "121, 0, 222",
                        ]}
                    />
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
        )
    }
}
