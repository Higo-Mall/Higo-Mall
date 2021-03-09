import React from "react";

import { Img, Nav, ImgSwitch } from "@templates/img-switch";

import "@styles/components/item/product-intro.scss";

// Preview组件开始
class PreviewImg extends Img {
    render() {
        return (
            <div className="main-img">
                <img className="spec-img" src={this.props.src} />
            </div>
        );
    }
}

class PreviewNav extends Nav {
    render() {
        return (
            <li key={this.state.eid}>
                <img
                    key={this.state.eid}
                    data-eid={this.state.eid}
                    className={
                        "spec-item " + (this.state.selected ? "selected" : "")
                        // 这里使用ES6的语法糖没有字符串直接拼接看的清楚
                        // `spec-item ${this.state.selected ? "selected" : ""}`
                    }
                    src={this.props.src}
                    onMouseOver={this.props.handleNavMouseOver}
                />
            </li>
        );
    }
}

class Preview extends ImgSwitch {
    render() {
        let previewNavList = [];
        for (let i = 0; i < this.state.amount; i++) {
            previewNavList.push(
                <PreviewNav
                    key={i}
                    eid={i}
                    selected={this.state.selectedNo == i}
                    src={this.props.navSrcList[i]}
                    handleNavMouseOver={this.handleNavMouseOver}
                />
            );
        }
        return (
            <div className="preview">
                <PreviewImg
                    src={this.props.imgSrcList[this.state.selectedNo]}
                />
                <div className="spec-list">
                    <a className="arrow-prev">
                        <i className="sprite-arrow-prev"></i>
                    </a>
                    <div className="spec-nav">
                        <ul>{previewNavList}</ul>
                    </div>
                    <a className="arrow-next">
                        <i className="sprite-arrow-next"></i>
                    </a>
                </div>
                <div className="preview-info">
                    <a>关注</a>
                    <a>...</a>
                    <a>举报</a>
                </div>
            </div>
        );
    }
}

// Preview组件结束

// Info组件开始
interface IInfoProps {
    info: { name: string; news: string };
}

interface IInfoState {
    buyNum: number;
    btnRClass: string;
    btnAClass: string;
    cartClass: string;
}

class Info extends React.Component<IInfoProps, IInfoState> {
    constructor(props) {
        super(props);
        this.state = {
            buyNum: 1,
            btnRClass: "is-static",
            btnAClass: "is-primary",
            cartClass: "is-link",
        };
        this.handleBtnRClick = this.handleBtnRClick.bind(this);
        this.handleBtnAClick = this.handleBtnAClick.bind(this);
        this.handleBuyNumChange = this.handleBuyNumChange.bind(this);
        this.handleCartClick = this.handleCartClick.bind(this);
    }

    handleBtnRClick() {
        const next = this.state.buyNum - 1;
        if (next >= 1) {
            let nextState = { buyNum: next };
            if (next == 1)
                next == 1 ? (nextState["btnRClass"] = "is-static") : null;
            this.setState(nextState);
        }
    }

    handleBtnAClick() {
        const next = this.state.buyNum + 1;
        let nextState = { buyNum: next };
        next > 1 ? (nextState["btnRClass"] = "is-danger") : null;
        this.setState(nextState);
    }

    handleBuyNumChange(e) {
        // 此处必须转化为number类型，否则将作为string类型的e.target.value赋出后，组件的内在state.buyNum将被变更为string类型
        // 表现：触发handleBtnAClick()后，buyNum作为字符串在最后增加了"1"，如"10"->"101"
        const next = Number(e.target.value);
        if (next >= 1) {
            let nextState = { buyNum: next };
            nextState["btnRClass"] = next == 1 ? "is-static" : "is-danger";
            this.setState(nextState);
        } else {
            this.setState({ buyNum: 1, btnRClass: "is-static" });
        }
    }

    handleCartClick() {}

    render() {
        return (
            <div className="info">
                <div className="section">
                    <div className="name">{this.props.info.name}</div>
                    <div className="news">{this.props.info.news}</div>
                </div>
                <div className="section">
                    <div className="choose-btns">
                        <div className="choose-wrap">
                            <div className="choose-amount">
                                <p>
                                    <button
                                        id="btn-reduce"
                                        className={`button is-medium ${this.state.btnRClass}`}
                                        onClick={this.handleBtnRClick}
                                    >
                                        -
                                    </button>
                                </p>
                                <p style={{ width: "20%" }}>
                                    <input
                                        id="buy-num"
                                        className="input is-medium"
                                        value={this.state.buyNum}
                                        onChange={this.handleBuyNumChange}
                                    />
                                </p>
                                <p>
                                    <button
                                        id="btn-add"
                                        className={`button is-medium ${this.state.btnAClass}`}
                                        onClick={this.handleBtnAClick}
                                    >
                                        +
                                    </button>
                                </p>
                            </div>
                        </div>

                        <div className="cart-wrap">
                            <button
                                id="cart"
                                className={this.state.cartClass}
                                onClick={this.handleCartClick}
                            >
                                加入购物车
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
// Info组件结束

interface IProductIntroProps extends IInfoProps {
    srcList: string[];
}

export default class ProductIntro extends React.Component<IProductIntroProps> {
    render() {
        const srcList = this.props.srcList;
        return (
            <div className="product-intro">
                <Preview
                    amount={srcList.length}
                    imgSrcList={srcList}
                    navSrcList={srcList}
                />
                <Info info={this.props.info} />
            </div>
        );
    }
}
