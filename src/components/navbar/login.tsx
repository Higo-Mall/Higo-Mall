import React from "react"
import "@styles/Bulma.scss"

interface ILoginState {
    isActive: boolean
}

export default class Login extends React.Component<{}, ILoginState> {
    constructor(props) {
        super(props)
        this.state = {
            isActive: false,
        }
        this.handleActiveClick = this.handleActiveClick.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
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
                    className="button modal-button is-light"
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
                            <div className="content"></div>
                        </div>

                        <div className="modal-card-foot">
                            <button className="button is-success">登录</button>
                            <button className="button" onClick={this.handleCancelClick}>取消</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
