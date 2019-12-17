import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import { media } from '../../utils/media';
import {
	SectionTitle,
	SectionSubtitle,
	Text
} from '../../components/Text/Text';

import stairs from '../../images/shed-designs/stairs.jpg';
import collage from '../../images/shed-designs/collage.jpg';
import face from '../../images/shed-designs/face.jpg';

const OuterContainer = styled.div`
	background-color: ${props => props.theme.color.black};
	width: 100%;
	color: ${props => props.theme.color.white};
	box-shadow: 2px 0 10px rgba(0, 0, 0, 0.35);

	${media.down.md} {
		border-bottom: 15px solid ${props => props.theme.color.gold};
	}
`;

const GridContainer = styled.div`
	padding: 20px 0 50px;
	display: grid;
	grid-gap: 30px;
	grid-template-columns: 3fr 2fr 3fr;
	/* grid-template-rows: repeat(4, 1fr) 2fr; */
	grid-template-areas: 'title title stairs' 'subtitle subtitle stairs'
		'description description stairs' 'collage list stairs'
		'collage list face';

	& .about-title {
		grid-area: title;
	}
	& .about-subtitle {
		grid-area: subtitle;
		margin-top: -30px;
	}
	& .about-description {
		grid-area: description;
		line-height: 1.8em;
		margin: 0 2em;
	}
	& .about-list {
		grid-area: list;
		margin-top: 12px;
		& li {
			line-height: 2.2em;
			font-size: 1.1em;
		}
	}
	& img.collage-image {
		grid-area: collage;
		border: 4px solid ${props => props.theme.color.white};
	}
	& img.stairs-image {
		grid-area: stairs;
	}
	& img.face-image {
		grid-area: face;
	}

	${media.down.xl} {
		grid-template-columns: 2fr 2fr;
		grid-template-areas: 'title title' 'subtitle subtitle'
			'description description' 'collage list' 'collage stairs''face stairs';
		& .about-subtitle {
			margin-top: -15px;
		}
		& img.collage-image {
			align-self: center;
		}
	}

	${media.down.md} {
		grid-template-areas: 'title title' 'subtitle subtitle'
			'description stairs' 'collage stairs' 'collage list';
		& img.face-image {
			display: none;
		}
		& .about-description {
			margin: 1em 0 0 3em;
		}
	}
	${media.down.sm} {
		grid-template-columns: 1fr;
		grid-template-areas: 'title' 'subtitle' 'description' 'collage' 'list'
			'stairs';
		& .about-description {
			margin: 0 2em;
		}
		& .about-list {
			margin: 10px auto;
			& li {
				line-height: 2em;
				font-size: 1em;
			}
		}
		& img {
			width: 97%;
			margin: 0 auto;
		}
	}
`;

const ShedDesignsAbout = ({ content }) => (
	<OuterContainer>
		<ContentContainer>
			<GridContainer>
				<SectionTitle className="about-title" light>
					About Shed Designs
				</SectionTitle>
				<SectionSubtitle light className="about-subtitle">
					Creative Coordinator/Head Artist
				</SectionSubtitle>
				<Text light className="about-description">
					As an artist with Shed Designs I help create one of a kind
					custom hand painted Vans skate shoes for some incredible
					clients from across the globe.
				</Text>
				<img
					className="collage-image"
					src={collage}
					alt="collage of logos"
				/>
				<ul className="about-list">
					{content.map(c => <li key={c.id}>{c.title}</li>)}
				</ul>
				<img
					className="stairs-image"
					src={stairs}
					alt="shoes on stairs"
				/>
				<img className="face-image" src={face} alt="shoes held up" />
			</GridContainer>
		</ContentContainer>
	</OuterContainer>
);

export default ShedDesignsAbout;
