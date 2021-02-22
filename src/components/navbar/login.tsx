import React from "react"
import "@styles/components/navbar/login.scss"

interface ILoginState {
    isActive: boolean
}

export default class Login extends React.Component<{}, ILoginState> {
    constructor(props) {
        super(props)
        this.state = {
            isActive: false,
        }
        this.handleActiveClick = this.handleActiveClick.bind(this)
        this.handleCancelClick = this.handleCancelClick.bind(this)
    }

    handleActiveClick() {
        this.setState({ isActive: true })
    }

    handleCancelClick() {
        this.setState({ isActive: false })
    }

    render() {
        return (
            <div id="login">
                <a
                    className="button is-light"
                    data-target="login-modal"
                    onClick={this.handleActiveClick}
                >
                    登录
                </a>
                <div
                    className={
                        "modal" + (this.state.isActive ? " is-active" : "")
                    }
                >
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <div className="modal-card-head">
                            <p className="modal-card-title">登录</p>
                            <button
                                className="delete"
                                onClick={this.handleCancelClick}
                            ></button>
                        </div>

                        <div className="modal-card-body">
                            <div className="content">
                                <form action="" method="post" id="loginForm">
                                    {/* loginForm内部样式存于对应的scss文件中 */}
                                    <div>
                                        <span>
                                            <label>用户名</label>
                                        </span>
                                        <span>
                                            <div>
                                                <p>
                                                    <input
                                                        type="text"
                                                        placeholder="用户名"
                                                    />
                                                </p>
                                            </div>
                                        </span>
                                    </div>

                                    <div>
                                        <span>
                                            <label>密码</label>
                                        </span>
                                        <span>
                                            <div>
                                                <p>
                                                    <input
                                                        type="text"
                                                        placeholder="密码"
                                                    />
                                                </p>
                                            </div>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="modal-card-foot">
                            <button
                                className="button is-success"
                                type="submit"
                                form="loginForm"
                            >
                                登录
                            </button>
                            <button
                                className="button"
                                onClick={this.handleCancelClick}
                            >
                                取消
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
