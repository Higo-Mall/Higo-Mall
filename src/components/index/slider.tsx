import React from "react";

import { Img, Nav, ImgSwitch } from "@templates/img-switch";

import "@styles/components/index/slider.scss";

class SliderImg extends Img {
    render() {
        return (
            <div
                className="sliderContent"
                style={{
                    backgroundColor: "rgb(%s)".replace(
                        "%s",
                        this.props.bgColor
                    ),
                }}
            >
                <a href={this.props.link}>
                    <img src={this.props.src} />
                </a>
            </div>
        );
    }
}

class SliderNav extends Nav {
    render() {
        return (
            <li
                key={this.state.eid}
                data-eid={this.state.eid}
                className={this.state.selected ? "sliderNavSelecteded" : ""}
                onClick={this.props.handleNavClick}
            ></li>
        );
    }
}

export default class Slider extends ImgSwitch {
    componentDidMount() {
        setInterval(() => {
            if (this.state.selectedNo !== this.props.amount - 1) {
                this.setState({ selectedNo: this.state.selectedNo + 1 });
            } else {
                this.setState({ selectedNo: 0 });
            }
        }, 2000);
    }

    render() {
        let sliderNavList = [];
        for (let i = 0; i < this.state.amount; i++) {
            sliderNavList.push(
                <SliderNav
                    key={i}
                    eid={i}
                    selected={this.state.selectedNo === i}
                    handleNavClick={this.handleNavClick}
                />
            );
        }

        return (
            <div className="slider">
                <div className="sliderContentWrap">
                    <SliderImg
                        src={this.props.imgSrcList[this.state.selectedNo]}
                        link={this.props.linkList[this.state.selectedNo]}
                        bgColor={this.props.bgColorList[this.state.selectedNo]}
                    />
                </div>
                <ul className="sliderNavWrap">{sliderNavList}</ul>
            </div>
        );
    }
}
