import React from 'react';
import Layout from '../components/layout';
import PageHeader from '../components/PageHeader/PageHeader';
import designHeaderImage from '../images/graphic-design/design-alexandru-acea.jpg';
import { graphql } from 'gatsby';

export default ({ data }) => (
	<Layout insta={data.site.siteMetadata.instaAPI}>
		<PageHeader title="Contact" headerImage={designHeaderImage} />
		<h1>Contact</h1>
	</Layout>
);

export const query = graphql`
	query {
		site {
			siteMetadata {
				instaAPI
			}
		}
	}
`;
