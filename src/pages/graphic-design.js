import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import PageHeader from '../components/PageHeader/PageHeader';
import HoverImageGrid from '../components/HoverImageGrid/HoverImageGrid';

import designHeaderImage from '../images/graphic-design/design-alexandru-acea.jpg';

export default ({ data }) => (
	<Layout insta={data.site.siteMetadata.instaAPI} pageName="Graphic Design">
		<PageHeader title="Graphic Design" headerImage={designHeaderImage} />
		<HoverImageGrid
			content={data.graphics.nodes}
			parentPage="graphic-design"
		/>
	</Layout>
);

export const query = graphql`
	{
		graphics: allContentfulGraphicDesign {
			nodes {
				title
				thumbnail {
					file {
						url
					}
				}
				slug
			}
		}
		site {
			siteMetadata {
				instaAPI
			}
		}
	}
`;
