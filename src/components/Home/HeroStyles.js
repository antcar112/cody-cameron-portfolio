import styled from 'styled-components';
import { media } from '../../utils/media';
import homeCover from '../../images/home/home-cover.jpg';

export const HeroContainer = styled.div`
	background-image: url(${homeCover});
	width: 100%;
	height: calc(100vh - ${props => props.theme.navHeight});

	color: ${props => props.theme.color.white};
	background-repeat: no-repeat;
	background-position: center top;
	background-size: cover;
	background-attachment: fixed;
	overflow: hidden;

	${media.down.sm} {
		height: calc(100vh - ${props => props.theme.navHeightMobile});
	}
`;

export const HeroTitleWrapper = styled.div`
	height: 90%;
	width: 80%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& h1 {
		font-family: ${props => props.theme.font.cursive};
		font-size: 7em;
		text-shadow: 2px 2px 15px rgb(24, 24, 24);
		margin-bottom: 26px;
	}

	& h2 {
		font-family: ${props => props.theme.font.heading};
		font-size: 2em;
		text-shadow: 2px 2px 15px rgb(24, 24, 24);
		margin-top: 0;
	}

	${media.down.lg} {
		height: 80%;
		& h1 {
			font-size: 5em;
			margin-bottom: 16px;
		}

		& h2 {
			font-size: 1.6em;
		}
	}

	${media.down.sm} {
		height: 75%;
		& h1 {
			font-size: 4em;
			margin-bottom: 8px;
		}
		& h2 {
			font-size: 1.2em;
		}
	}
	${media.down.xs} {
		& h1 {
			font-size: 3.2em;
		}
	}
`;

export const HeroScrollWrapper = styled.div`
	cursor: pointer;
	width: 120px;
	height: 10%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& svg {
		font-size: 7rem;
		transition: transform ${props => props.theme.transition},
			color ${props => props.theme.transition};
		z-index: 2;
		text-shadow: 2px 2px 15px rgb(24, 24, 24);

		${media.down.sm} {
			font-size: 6rem;
		}
	}

	&:hover svg {
		color: ${props => props.theme.color.gold};
		transform: translate(0, 5px);
	}
`;
