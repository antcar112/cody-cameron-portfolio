/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config();

module.exports = {
	plugins : [
		`gatsby-plugin-styled-components`,
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve : 'gatsby-source-filesystem',
			options : { path: 'static' }
		},
		{
			resolve : `gatsby-source-contentful`,
			options : {
				spaceId     : `waxs64srwmli`,
				// Learn about environment variables: https://gatsby.dev/env-vars
				// accessToken : `oFaGPgSccfOrZdbb4_aUs6DTE4r0ECMsHzvTjSho7ss`
				accessToken : process.env.CONTENTFUL_API_TOKEN
			}
		}
	]
};
