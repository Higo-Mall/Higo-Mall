import React from "react"
import "@styles/components.scss"

interface ISliderContentProps {
    // [urlList: string]: string[];
    url: string
    bgUrl: string
    bgColor: string
    // key: number;
    display: boolean
}

interface ISliderContentState {
    url: string
    bgUrl: string
    bgColor: string
    display: boolean
}

class SliderContent extends React.Component<
    ISliderContentProps,
    ISliderContentState
> {
    constructor(props) {
        super(props)
        this.state = {
            // urlList: props.urlList,
            url: props.url,
            bgUrl: props.bgUrl,
            // key: props.key,
            // 网页刚加载出来时显示key为0的图片
            // display: props.key ? true : false,
            display: props.display,
            bgColor: props.bgColor,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {display: nextProps.display};
    }

    // url(https://img.alicdn.com/imgextra/i1/O1CN01134mwU1nKZ5qy4ELP_!!6000000005071-0-tps-1130-500.jpg_q100.jpg_.webp) no-repeat center center
    render() {
        return (
            <div
                className="sliderContent"
                style={{ display: this.state.display ? "block" : "none" }}
            >
                <a href={this.state.url}>
                    <div
                        className="insideSliderContent"
                        style={{
                            backgroundImage: "url(%s)".replace(
                                "%s",
                                this.state.bgUrl
                            ),
                            backgroundColor: "rgb(%s)".replace("%s", this.state.bgColor)
                        }}
                    ></div>
                    {/* <img src={this.state.bgUrl} /> */}
                </a>
            </div>
        )
    }
}

interface ISliderNavProps {
    id: number
    selected: boolean
    handleNavClick(event: any): void
}

interface ISliderNavState {
    id: number
    selected: boolean
}

class SliderNav extends React.Component<ISliderNavProps, ISliderNavState> {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            selected: props.selected,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {selected: nextProps.selected};
    }

    render() {
        return (
            <li
                key={this.state.id}
                className={this.state.selected ? "sliderNavSelecteded" : ""}
                onClick={this.props.handleNavClick}
            ></li>
        )
    }
}

interface ISliderState {
    selectedNo: number
}

export default class Slider extends React.Component<{}, ISliderState> {
    constructor(props) {
        super(props)
        this.state = {
            selectedNo: 0,
        }
        this.handleNavClick = this.handleNavClick.bind(this)
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.selectedNo !== 5) {
                this.setState({ selectedNo: this.state.selectedNo + 1 })
            } else {
                this.setState({ selectedNo: 0 })
            }
        }, 2000)
    }

    handleNavClick(event) {
        this.setState({ selectedNo: event.target.key })
    }

    render() {
        const bgUrlList = [
            // "@static/O1CN01134mwU1nKZ5qy4ELP_!!6000000005071-0-tps-1130-500.jpg_q100.jpg_.webp",
            "https://img.alicdn.com/imgextra/i1/O1CN01134mwU1nKZ5qy4ELP_!!6000000005071-0-tps-1130-500.jpg_q100.jpg_.webp",
            "https://img.alicdn.com/simba/img/TB1w.FwEeL2gK0jSZFmSuw7iXXa.jpg",
            "https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i1/6000000005716/O1CN01c8HD6f1s5yYaZb1qf_!!6000000005716-0-octopus.jpg",
            "https://a1.alicdn.com/assets/p4p-fallback/mm_12852562_1778064_37676870.jpg",
            "//img.alicdn.com/imgextra/i4/12/O1CN01UqPa9p1BxXOZO8lEH_!!12-0-luban.jpg_q100.jpg_.webp",
            "//img.alicdn.com/imgextra/i2/89/O1CN01oKFGmc1CWntYc9pca_!!89-0-luban.jpg_q100.jpg_.webp"
        ]
        const bgColorList = [
            "202, 20, 33",
            "232, 232, 232",
            "202, 20, 33",
            "232, 232, 232",
            "246, 142, 20",
            "121, 0, 222"
        ]
        const urlList = ["", "", "", "", "", ""]
        let sliderContentList = []
        let sliderNavList = []
        for (let i = 0; i < bgUrlList.length; i++) {
            sliderContentList.push(
                <SliderContent
                    key={i}
                    url={urlList[i]}
                    bgUrl={bgUrlList[i]}
                    bgColor={bgColorList[i]}
                    display={this.state.selectedNo === i}
                />
            )
            sliderNavList.push(
                <SliderNav
                    key={i}
                    id={i}
                    selected={this.state.selectedNo === i}
                    handleNavClick={this.handleNavClick}
                />
            )
        }

        return (
            <div className="slider">
                <div className="sliderContentWrap">{sliderContentList}</div>
                <ul className="sliderNavWrap">{sliderNavList}</ul>
            </div>
        )
    }
}
