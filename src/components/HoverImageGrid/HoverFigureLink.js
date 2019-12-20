import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { media } from '../../utils/media';

const Fig = styled.figure`
	margin: 0 auto;
	overflow: hidden;
	position: relative;
	max-width: 450px;

	&:hover .image-div {
		transform: scale(1.03);
	}
	&:hover .text-div {
		transform: translateY(0);
	}
	&:hover .desc-div span {
		opacity: 1;
		transition: opacity 200ms ease-in-out 100ms;
	}
`;

const ImageDiv = styled.div`
	width: 100%;
	height: 100%;
	transition: transform 150ms ease-in;
`;

const TextDiv = styled.div`
	background-color: rgba(0, 0, 0, 0.7);
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 1;
	bottom: 0;
	transform: translateY(100%);
	transition: transform 150ms linear;

	${media.down.md} {
		transform: translateY(0);
	}

	& .title-div {
		width: 80%;
		height: 50%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin: 40% auto 10%;

		${media.down.md} {
			margin: 20% auto;
			height: 60%;
		}

		& h1 {
			color: white;
			font-family: ${props => props.theme.font.cursive};
			text-align: center;
			font-size: 2em;
		}

		& span {
			color: white;
			font-family: ${props => props.theme.font.body};
			margin-top: 3em;
		}
	}
`;

const HoverFigureLink = ({ content, parentPage }) => (
	<Link
		to={`/${parentPage}/${content.slug}`}
		style={{ textDecoration: 'none' }}
	>
		<Fig>
			<TextDiv className="text-div">
				<div className="title-div">
					<h1>{content.title}</h1>
					<span>+ See More</span>
				</div>
			</TextDiv>
			<ImageDiv className="image-div">
				<img
					src={`${content.thumbnail.file.url}?fit=fill&w=450&h=450`}
					alt={content.title}
				/>
			</ImageDiv>
		</Fig>
	</Link>
);

export default HoverFigureLink;
