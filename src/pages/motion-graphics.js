import React from 'react';
import { graphql } from 'gatsby';

import Head from '../components/Head/Head';
import Layout from '../components/layout';
import PageHeader from '../components/PageHeader/PageHeader';
import HoverImageGrid from '../components/HoverImageGrid/HoverImageGrid';

import designHeaderImage from '../images/graphic-design/design-alexandru-acea.jpg';

export default ({ data }) => (
	<Layout insta={data.site.siteMetadata.instaAPI}>
		<Head>Motion Graphics</Head>
		<PageHeader title="Motion Graphics" headerImage={designHeaderImage} />
		<HoverImageGrid
			content={data.motionGraphics.nodes}
			parentPage="motion-graphics"
		/>
	</Layout>
);

export const query = graphql`
	{
		motionGraphics: allContentfulMotionGraphics {
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
