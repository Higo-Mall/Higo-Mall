const React = require("react");
const Navbar = require("./src/components/navbar").default;
const Footer = require("./src/components/footer").default;

exports.wrapPageElement = ({ element, props }) => {
    // 在拦截下来的页面中无论如何都会出现Navbar、Footer组件，且样式错误，页面结构错乱
    // if (element.props["*"] == "item") {
    //     return <div id="wrapPageElement"></div>;
    // } else {
    //     return (
    //         <div id="wrapPageElement">
    //             <Navbar />
    //             {element}
    //             <Footer />
    //         </div>
    //     );
    // }
    return (
        <div id="wrapPageElement">
            <Navbar />
            {element}
            <Footer />
        </div>
    );
};
