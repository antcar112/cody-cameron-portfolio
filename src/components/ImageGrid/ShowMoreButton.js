import React, { Component } from 'react';
import styled from 'styled-components';
import { Btn } from '../Button/Button';

import { media } from '../../utils/media';

const ShowMoreBtn = styled(Btn)`
	display: none;
	width: 100%; 
	&.showButtonThreeCol {
		display: block;
	}

	${media.down.lg} {
		&.showButtonTwoCol {
			display: block;
		}
	} 

	${media.down.xs} {
		&.showButtonOneCol {
			display: block;
		}
	}
`;

export class ShowMoreButton extends Component {
	render() {
		const {
			content,
			showOneCol,
			showTwoCol,
			showThreeCol,
			showMoreImages
		} = this.props;

		let showMoreButtonClasses;

		if (showOneCol < content.length) {
			showMoreButtonClasses = 'showButtonOneCol';
		}
		if (showTwoCol < content.length) {
			showMoreButtonClasses = 'showButtonTwoCol';
		}
		if (showThreeCol < content.length) {
			showMoreButtonClasses = 'showButtonThreeCol';
		}
		return (
			<ShowMoreBtn
				className={showMoreButtonClasses}
				onClick={showMoreImages}
			>
				Show More
			</ShowMoreBtn>
		);
	}
}

export default ShowMoreButton;
