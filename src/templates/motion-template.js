import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { media } from '../utils/media';
import scrollSettings from '../utils/scrollSettings';

import Layout from '../components/layout';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import { SectionTitle, SectionSubtitle } from '../components/Text/Text';
import { BackBtn, BackBtnFull } from '../components/Button/Button';

const Desc = styled.p`
	margin: 0 0 30px;

	${media.down.xs} {
		margin: 0 20px 30px;
	}
`;

const Gif = styled.img`
	height: 36px;
	width: 100%;
	object-fit: cover;
	object-position: center;

	${media.down.sm} {
		object-position: -60px;
	}

	${media.down.xs} {
		height: 28px;
	}
`;

const MotionTemplate = ({ data }) => {
	const { motion } = data;
	let videos = '';
	if (motion.videos) {
		videos = motion.videos.map(video => {
			return (
				<div style={{ marginBottom: '60px' }} key={video.title}>
					<video
						src={video.file.url}
						style={{ width: '100%' }}
						controls
						muted
						data-sal={scrollSettings.animation}
						data-sal-duration={scrollSettings.duration}
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
				<div
					style={{ marginBottom: '15px', width: '100%' }}
					key={gif.title}
				>
					<Gif
						src={gif.file.url}
						alt={gif.title}
						data-sal={scrollSettings.animation}
						data-sal-duration={scrollSettings.duration}
						data-sal-delay={scrollSettings.delay}
					/>
				</div>
			);
		});
	}
	return (
		<Layout insta={data.site.siteMetadata.instaAPI} pageName={motion.title}>
			<ContentContainer>
				<BackBtn to="/motion-graphics/">Back</BackBtn>
				<SectionTitle style={{ marginBottom: '26px' }}>
					{motion.title}
				</SectionTitle>
				<Desc>{motion.description.description}</Desc>
				{videos}
			</ContentContainer>
			<div style={{ width: '100%' }}>{gifs}</div>
			<ContentContainer>
				<BackBtnFull
					to="/motion-graphics/"
					style={{ display: 'block', margin: '20px auto' }}
				>
					Back
				</BackBtnFull>
			</ContentContainer>
		</Layout>
	);
};

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
				title
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

export default MotionTemplate;
