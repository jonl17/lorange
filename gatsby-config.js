/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Jón Gabríel Lorange`,
    jobs: [`Web Developer`, `Musician`],
    contact: {
      email: `jglorange@gmail.com`,
      tel: `+354 618 1964`,
    },
    skills: {
      mostUsed: [
        `Javascript`,
        `React/Redux`,
        `Linux`,
        `GatsbyJS`,
        `GraphQL`,
        `HTML5`,
        `CSS3`,
        `Styled Components`,
      ],
      other: [
        `jQuery`,
        `C`,
        `C++`,
        `Java`,
        `Python`,
        `PHP`,
        `Wordpress`,
        `SQL`,
      ],
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/sites`,
        name: "sites",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: "assets",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
  ],
}
