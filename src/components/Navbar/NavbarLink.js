import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const mobileLinkStyles = css`
	color: ${props => props.theme.color.black};
	width: 100%;
	padding: 1.4rem 0;
	position: relative;

	&:hover,
	&:active,
	&:focus {
		background-color: ${props => props.theme.color.drawerHover};
	}

	&::after {
		left: 0;
		top: 0;
		bottom: 0px;
		width: 5px;
		transform: scaleY(0);
	}

	&:hover::after,
	&:active::after,
	&:focus::after {
		transform: scaleY(1);
		transition: transform ${props => props.theme.transition};
	}

	&.activeNav {
		background-color: ${props => props.theme.color.drawerActive};

		&::after {
			transform: scaleY(1);
		}
	}
`;

const desktopLinkStyles = css`
	color: ${props => props.theme.color.white};
	padding: 0 0.8rem;
	position: relative;

	height: ${props => props.theme.navHeight};
	line-height: ${props => props.theme.navHeight};

	&.activeNav {
		&::after {
			transform: scaleX(1);
		}
	}

	&:hover::after,
	&:active::after,
	&:focus::after {
		transform: scaleX(1);
		transition: transform ${props => props.theme.transition};
	}

	&::after {
		left: 0;
		right: 0;
		bottom: 0;
		height: 5px;
		transform: scaleX(0);
	}
`;

export default styled(Link)`
		text-transform: lowercase;
		text-decoration: none;
		font-size: 16px;
		transition: background-color ${props => props.theme.transition},
			color ${props => props.theme.transition};
		display: block;

		&::after {
			content: '';
			background-color: ${props => props.theme.color.gold};
			position: absolute;
			transform-origin: 50%;
		}

		${props => (props.view === 'mobile' ? mobileLinkStyles : desktopLinkStyles)};

		&:hover,
		&:active,
		&:focus {
			text-decoration: none;
			color: ${props => props.theme.color.gold};
		}
	
`;
