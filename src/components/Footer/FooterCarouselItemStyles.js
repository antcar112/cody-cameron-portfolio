import styled from 'styled-components';

export const CarouselItem = styled.div`
	color: ${props => props.theme.color.white};
	height: 250px;
	margin: 0 5px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	overflow: hidden;

	&:hover a,
	&:active a,
	&:focus a {
		opacity: 1;
		color: ${props => props.theme.color.white};
		text-decoration: none;
	}
`;

export const CarouselLink = styled.a`
	width: 100%;
	height: 100%;
	display: block;
	background: rgba(0, 0, 0, 0.75);
	color: ${props => props.theme.color.white};
	text-decoration: none;
	text-align: center;
	opacity: 0;
	transition: opacity ${props => props.theme.transition};
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const CarouselText = styled.div`
	overflow: hidden;
	margin: 30px 25px 12px;
`;

export const CarouselLogo = styled.div`
	display: flex;
	justify-content: flex-end;
	font-size: 1.6em;
	color: rgba(238, 238, 238, 0.8);
	margin: 0 10px 10px;
`;
