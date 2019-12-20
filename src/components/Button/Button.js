import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import { media } from '../../utils/media';

const SharedStyles = css`
	background-color: ${props => props.theme.color.black};
	color: ${props => props.theme.color.white};
	font-weight: 400;
	text-align: center;
	text-decoration: none;
	padding: 0.8em 2em;
	position: relative;
	box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.3);
	transition: color ${props => props.theme.transition},
		background-color ${props => props.theme.transition};

	&:hover,
	&:active,
	&:focus {
		color: ${props => props.theme.color.gold};
		text-decoration: none;
		background-color: rgba(${props => props.theme.color.blackRGB}, 0.95);
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

export const BtnLink = styled.a`${SharedStyles};`;

export const BtnInnerLink = styled(Link)`${SharedStyles};`;

export const BackBtn = styled(Link)`
	${SharedStyles};
	${media.down.md} {
		display: inline-block;
		margin: -30px 20px 20px;
	}
`;

export const BackBtnFull = styled(Link)`
	${SharedStyles};
	display: block;
	margin: 20px auto;
`;

export const Btn = styled.button`
	border: none;
	cursor: pointer;
	${SharedStyles};
`;
