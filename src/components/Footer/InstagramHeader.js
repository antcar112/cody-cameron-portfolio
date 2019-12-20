import React from 'react';
import styled from 'styled-components';

import { ArticleSubtitle } from '../Text/Text';

const InstaHeader = styled.div`
	text-align: center;

	& a {
		color: ${props => props.theme.color.white};
		text-decoration: none;
		font-family: ${props => props.theme.font.heading};
	}
`;

const InstagramHeader = () => {
	return (
		<InstaHeader>
			<ArticleSubtitle light>
				<a
					href="https://www.instagram.com/sheddesigns1/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Instagram Feed
				</a>
			</ArticleSubtitle>
		</InstaHeader>
	);
};

export default InstagramHeader;
