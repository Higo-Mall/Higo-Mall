module.exports = {
    // siteMetadata: {
    //   title: `Title from siteMetadata`,
    // },
    plugins: [
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    "@components": "src/components",
                    "@styles": "src/styles",
                    "@static": "src/static",
                    "@templates": "src/templates",
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `static`,
                path: `${__dirname}/static/`,
            },
        },
        {
            resolve: `gatsby-source-mysql`,
            options: {
                connectionDetails: {
                    host: "localhost",
                    user: "root",
                    password: "123456",
                    database: "sql_192_168_201_",
                },
                queries: [
                    {
                        statement: "SELECT * FROM `slider`",
                        idFieldName: "id",
                        name: "slider",
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-mysql`,
            options: {
                connectionDetails: {
                    host: "localhost",
                    user: "root",
                    password: "123456",
                    database: "sql_192_168_201_",
                },
                queries: [
                    {
                        statement: "SELECT * FROM `item`",
                        idFieldName: "id",
                        name: "item",
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `嗨购商城`,
                short_name: `Higo Mall`,
                start_url: `/`,
                // background_color: `#f7f0eb`,
                // theme_color: `#a2466c`,
                display: `standalone`,
                icon: `static/favicon.ico`,
            },
        },
        `gatsby-plugin-offline`,
    ],
};

