import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import PageHeader from '../components/PageHeader/PageHeader';
import designHeaderImage from '../images/graphic-design/design-alexandru-acea.jpg';

import HoverImageGrid from '../components/HoverImageGrid/HoverImageGrid';

export const query = graphql`
	{
		motionGraphics: allContentfulMotion {
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
	}
`;

export default ({ data }) => (
	<Layout>
		<PageHeader title="Motion Graphics" headerImage={designHeaderImage} />
		<HoverImageGrid
			content={data.motionGraphics.nodes}
			parentPage="motion-graphics"
		/>
	</Layout>
);
