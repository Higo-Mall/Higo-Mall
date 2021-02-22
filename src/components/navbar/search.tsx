import React from "react"
import { Link } from "gatsby"

interface ISearchProps {
    searchText?: string
}

export default class Search extends React.Component<ISearchProps> {
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
                                name="searchText"
                                className="input is-info"
                                type="text"
                                placeholder="搜索"
                                value={this.props.searchText}
                            />
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
        )
    }
}
