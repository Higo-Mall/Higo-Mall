import React from "react"
import "@styles/pages/index.scss"
import { graphql } from "gatsby"

import Navbar from "@components/navbar"
import Slider from "@components/index/slider"
import Footer from "@components/footer"

interface IIndexProps {
    Slider: any
}

interface IIndexState {
    goodsCategory: string[]
}

class Index extends React.Component<IIndexProps, IIndexState> {
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
        )
    }
}

export default ({ data }) => {
    let imgSrcList = []
    let linkList = []
    let bgColorList = []
    const edges = data.allMysqlSliders.edges
    edges.forEach(element => {
        const node = element.node
        imgSrcList.push(node.imgPublicURL)
        linkList.push(node.link)
        bgColorList.push(
            [node.bgColor_R, node.bgColor_G, node.bgColor_B].join(", ")
        )
    })

    return (
        <Index
            Slider={
                <Slider
                    amount={edges.length}
                    imgSrcList={imgSrcList}
                    linkList={linkList}
                    bgColorList={bgColorList}
                />
            }
        ></Index>
    )
}

// 从数据库获取本地文件路径
export const query = graphql`
    query {
        allMysqlSliders {
            edges {
                node {
                    imgPublicURL
                    bgColor_R
                    bgColor_G
                    bgColor_B
                    link
                }
            }
        }
    }
`
