import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { media } from '../utils/media';

import Head from '../components/Head/Head';
import Layout from '../components/layout';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import { SectionTitle, SectionSubtitle } from '../components/Text/Text';

const Desc = styled.p`
	margin: 0 0 30px;
	${media.down.xs} {
		margin: 0 20px 30px;
	}
`;

const ImageContainer = styled.div`marginBottom: '60px';`;
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
				<ImageContainer>
					<Image src={image.file.url} alt={image.title} />
					<SectionSubtitle>{image.title}</SectionSubtitle>
				</ImageContainer>
			);
		});
	}
	let imagesHalf = '';
	if (graphic.images) {
		imagesHalf = graphic.images.map(image => {
			return (
				<ImageContainer>
					<Image src={image.file.url} alt={image.title} />
					<SectionSubtitle>{image.title}</SectionSubtitle>
				</ImageContainer>
			);
		});
	}
	return (
		<Layout insta={data.site.siteMetadata.instaAPI}>
			<Head>{graphic.title}</Head>
			<ContentContainer>
				<SectionTitle style={{ marginBottom: '26px' }}>
					{graphic.title}
				</SectionTitle>
				<Desc>{graphic.description.description}</Desc>
				<ImagesFull>{imagesFull}</ImagesFull>
				<ImagesHalf>{imagesHalf}</ImagesHalf>
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
