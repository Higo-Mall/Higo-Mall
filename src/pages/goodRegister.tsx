import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
    query {
        file(base: { eq: "goodRegister.php" }) {
            publicURL
        }
    }
`;

type QueryData = {
    file: { publicURL: string };
};

interface IGRProps {
    phpURL: string;
    data: QueryData;
}

class GoodRegister extends React.Component<IGRProps> {
    render() {
        const texts = [
            "名称",
            "自定义标签（中）",
            "自定义标签（英）",
            "品牌（中）",
            "品牌（英）",
            "价格",
            "库存",
        ];
        const names = [
            "name",
            "tags_CN",
            "tags_EN",
            "brand_CN",
            "brand_EN",
            "price",
            "inventory",
        ];
        const maxLength = [32, 64, 128, 16, 32, null, null];
        const inputs = [];
        for (let i = 0; i < texts.length; i++) {
            inputs.push(texts[i]);
            inputs.push(
                <input
                    key={i}
                    type="text"
                    name={names[i]}
                    placeholder={names[i]}
                    maxLength={maxLength[i]}
                />
            );
            inputs.push(<br />);
        }

        const category = {
            "Phones & Accessories": {
                "Mobile Phones": ["Mobile Phones", "Walkie Talkies"],
                "Phone Accessories": [
                    "Phone Cases",
                    "Earphones",
                    "Screen Protectors",
                    "Chargers & Docks",
                    "Memory Cards",
                    "Power Banks",
                    "Mobile Phone Cables",
                    "Phone Batteries",
                    "Accessory Bundles",
                    "Holders & Stands",
                    "Shutters",
                    "Selfie Sticks",
                    "Lenses",
                    "iPhone Accessories",
                    "Capacitive Stylus Pens",
                    "Dust Plugs",
                    "Signal booster",
                ],
                "Mobile Decorations": [
                    "Mobile Phone Straps",
                    "Armbands",
                    "Decals",
                    "Mobile Phone Bags",
                ],
            },
            "Computer & Office": {
                "Laptops & Tablets": [
                    "Laptops",
                    "Laptop Accessories",
                    "Mini PCs",
                    "Tablets",
                    "Gaming Laptops",
                    "Tablet Accessories",
                ],
            },
        };
        // const level1 = []
        // for(let key in category) {
        //     let level2 = category[key]
        //     for(let k in category[key]) {

        //     }
        //     selects.push(<div></div>)
        // }

        return (
            <div>
                <form
                    encType="multipart/form-data"
                    action={this.props.data.file.publicURL}
                    method="post"
                >
                    {inputs}
                    map1
                    <select name="map1">
                        <option value={0}>Phones &amp; Accessories</option>
                        <option value={1}>Computer &amp; Office</option>
                    </select>
                    <br />
                    map2
                    <select name="map2">
                        <option value={0}>Mobile Phones</option>
                        <option value={1}>Phone Accessories</option>
                        <option value={1}>Mobile Decorations</option>
                    </select>
                    <br />
                    map3
                    <select name="map3">
                        <option value={0}>Mobile Phones</option>
                        <option value={1}>Walkie Talkies</option>
                    </select>
                    <br />
                    files
                    <input type="file" name="files[]" multiple={true} />
                    <br />
                    <button type="submit" name="srcouces">
                        submit
                    </button>
                </form>
            </div>
        );
    }
}

export default GoodRegister;
