import React from "react";
import { Link } from "gatsby";

import Login from "@components/navbar/login";
import Search from "@components/navbar/search";

interface INavbarProps {
    // 搜索功能 页面跳转后在输入框内保留搜索内容
    searchText?: string;
}

export default class Navbar extends React.Component<INavbarProps> {
    render() {
        return (
            <div
                className="navbar is-primary"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <a className="navbar-item" href="">
                        <div className="is-large">picture</div>
                    </a>
                    <a
                        role="button"
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/" className="navbar-item">
                            首页
                        </Link>

                        <a className="navbar-item">...</a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">更多</a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">关于我们</a>
                                <a className="navbar-item">...</a>
                                <a className="navbar-item">...</a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">反馈</a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <Search searchText={this.props.searchText} />

                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>注册</strong>
                                </a>
                                <Login />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
