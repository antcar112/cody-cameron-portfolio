import styled from 'styled-components';
import { media } from '../../utils/media';

export const PageTitle = styled.h1`
	text-align: center;
	font-family: ${props => props.theme.font.cursive};
	font-weight: 400;
	font-size: 6em;
	margin: 0 30px;

	${media.down.xl} {
		font-size: 5.5em;
	}
	${media.down.lg} {
	}
	${media.down.md} {
		font-size: 5.5em;
		color: ${props => props.theme.color.white};
	}
	${media.down.sm} {
		font-size: 5em;
	}
	${media.down.xs} {
		font-size: 4.3em;
	}
`;

export const SectionTitle = styled.h1`
	color: ${props =>
		props.light ? props.theme.color.white : props.theme.color.black};
	text-align: center;
	font-family: ${props => props.theme.font.cursive};
	font-weight: 400;
	font-size: 5em;
	margin: 0 30px;

	${media.down.xl} {
	}
	${media.down.lg} {
		font-size: 4.5em;
	}
	${media.down.md} {
		font-size: 4em;
	}
	${media.down.sm} {
		font-size: 3.8em;
	}
	${media.down.xs} {
		font-size: 3.5em;
	}
`;

export const ArticleTitle = styled.h1`
	color: ${props =>
		props.light ? props.theme.color.white : props.theme.color.black};
	text-align: center;
	font-family: ${props => props.theme.font.cursive};
	font-weight: 400;
	font-size: 3.4em;
	line-height: 1em;
	/* text-shadow: 0 0 6px rgba(40, 40, 40, 0.2); */

	${media.down.xl} {
		font-size: 3em;
	}
	${media.down.lg} {
	}
	${media.down.md} {
	}
	${media.down.sm} {
		font-size: 2.6em;
	}
	${media.down.xs} {
		font-size: 2.4em;
	}
`;

export const SectionSubtitle = styled.h2`
	color: ${props =>
		props.light ? props.theme.color.white : props.theme.color.black};
	text-align: center;
	font-family: ${props => props.theme.font.heading};
	font-size: 2.1em;
	margin-top: 10px;
	/* text-shadow: 0 0 4px rgba(40, 40, 40, 0.2); */

	${media.down.xl} {
		font-size: 2em;
	}
	${media.down.lg} {
	}
	${media.down.md} {
		font-size: 1.85em;
	}
	${media.down.sm} {
		font-size: 1.8em;
	}
	${media.down.xs} {
		font-size: 1.7em;
	}
`;

export const ArticleSubtitle = styled.h2`
	color: ${props =>
		props.light ? props.theme.color.white : props.theme.color.black};
	text-align: center;
	font-family: ${props => props.theme.font.heading};

	font-size: 1.8em;
	/* text-shadow: 0 0 4px rgba(40, 40, 40, 0.2); */

	${media.down.xl} {
		font-size: 1.6em;
	}
	${media.down.lg} {
	}
	${media.down.md} {
	}
	${media.down.sm} {
		font-size: 1.4em;
	}
	${media.down.xs} {
		font-size: 1.2em;
	}
`;

export const Text = styled.p`
	font-size: 16px;
	font-weight: 100;
	line-height: 1.375em;
	color: ${props =>
		props.light ? props.theme.color.white : props.theme.color.black};

	${media.down.xl} {
	}
	${media.down.lg} {
	}
	${media.down.md} {
	}
	${media.down.sm} {
		line-height: 1.25em;
	}
	${media.down.xs} {
	}
`;
