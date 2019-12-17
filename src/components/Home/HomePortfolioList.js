import React from 'react';
import styled from 'styled-components';
import HomePortfolioItem from './HomePortfolioItem';
import ContentContainer from '../ContentContainer/ContentContainer';

import { homePortfolio } from '../../content/home';

const PortfolioList = styled.article`
	background-color: ${props => props.theme.color.lightGrey};
`;

const HomePortfolioList = () => {
	const sections = homePortfolio.map((item, index) => (
		<HomePortfolioItem section={item} key={item.id} index={index + 1} />
	));

	return (
		<PortfolioList>
			<ContentContainer>{sections}</ContentContainer>
		</PortfolioList>
	);
};

export default HomePortfolioList;
