import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import PageHeader from '../components/PageHeader/PageHeader';
import designHeaderImage from '../images/graphic-design/design-alexandru-acea.jpg';

import HoverImageGrid from '../components/HoverImageGrid/HoverImageGrid';

export default ({ data }) => (
	<Layout insta={data.site.siteMetadata.instaAPI}>
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
