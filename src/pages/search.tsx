import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import SEO from "@components/seo";

export default class Search extends React.Component {
    render() {
        let param = new URLSearchParams(this.props["location"]["search"]);
        const searchText = param.get("s");
        return (
            <div>
                <SEO subTitle="搜索" />
            </div>
        );
    }
}
