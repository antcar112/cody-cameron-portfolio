import React, { useState } from 'react';
import styled from 'styled-components';

import NavbarOuterContainer from './NavbarOuterContainer';
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
			<NavbarOuterContainer toggleDrawer={toggleDrawer} />
			<NavbarDrawer showDrawer={showDrawer} hideDrawer={toggleDrawer} />
			<FullPageBackground show={showDrawer} hideDrawer={toggleDrawer} />
		</Nav>
	);
};

export default Navbar;
