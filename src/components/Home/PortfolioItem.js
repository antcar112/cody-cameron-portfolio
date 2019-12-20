import styled, { css } from 'styled-components';

import { media } from '../../utils/media';

const OddStyles = css`
	grid-template-columns: 4fr 3fr;
	grid-template-areas: 'portfolioImage portfolioTitle'
		'portfolioImage portfolioSubtitle' 'portfolioImage portfolioParagraph'
		'portfolioImage portfolioButton';

	${media.down.xl} {
		grid-template-columns: 2fr 1fr;
	}
`;
const EvenStyles = css`
	grid-template-columns: 3fr 4fr;
	grid-template-areas: 'portfolioTitle portfolioImage'
		'portfolioSubtitle portfolioImage' 'portfolioParagraph portfolioImage'
		'portfolioButton portfolioImage';

	${media.down.xl} {
		grid-template-columns: 1fr 2fr;
	}
`;

export default styled.section`
	${props => props.index !== 1 && 'margin-top: 60px'};
	display: grid;
	grid-gap: 0 60px;
	grid-template-rows: min-content min-content 1fr min-content;
	${props => (props.index % 2 === 0 ? EvenStyles : OddStyles)};

	& h1 {
		text-align: left;
		grid-area: portfolioTitle;
		margin-bottom: 25px;
	}

	& h2 {
		text-align: left;
		margin: 0 0 25px;
		grid-area: portfolioSubtitle;
	}

	& img {
		width: 100%;
		grid-area: portfolioImage;
	}

	& p {
		margin: 20px 0 0;
		padding: 0;
		font-size: 1em;
		grid-area: portfolioParagraph;
	}

	& a {
		align-self: end;
		grid-area: portfolioButton;
	}
	${media.down.lg} {
		grid-template-columns: 1fr;
		grid-template-areas: 'portfolioTitle' 'portfolioSubtitle'
			'portfolioImage' 'portfolioParagraph' 'portfolioButton';

		& h1 {
			text-align: center;
			grid-area: portfolioTitle;
		}

		& h2 {
			text-align: center;
			margin: 0px 0 30px;
		}
		& p {
			margin: 40px 15px 40px;
		}
		& a {
			margin: 0 10px;
		}
	}
	${media.down.sm} {
		& h2 {
			margin: 10px 0 20px;
		}

		& p {
			margin: 30px 20px;
			font-size: 0.95em;
		}
	}
`;
