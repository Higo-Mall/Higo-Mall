import React from "react"
import { Img, Nav, ImgSwitch } from "@templates/img-switch"
import "@styles/components/item/product-intro.scss"

// Preview组件开始
class PreviewImg extends Img {
    handleVideoIconClick() {}

    render() {
        return (
            <div className="main-img">
                <span
                    className="video-icon"
                    onClick={this.handleVideoIconClick}
                ></span>
                <img className="spec-img" src={this.props.src} />
            </div>
        )
    }
}

class PreviewVideo extends React.Component {
    render() {
        return <div></div>
    }
}

class PreviewNav extends Nav {
    render() {
        return (
            <li
                key={this.state.eid}
                // className={this.state.selected ? "previewNavSelecteded" : ""}
            >
                <img
                    key={this.state.eid}
                    data-eid={this.state.eid}
                    className={
                        "spec-item " + (this.state.selected ? "selected" : "")
                    }
                    src={this.props.src}
                    onMouseOver={this.props.handleNavMouseOver}
                />
            </li>
        )
    }
}

class Preview extends ImgSwitch {
    render() {
        let previewNavList = []
        for (let i = 0; i < this.state.amount; i++) {
            previewNavList.push(
                <PreviewNav
                    key={i}
                    eid={i}
                    selected={this.state.selectedNo == i}
                    src={this.props.navSrcList[i]}
                    handleNavMouseOver={this.handleNavMouseOver}
                />
            )
        }
        return (
            <div className="preview">
                <PreviewImg
                    src={this.props.imgSrcList[this.state.selectedNo]}
                />
                <PreviewVideo />
                <div className="spec-list">
                    <a className="arrow-prev">
                        <i className="sprite-arrow-prev"></i>
                    </a>
                    <a className="arrow-next">
                        <i className="sprite-arrow-next"></i>
                    </a>
                    <div className="spec-nav">
                        <ul>{previewNavList}</ul>
                    </div>
                </div>
                {/* <div className="pagination">
                    <a className="pagination-previous">Previous</a>
                    <a className="pagination-next">Next page</a>
                    <ul className="pagination-list">
                        <li>
                            <a
                                className="pagination-link"
                                aria-label="Goto page 1"
                            >
                                1
                            </a>
                        </li>
                        <li>
                            <a
                                className="pagination-link"
                                aria-label="Goto page 1"
                            >
                                1
                            </a>
                        </li>
                        <li>
                            <a
                                className="pagination-link"
                                aria-label="Goto page 1"
                            >
                                1
                            </a>
                        </li>
                        <li>
                            <a
                                className="pagination-link"
                                aria-label="Goto page 1"
                            >
                                1
                            </a>
                        </li>
                        <li>
                            <a
                                className="pagination-link"
                                aria-label="Goto page 1"
                            >
                                1
                            </a>
                        </li>
                        <li>
                            <a
                                className="pagination-link"
                                aria-label="Goto page 1"
                            >
                                1
                            </a>
                        </li>
                    </ul>
                </div> */}
                <div className="preview-info">
                    <a>关注</a>
                    <a>...</a>
                    <a>举报</a>
                </div>
            </div>
        )
    }
}

// Preview组件结束

// Info组件开始
// 未完成
interface IInfoProps {
    // info: [name:string,]
    info: [string, string]
}

class Info extends React.Component<IInfoProps> {
    render() {
        return (
            <div className="info">
                <div className="name">{this.props.info[0]}</div>
                <div className="news">{this.props.info[1]}</div>
            </div>
        )
    }
}
// Info组件结束

interface IProductIntroProps extends IInfoProps {
    srcList: string[]
}

export default class ProductIntro extends React.Component<IProductIntroProps> {
    render() {
        const srcList = this.props.srcList
        return (
            <div className="product-intro">
                <Preview
                    amount={srcList.length}
                    imgSrcList={srcList}
                    navSrcList={srcList}
                />
                <Info info={this.props.info} />
            </div>
        )
    }
}
