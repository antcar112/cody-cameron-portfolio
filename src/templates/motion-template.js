import React from 'react';
import Layout from '../components/layout';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import { SectionTitle, SectionSubtitle } from '../components/Text/Text';
import { graphql } from 'gatsby';

export const query = graphql`
	query($slug: String!) {
		motion: contentfulMotionGraphics(slug: { eq: $slug }) {
			title
			description {
				description
			}
			videos {
				title
				file {
					url
				}
			}
			gifs {
				file {
					url
				}
			}
		}
		site {
			siteMetadata {
				instaAPI
			}
		}
	}
`;

const MotionTemplate = ({ data }) => {
	const { motion } = data;
	let videos = '';
	if (motion.videos) {
		videos = motion.videos.map(video => {
			return (
				<div style={{ marginBottom: '60px' }}>
					<video
						src={video.file.url}
						style={{ width: '100%' }}
						controls
						muted
					/>

					<SectionSubtitle>{video.title}</SectionSubtitle>
				</div>
			);
		});
	}
	let gifs = '';
	if (motion.gifs) {
		gifs = motion.gifs.map(gif => {
			return (
				<div style={{ marginBottom: '15px', width: '100%' }}>
					<img
						src={gif.file.url}
						alt={gif.title}
						style={{
							height    : '38px',
							width     : '100%',
							objectFit : 'cover'
						}}
					/>
				</div>
			);
		});
	}
	return (
		<Layout insta={data.site.siteMetadata.instaAPI}>
			<ContentContainer>
				<SectionTitle style={{ marginBottom: '26px' }}>
					{motion.title}
				</SectionTitle>
				<p style={{ marginBottom: '30px' }}>
					{motion.description.description}
				</p>
				{videos}
			</ContentContainer>
			<div style={{ marginBottom: '60px', width: '100%' }}>{gifs}</div>
		</Layout>
	);
};

export default MotionTemplate;
