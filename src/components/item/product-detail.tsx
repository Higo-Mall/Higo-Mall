import React from "react";

interface IProductDetailProps {
    srcList: string[];
}

export default class ProductDetail extends React.Component<IProductDetailProps> {
    render() {
        let imgList = [];
        this.props.srcList.forEach((element) => {
            imgList.push(
                <div className="container" style={{ width: "600px" }}>
                    <img className="image" src={element} />
                </div>
            );
        });
        return <div>{imgList}</div>;
    }
}
