import React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface ISearchProps {
    // liveSearchPublicURL
    lspURL: string;
    searchText?: string;
}

interface ISearchState {
    searchText: string;
}

class Search extends React.Component<ISearchProps, ISearchState> {
    constructor(props) {
        super(props);
        this.state = {
            searchText: props.searchText,
        };
        // this.showResult = this.showResult.bind(this);
    }

    // showResult = (e) => {
    //     const text = e.target.value;
    //     if (text.length == 0) {
    //         document.getElementById("liveSearch").innerHTML = "";
    //         document.getElementById("liveSearch").style.border = "0px";
    //         return;
    //     }
    //     if (window.XMLHttpRequest) {
    //         // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行
    //         var xmlhttp: any = new XMLHttpRequest();
    //     } else {
    //         // IE6, IE5 浏览器执行
    //         var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    //     }
    //     xmlhttp.onreadystatechange = function () {
    //         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    //             document.getElementById("liveSearch").innerHTML =
    //                 xmlhttp.responseText;
    //             document.getElementById("liveSearch").style.border =
    //                 "1px solid #A5ACB2";
    //         }
    //     };
    //     xmlhttp.open("GET", this.props.lspURL + "?text=" + text, true);
    //     xmlhttp.send();
    // };

    render() {
        return (
            <div>
                <form action="/search/" method="get">
                    <div
                        className="field has-addons"
                        style={{ marginRight: "100px" }}
                    >
                        <span className="control">
                            <input
                                name="s"
                                className="input is-info"
                                type="text"
                                placeholder="搜索"
                                value={this.state.searchText}
                                // onKeyUp={this.showResult}
                            />
                            <div id="liveSearch"></div>
                        </span>
                        <span className="control">
                            <button className="button is-info" type="submit">
                                搜索
                            </button>

                            {/* <Link className="button is-info" to="/search/" state={{"text": "123"}} >搜索</Link> */}
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}

export default ({ searchText }) => {
    const {
        allFile: {
            edges: {
                "0": {
                    node: { publicURL },
                },
            },
        },
    } = useStaticQuery(graphql`
        query {
            allFile(filter: { name: { eq: "liveSearch" } }) {
                edges {
                    node {
                        publicURL
                    }
                }
            }
        }
    `);

    return <Search lspURL={publicURL} searchText={searchText} />;
};
