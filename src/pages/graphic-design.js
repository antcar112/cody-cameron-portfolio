import React from 'react';
import { graphql } from 'gatsby';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import PageHeader from '../components/PageHeader/PageHeader';
import HoverImageGrid from '../components/HoverImageGrid/HoverImageGrid';

import designHeaderImage from '../images/graphic-design/design-alexandru-acea.jpg';
import { graphicDesign } from '../content/graphic-design';

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
	}
`;

export default ({ data }) => (
	<Layout>
		<PageHeader title="Graphic Design" headerImage={designHeaderImage} />
		<HoverImageGrid
			content={data.graphics.nodes}
			parentPage="graphic-design"
		/>
	</Layout>
);
