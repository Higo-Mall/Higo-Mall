import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ lang, meta, title, subTitle }) {
    const {
        site: { siteMetadata },
    } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const metaTitle = title || siteMetadata.title;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={metaTitle}
            titleTemplate={
                subTitle ? `${subTitle} | ${siteMetadata.title}` : ""
            }
            meta={[
                {
                    name: "description",
                    content: siteMetadata.description,
                },
                {
                    name: "author",
                    content: siteMetadata.author,
                },
            ].concat(meta)}
        />
    );
}

SEO.defaultProps = {
    lang: "cn",
    meta: [],
    title: "嗨购商城",
    subTitle: "",
};

SEO.propTypes = {
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

export default SEO;
