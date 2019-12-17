import styled from 'styled-components';
import { media } from '../../utils/media';

export default styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-content: space-evenly;
	align-items: center;
	grid-gap: 40px;
	margin: 50px auto;
	& img {
		margin: 0 auto;
	}
	${media.down.xl} {
		grid-gap: 30px;
	}

	${media.down.lg} {
		grid-template-columns: 1fr 1fr;
	}
	${media.down.md} {
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
	${media.down.xs} {
		grid-template-columns: 1fr;
		grid-gap: 40px;
	}
`;
