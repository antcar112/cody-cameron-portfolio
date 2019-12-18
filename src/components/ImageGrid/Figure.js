import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../../utils/media';

const Fig = styled.figure`
	margin: 0 auto;
	&.hideThreeCol {
		display: none;
	}

	${media.down.lg} {
		&.hideTwoCol {
			display: none;
		}
	}

	${media.down.xs} {
		&.hideOneCol {
			display: none;
		}
	}
`;

const FigTitle = styled.figcaption`
	text-align: center;
	font-family: ${props => props.theme.font.cursive};
	font-size: 2.2em;
	line-height: 1em;
	margin: 10px;
`;
const FigSubtitle = styled.figcaption`
	text-align: center;
	font-family: ${props => props.theme.font.body};
	font-size: 1.2em;
	line-height: 1em;
	margin: 0;
`;

export class Figure extends Component {
	render() {
		const {
			content,
			index,
			showOneCol,
			showTwoCol,
			showThreeCol,
			showTitle,
			showSubtitle
		} = this.props;

		let figureClasses = '';
		if (index >= showOneCol) {
			figureClasses = `${figureClasses} hideOneCol`;
		}
		if (index >= showTwoCol) {
			figureClasses = `${figureClasses} hideTwoCol`;
		}
		if (index >= showThreeCol) {
			figureClasses = `${figureClasses} hideThreeCol`;
		}

		return (
			<Fig className={figureClasses}>
				<img
					src={`${content.image}?fit=fill&w=450&h=450`}
					alt={content.title}
				/>

				{showTitle && <FigTitle>{content.title}</FigTitle>}
				{showSubtitle && <FigSubtitle>{content.subtitle}</FigSubtitle>}
			</Fig>
		);
	}
}

export default Figure;
