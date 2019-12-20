import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/media';

import NavbarList from './NavbarList';
import SocialList from '../SocialMedia/SocialList';

import { MdChevronLeft } from 'react-icons/md';

const NavDrawer = styled.nav`
	position: fixed;
	right: 100%;
	top: 0;
	height: 100vh;
	background-color: ${props => props.theme.color.lightGrey};
	z-index: 5;
	width: 280px;
	transition: transform ${props => props.theme.transition};
	display: none;
	transform: ${props => props.show && 'translate(280px, 0)'};

	${media.down.lg} {
		display: block;
	}
`;

const DrawerTopContainer = styled.div`
	width: 100%;
	height: ${props => props.theme.navHeight};
	display: flex;
	justify-content: flex-start;
	align-items: center;
	border-bottom: ${props => props.theme.navDrawerBorder};
	& button {
		height: 100%;

		padding: 0 25px;
		cursor: pointer;
		border: none;
		background: none;

		&:hover svg,
		&:active svg,
		&:focus svg {
			color: ${props => props.theme.color.gold};
		}
		& svg {
			display: block;
			font-size: 2.3rem;
			height: 100%;
			color: ${props => props.theme.color.black};
			transition: color ${props => props.theme.transition};
		}
	}
`;

const DrawerMainContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* justify-content: space-between; */
	height: calc(100vh - ${props => props.theme.navHeight});
`;

const NavbarDrawer = ({ showDrawer, hideDrawer }) => (
	<NavDrawer show={showDrawer}>
		<DrawerTopContainer>
			<button className="NavbarDrawer__close-button" onClick={hideDrawer}>
				<MdChevronLeft className="NavbarDrawer__close-icon" />
			</button>
		</DrawerTopContainer>
		<DrawerMainContainer>
			<NavbarList view="mobile" />
			<SocialList location="nav-drawer" />
		</DrawerMainContainer>
	</NavDrawer>
);

export default NavbarDrawer;
