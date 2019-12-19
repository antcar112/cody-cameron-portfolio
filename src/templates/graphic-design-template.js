import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { media } from '../utils/media';
import scrollSettings from '../utils/scrollSettings';

import Layout from '../components/layout';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import { SectionTitle, SectionSubtitle } from '../components/Text/Text';
import { BtnInnerLink } from '../components/Button/Button';

const Desc = styled.p`
	margin: 0 0 30px;
	${media.down.xs} {
		margin: 0 20px 30px;
	}
`;

const ImageContainer = styled.div`margin-bottom: '60px';`;
const Image = styled.img`width: 100%;`;
const ImagesFull = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 30px;
`;
const ImagesHalf = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 30px;

	${media.down.sm} {
		grid-template-columns: 1fr;
	}
`;

const GraphicDesignTemplate = ({ data }) => {
	const { graphic } = data;
	let imagesFull = '';
	if (graphic.imagesFullWidth) {
		imagesFull = graphic.imagesFullWidth.map(image => {
			return (
				<ImageContainer key={image.title}>
					<Image
						src={`${image.file.url}?w=1300`}
						alt={image.title}
						data-sal={scrollSettings.animation}
						data-sal-duration={scrollSettings.duration}
					/>
					<SectionSubtitle>{image.title}</SectionSubtitle>
				</ImageContainer>
			);
		});
	}
	let imagesHalf = '';
	if (graphic.images) {
		imagesHalf = graphic.images.map(image => {
			return (
				<ImageContainer key={image.title}>
					<Image
						src={`${image.file.url}?w=700`}
						alt={image.title}
						data-sal={scrollSettings.animation}
						data-sal-duration={scrollSettings.duration}
					/>
					<SectionSubtitle>{image.title}</SectionSubtitle>
				</ImageContainer>
			);
		});
	}
	return (
		<Layout
			insta={data.site.siteMetadata.instaAPI}
			pageName={graphic.title}
		>
			<ContentContainer>
				<BtnInnerLink to="/graphic-design/">Back</BtnInnerLink>
				<SectionTitle style={{ marginBottom: '26px' }}>
					{graphic.title}
				</SectionTitle>
				<Desc>{graphic.description.description}</Desc>
				<ImagesFull>{imagesFull}</ImagesFull>
				<ImagesHalf>{imagesHalf}</ImagesHalf>
				<BtnInnerLink
					to="/graphic-design/"
					style={{ display: 'block', margin: '20px auto' }}
				>
					Back
				</BtnInnerLink>
			</ContentContainer>
		</Layout>
	);
};

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

export default GraphicDesignTemplate;
