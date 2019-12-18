require('dotenv').config({
	path : `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata : {
		title    : `Cody Cameron`,
		// siteUrl: `https://www.gatsbyjs.org`,
		// description: `Blazing fast modern site generator for React`,
		instaAPI : process.env.INSTA_ACCESS_TOKEN
	},
	plugins      : [
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
				spaceId     : process.env.CONTENTFUL_SPACE_ID,
				accessToken : process.env.CONTENTFUL_API_TOKEN
			}
		}
	]
};
