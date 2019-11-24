// TODO: dear user, please change this to your own instance
const netlifyInstance = "https://determined-goldstine-d2e4f6.netlify.com"
if (netlifyInstance === "https://jamstack-hackathon-starter.netlify.com") {
  console.warn(`

**************************
WARNING: currently using Netlify Identity of https://jamstack-hackathon-starter.netlify.com

this is only meant for the working demo. if you forked or copied this code, you won't have access to this netlify identity instance

Go to your site, enable Netlify Identity, and paste that string here


More docs: https://www.netlify.com/docs/identity/

**************************
`)
}

module.exports = {
  siteMetadata: {
    title: "JAMstack Hackathon Starter",
    description: `Kick off your next, great Gatsby app.`,
    author: `@swyx`,
  },

  plugins: [
    // comes with starter
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: netlifyInstance,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // own added
    `gatsby-plugin-material-ui`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "RMAPI",
        fieldName: "rickAndMorty",
        url: "https://rickandmortyapi-gql.now.sh/",
      },
    },
  ],
}
