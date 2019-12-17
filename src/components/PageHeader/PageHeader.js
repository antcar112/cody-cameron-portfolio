import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/media';
import { PageTitle } from '../Text/Text';

const HeaderContainer = styled.div`
	width: 100%;
	height: 60vh;
	background-color: ${props => props.theme.color.lightGrey};
	display: flex;
	justify-content: space-between;
	position: relative;
	box-shadow: 2px 0 10px rgba(0, 0, 0, 0.35);

	${media.down.xl} {
		height: 55vh;
	}
	${media.down.lg} {
		height: 50vh;
	}
	${media.down.md} {
		height: 45vh;
		display: block;
	}
	${media.down.sm} {
		height: 40vh;
	}
	${media.down.xs} {
		height: 35vh;
	}
`;

const TitleContainer = styled.div`
	width: 34%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);

	${media.down.xl} {
		width: 46%;
	}
	${media.down.lg} {
	}
	${media.down.md} {
		top: 0;
		right: 0;
		bottom: 0;
		bottom: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.35);
		position: absolute;
		z-index: 2;
		text-shadow: 2px 2px 8px rgba(255, 255, 255, 0.25);
	}
	${media.down.xs} {
	}

	& h1 {
	}
`;
const ImageContainer = styled.div`
	width: 66%;
	height: 100%;
	background-color: ${props => props.theme.color.lightGrey};
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		width: 10px;
		height: 100%;
		bottom: 0;
		left: 0;
		background-color: ${props => props.theme.color.gold};

		${media.down.md} {
			width: 100%;
			height: 10px;
			z-index: 3;
		}
	}

	${media.down.xl} {
		width: 64%;
	}
	${media.down.lg} {
	}
	${media.down.md} {
		width: 100%;
	}
	${media.down.xs} {
	}
`;

const PageHeader = ({ title, headerImage }) => (
	<HeaderContainer>
		<TitleContainer>
			<PageTitle>{title}</PageTitle>
		</TitleContainer>
		<ImageContainer style={{ backgroundImage: `url(${headerImage})` }} />
	</HeaderContainer>
);

export default PageHeader;
