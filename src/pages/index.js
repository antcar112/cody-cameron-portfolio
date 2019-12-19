import React from 'react';
import { graphql } from 'gatsby';

import Head from '../components/Head/Head';
import Layout from '../components/layout';
import Hero from '../components/Home/Hero';
import HomePortfolioList from '../components/Home/HomePortfolioList';
import HomeContact from '../components/Home/HomeContact';

export default ({ data }) => {
	return (
		<Layout insta={data.site.siteMetadata.instaAPI}>
			<Head>Home</Head>
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
