import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/Home/Hero';
import HomePortfolioList from '../components/Home/HomePortfolioList';
import HomeContact from '../components/Home/HomeContact';
import { graphql } from 'gatsby';

export default ({ data }) => {
	return (
		<Layout insta={data.site.siteMetadata.instaAPI}>
			<Hero />
			<HomePortfolioList />
			<HomeContact />
		</Layout>
	);
};

export const query = graphql`
	query {
		site {
			siteMetadata {
				instaAPI
			}
		}
	}
`;
