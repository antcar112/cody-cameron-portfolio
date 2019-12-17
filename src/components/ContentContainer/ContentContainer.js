import styled from 'styled-components';
import { media } from '../../utils/media';

export default styled.div`
	margin: 0 auto;
	padding: 50px 0;
	max-width: 1300px;

	${media.down.xl} {
		width: 1000px;
	}
	${media.down.lg} {
		width: 860px;
	}
	${media.down.md} {
		width: 88%;
	}
	${media.down.sm} {
		width: 94%;
	}
	${media.down.xs} {
		width: 100%;
	}

	/* Colors */

	/* background-color: olive;
	${media.down.xl} {
		background-color: pink;
	}
	${media.down.lg} {
		background-color: red;
	}
	${media.down.md} {
		background-color: green;
	}
	${media.down.sm} {
		background-color: yellow;
	}
	${media.down.xs} {
		background-color: blue;
	} */
`;
