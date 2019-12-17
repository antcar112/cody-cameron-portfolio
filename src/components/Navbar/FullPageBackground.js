import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background-color: ${props => props.theme.color.black};
	transition: opacity ${props => props.theme.transition};
	position: fixed;
	z-index: 4;
	opacity: ${props => (props.show ? 0.7 : 0)};
	pointer-events: ${props => (props.show ? 'auto' : 'none')};
`;

const FullPageBackground = ({ show, hideDrawer }) => (
	<Background show={show} onClick={hideDrawer} />
);

export default FullPageBackground;
