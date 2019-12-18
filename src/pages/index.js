import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/Home/Hero';
import HomePortfolioList from '../components/Home/HomePortfolioList';
import HomeContact from '../components/Home/HomeContact';

export default () => (
	<Layout>
		<Hero />
		<HomePortfolioList />
		<HomeContact />
	</Layout>
);
