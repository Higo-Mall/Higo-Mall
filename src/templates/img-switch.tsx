import React from "react";

interface IImgProps {
    src: string;
    link?: string;
    bgColor?: string;
}

export class Img extends React.Component<IImgProps> {}

interface INavState {
    eid: number;
    selected: boolean;
}

interface INavProps extends INavState {
    src?: string;
    handleNavClick?(event: any): void;
    handleNavMouseOver?(event: any): void;
}

export class Nav extends React.Component<INavProps, INavState> {
    constructor(props) {
        super(props);
        this.state = {
            eid: props.eid,
            selected: props.selected,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return { selected: nextProps.selected };
    }
}

interface IImgSwitchProps {
    amount: number;
    imgSrcList: string[];
    navSrcList?: string[];
    linkList?: string[];
    bgColorList?: string[];
}

interface IImgSwitchState {
    amount: number;
    selectedNo: number;
}

export class ImgSwitch extends React.Component<
    IImgSwitchProps,
    IImgSwitchState
> {
    constructor(props) {
        super(props);
        // if (props.amount <= 0) {
        //     Error.call("error!")
        // }
        this.state = {
            amount: props.amount,
            selectedNo: 0,
        };
        this.handleNavClick = this.handleNavClick.bind(this);
        this.handleNavMouseOver = this.handleNavMouseOver.bind(this);
    }

    handleNavClick(event) {
        this.setState({ selectedNo: event.target.dataset["eid"] });
    }

    handleNavMouseOver(event) {
        this.setState({ selectedNo: event.target.dataset["eid"] });
    }
}
