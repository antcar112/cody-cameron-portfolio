import React from 'react';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';
import { Link } from 'gatsby';
import { media } from '../../utils/media';

import SocialList from '../SocialMedia/SocialList';
import NavbarList from './NavbarList';

const NavbarOuter = styled.div`
	height: 100%;
	margin: 0 25px;
	padding: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	${media.down.lg} {
		margin: 0 25px 0 0;
	}
`;

const NavBarDesktopContainer = styled.div`
	display: flex;
	${media.down.lg} {
		display: none;
	}
`;

const NavbarHamburger = styled.button`
	height: 100%;
	padding: 0 25px;
	cursor: pointer;
	display: none;
	border: none;
	background: none;

	${media.down.lg} {
		display: inline;
	}

	&:hover svg,
	&:active svg,
	&:focus svg {
		color: ${props => props.theme.color.gold};
	}

	& svg {
		font-size: 2.3rem;
		color: ${props => props.theme.color.white};
		transition: color ${props => props.theme.transition};
		${media.down.xs} {
			font-size: 2em;
		}
	}
`;

const LogoContainer = styled.div`
	padding: 0 0.6rem;
	& a {
		color: ${props => props.theme.color.white};
		text-decoration: none;
		font-family: ${props => props.theme.font.cursive};
		font-size: 1.7em;
		transition: color ${props => props.theme.transition};
		${media.down.xs} {
			font-size: 1.3em;
		}

		&:hover,
		&:active,
		&:focus {
			color: ${props => props.theme.color.gold};
			text-decoration: none;
		}
	}
`;

const NavbarOuterContainer = ({ toggleDrawer }) => (
	<NavbarOuter>
		<NavbarHamburger onClick={toggleDrawer}>
			<MdMenu className="Navbar__hamburger-icon" />
		</NavbarHamburger>
		<LogoContainer>
			<Link to="/">Cody Cameron</Link>
		</LogoContainer>
		<NavBarDesktopContainer>
			<NavbarList view="desktop" />
			<SocialList location="nav" />
		</NavBarDesktopContainer>
	</NavbarOuter>
);

export default NavbarOuterContainer;
