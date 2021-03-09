module.exports = {
  pathPrefix: "/higo",
  siteMetadata: {
    title: "嗨购商城",
    description: "一个比赛项目",
    author: "MindXL & YangHanWen",
    domain: "192.168.201.128",
    // domain: "mindxl.site",
    // ip:"mindxl.site/higo",
    istaticDomain: "192.168.201.128/istatic",
    // istaticDomain: "mindxl.site/higo/istatic",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
            statement: "SELECT * FROM `item`",
            idFieldName: "id",
            name: "item",
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: false,
      },
    },
    `gatsby-plugin-catch-links`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
