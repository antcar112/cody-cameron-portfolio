import styled, { css } from 'styled-components';

const NavStyles = css`
	& li {
		& a {
			color: ${props => props.theme.color.white};
			font-size: 1.3em;
			display: flex;
			align-items: center;
			height: 60px;
			width: 100%;
			padding: 0 0.6rem;
			position: relative;

			&:hover::after,
			&:active::after,
			&:focus::after {
				transform: scaleX(1);
				transition: transform ${props => props.theme.transition};
			}

			&::after {
				content: '';
				left: 0;
				right: 0;
				bottom: 0;
				height: 5px;
				background-color: ${props => props.theme.color.gold};
				position: absolute;
				transform: scaleX(0);
				transform-origin: 50%;
			}
		}
	}
`;

const NavDrawerStyles = css`
	/* border-top: ${props => props.theme.navDrawerBorder}; */
	& li {
		display: flex;
		width: 100%;
		text-align: center;

		& a {
			color: ${props => props.theme.color.black};
			font-size: 1.5em;
			display: block;
			width: 100%;
			padding: 1.5rem 0;

			&:hover,
			&:active,
			&:focus {
				background-color: ${props => props.theme.color.drawerHover};
			}
		}
	}
`;

const FooterStyles = css`
	& li {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0;

		& a {
			color: ${props => props.theme.color.white};
			font-size: 1.7em;
			padding: 0.5em 1em;
			margin: 0 5px;
		}
	}
`;

export const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	justify-content: center;

	& a {
		text-decoration: none;
		width: 100%;

		transition: background-color ${props => props.theme.transition},
			color ${props => props.theme.transition};

		&:hover,
		&:active,
		&:focus {
			color: ${props => props.theme.color.gold};
		}
	}

	${props => props.location === 'nav-drawer' && NavDrawerStyles};
	${props => props.location === 'footer' && FooterStyles};
	${props => props.location === 'nav' && NavStyles};
`;
