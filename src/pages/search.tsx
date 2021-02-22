import React from "react"

import Navbar from "@components/navbar"
import Footer from "@components/footer"

export default class Search extends React.Component {
    render() {
        // this.props["location"]["search"] == location.search.substring(1)
        // 生成项目时（"gatsby build"）提示变量location无法正常访问
        let param = new URLSearchParams(this.props["location"]["search"])
        const searchText = param.get("searchText")
        return (
            <div>
                <Navbar searchText={searchText} />
                <Footer />
            </div>
        )
    }
}
