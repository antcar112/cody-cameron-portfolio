import React from 'react';
import PortfolioItem from './PortfolioItem';
import { ArticleTitle, ArticleSubtitle, Text } from '../Text/Text';
import { BtnInnerLink } from '../Button/Button';

const HomePortfolioItem = ({ section, index }) => (
	<PortfolioItem index={index}>
		<ArticleTitle>{section.title}</ArticleTitle>
		<ArticleSubtitle>{section.subtitle}</ArticleSubtitle>
		<img src={section.image} alt={section.title} />
		<Text>{section.description}</Text>

		<BtnInnerLink to={section.link}>+ See More</BtnInnerLink>
	</PortfolioItem>
);

export default HomePortfolioItem;
