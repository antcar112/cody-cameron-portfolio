import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/media';
import { MdMenu } from 'react-icons/md';
import { Link } from 'gatsby';

import SocialList from '../SocialMedia/SocialList';

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

const NavbarList = styled.ul`
	margin: 0;
	list-style: none;
	display: flex;
	padding: 0 20px;
`;

const NavbarLink = styled(Link)`

	text-transform: lowercase;
	text-decoration: none;
	font-size: 16px;
	transition: background-color ${props => props.theme.transition},
		color ${props => props.theme.transition};
	display: block;
	color: ${props => props.theme.color.white};
	padding: 0 0.8rem;
	position: relative;

	height: ${props => props.theme.navHeight};
	line-height: ${props => props.theme.navHeight};

	&:hover,
	&:active,
	&:focus {
		text-decoration: none;
		color: ${props => props.theme.color.gold};
	}

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

`;

const Navbar = () => (
	<Nav>
		<NavbarOuterContainer>
			<NavbarHamburger>
				<MdMenu className="Navbar__hamburger-icon" />
			</NavbarHamburger>
			<LogoContainer>
				<Link to="/">Cody Cameron</Link>
			</LogoContainer>
			<NavBarDesktopContainer>
				<NavbarList>
					<li>
						<NavbarLink to="/" activeClassName="activeNav">
							Home
						</NavbarLink>
					</li>
					<li>
						<NavbarLink
							to="/shed-designs"
							activeClassName="activeNav"
						>
							Shed Designs
						</NavbarLink>
					</li>
					<li>
						<NavbarLink
							to="/motion-graphics"
							activeClassName="activeNav"
						>
							Motion Graphics
						</NavbarLink>
					</li>
					<li>
						<NavbarLink
							to="/graphic-design"
							activeClassName="activeNav"
						>
							Graphic Design
						</NavbarLink>
					</li>
					<li>
						<NavbarLink to="/about" activeClassName="activeNav">
							About
						</NavbarLink>
					</li>
					<li>
						<NavbarLink to="/contact" activeClassName="activeNav">
							Contact
						</NavbarLink>
					</li>
				</NavbarList>
				<SocialList location="nav" />
			</NavBarDesktopContainer>
		</NavbarOuterContainer>
	</Nav>
);

export default Navbar;
