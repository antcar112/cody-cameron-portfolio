import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '../../utils/media';
import { MdMenu } from 'react-icons/md';
import { Link } from 'gatsby';

import SocialList from '../SocialMedia/SocialList';
import NavbarList from './NavbarList';
import NavbarDrawer from './NavbarDrawer';
import FullPageBackground from './FullPageBackground';

const Nav = styled.nav`
	background-color: ${props => props.theme.color.black};
	color: ${props => props.theme.color.white};
	height: ${props => props.theme.navHeight};
	margin: 0;
	position: fixed;
	width: 100%;
	z-index: 10;
	box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5);
`;

const NavbarOuterContainer = styled.div`
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

const Navbar = () => {
	let [
		showDrawer,
		setShowDrawer
	] = useState(false);

	function toggleDrawer() {
		setShowDrawer(!showDrawer);
	}

	return (
		<Nav>
			<NavbarOuterContainer>
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
			</NavbarOuterContainer>
			<NavbarDrawer showDrawer={showDrawer} hideDrawer={toggleDrawer} />
			<FullPageBackground show={showDrawer} hideDrawer={toggleDrawer} />
		</Nav>
	);
};

export default Navbar;
