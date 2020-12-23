import React from "react"
import "@styles/index.scss"
import Navbar from "@components/navbar"
import Slider from "@components/slider"
import Footer from "@components/footer"

interface IIndex {
    [goodsCategory: string]: string[]
}

export default class Index extends React.Component<{}, IIndex> {
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
        // this.getGoodsCategory = this.getGoodsCategory.bind(this);
    }

    getGoodsCategory() {
        let list = []
        const goodsCategory = this.state.goodsCategory
        // for e in this.state.goodsCategory:
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
            <div id="app">
                <Navbar />

                <div id="content" className="hero_">
                    <Slider />
                    <div className="hero-body">
                        {/* <div className="columns is-gapless">
                            <div className="column is-one-quarter">
                                <div className="category">
                                    <p className="category-label">商品分类</p>
                                    <ul className="category-list">
                                        {this.getGoodsCategory()}
                                    </ul>
                                </div>
                            </div>

                            <div className="column">
                                <div>

                                </div>
                            </div>
                        </div> */}

                        {/* test begin */}
                        <div className="category">
                            <p className="category-label">商品分类</p>
                            <ul className="category-list">
                                {this.getGoodsCategory()}
                            </ul>
                        </div>
                        {/* test end */}
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}
