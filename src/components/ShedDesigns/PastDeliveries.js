import React from 'react';
import styled from 'styled-components';

import ImageGrid from '../ImageGrid/ImageGrid';

import { media } from '../../utils/media';
import board from '../../images/shed-designs/board.jpg';

const ArtistOuterContainer = styled.div`
	width: 100%;
	background-image: url(${board});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
	padding: 30vh 0 200px;

	${media.down.md} {
		padding: 0;
	}
`;

const ArtistInnerContainer = styled.div`
	background-color: ${props => props.theme.color.lightGrey};
	margin: 0 auto;
	border-bottom: 15px solid ${props => props.theme.color.gold};
	max-width: 1380px;

	${media.down.xl} {
		width: 1060px;
	}
	${media.down.lg} {
		width: 100%;
	}
`;

const PastDeliveries = ({ artists }) => {
	const deliveries = artists.map(artist => {
		return {
			id       : artist.id,
			title    : artist.title,
			subtitle : artist.subtitle,
			image    : artist.image.file.url
		};
	});

	return (
		<ArtistOuterContainer>
			<ArtistInnerContainer>
				<ImageGrid
					content={deliveries}
					title={'Past Deliveries'}
					loading={false}
					showTitle
					showSubtitle
				/>
			</ArtistInnerContainer>
		</ArtistOuterContainer>
	);
};

export default PastDeliveries;
