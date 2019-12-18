import React from 'react';
import Layout from '../components/layout';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import { SectionTitle, SectionSubtitle } from '../components/Text/Text';
import { graphql } from 'gatsby';

export const query = graphql`
	query($slug: String!) {
		graphic: contentfulGraphicDesign(slug: { eq: $slug }) {
			title
			description {
				description
			}
			imagesFullWidth {
				file {
					url
				}
				title
			}
			images {
				file {
					url
				}
				title
			}
		}
		site {
			siteMetadata {
				instaAPI
			}
		}
	}
`;

const GraphicDesignTemplate = ({ data }) => {
	const { graphic } = data;
	let imagesFull = '';
	if (graphic.imagesFullWidth) {
		imagesFull = graphic.imagesFullWidth.map(image => {
			return (
				<div style={{ marginBottom: '60px' }}>
					<img
						src={image.file.url}
						alt={image.title}
						style={{ width: '100%' }}
					/>
					<SectionSubtitle>{image.title}</SectionSubtitle>
				</div>
			);
		});
	}
	let imagesHalf = '';
	if (graphic.images) {
		imagesHalf = graphic.images.map(image => {
			return (
				<div style={{ marginBottom: '60px' }}>
					<img
						src={image.file.url}
						alt={image.title}
						style={{ width: '100%' }}
					/>
					<SectionSubtitle>{image.title}</SectionSubtitle>
				</div>
			);
		});
	}
	return (
		<Layout insta={data.site.siteMetadata.instaAPI}>
			<ContentContainer>
				<SectionTitle style={{ marginBottom: '26px' }}>
					{graphic.title}
				</SectionTitle>
				<p style={{ marginBottom: '30px' }}>
					{graphic.description.description}
				</p>
				<div
					style={{
						display             : 'grid',
						gridTemplateColumns : '1fr',
						gridGap             : '30px'
					}}
				>
					{imagesFull}
				</div>
				<div
					style={{
						display             : 'grid',
						gridTemplateColumns : '1fr 1fr',
						gridGap             : '30px'
					}}
				>
					{imagesHalf}
				</div>
			</ContentContainer>
		</Layout>
	);
};

export default GraphicDesignTemplate;
