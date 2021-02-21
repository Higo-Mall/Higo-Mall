import React from "react";

import Navbar from "@components/navbar";
import Footer from "@components/footer";

export default class Room404 extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div
                    className="content has-text-centered"
                    style={{ height: "400px", padding: "10%" }}
                >
                    <h1>404!</h1>
                    <h2>我不是此地的页面！</h2>
                </div>
                <Footer />
            </div>
        );
    }
}
