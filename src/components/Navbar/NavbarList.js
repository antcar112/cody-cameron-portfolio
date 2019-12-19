import React from 'react';
import styled, { css } from 'styled-components';
import NavbarItem from './NavbarItem';

const mobileStyles = css`
	flex-direction: column;
	padding: 0;
`;

const desktopStyles = css`padding: 0 20px;`;

const NavList = styled.ul`
	margin: 0;
	list-style: none;
	display: flex;
	${props => (props.view === 'mobile' ? mobileStyles : desktopStyles)};
`;

const navLinks = [
	{
		title : 'Home',
		path  : '/'
	},
	{
		title : 'Shed Designs',
		path  : '/shed-designs/'
	},
	{
		title : 'Motion Graphics',
		path  : '/motion-graphics/'
	},
	{
		title : 'Graphic Design',
		path  : '/graphic-design/'
	},
	{
		title : 'About',
		path  : '/about/'
	},
	{
		title : 'Contact',
		path  : '/contact/'
	}
];

const NavbarList = ({ view }) => {
	const links = navLinks.map(link => (
		<NavbarItem
			link={link}
			view={view}
			key={link.title.replace(' ', '-')}
		/>
	));
	return <NavList view={view}>{links}</NavList>;
};

export default NavbarList;
