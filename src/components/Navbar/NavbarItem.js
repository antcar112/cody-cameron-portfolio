import React from 'react';
import styled, { css } from 'styled-components';
import NavbarLink from './NavbarLink';

const mobileStyles = css`
	display: block;
	width: 100%;
	text-align: center;
	border-bottom: ${props => props.theme.navDrawerBorder};
`;

const desktopStyles = css``;

const NavItem = styled.li`
	${props => (props.view === 'mobile' ? mobileStyles : desktopStyles)};
`;

const NavbarItem = ({ link, view }) => {
	return (
		<NavItem view={view}>
			<NavbarLink
				to={link.path}
				view={view}
				activeClassName="activeNav"
				partiallyActive={link.path === '/' ? false : true}
			>
				{link.title}
			</NavbarLink>
		</NavItem>
	);
};

export default NavbarItem;
