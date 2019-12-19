import React from 'react';

import scrollSettings from '../../utils/scrollSettings';

import PortfolioItem from './PortfolioItem';
import { ArticleTitle, ArticleSubtitle, Text } from '../Text/Text';
import { BtnInnerLink } from '../Button/Button';

const HomePortfolioItem = ({ section, index }) => (
	<PortfolioItem index={index}>
		<ArticleTitle>{section.title}</ArticleTitle>
		<ArticleSubtitle>{section.subtitle}</ArticleSubtitle>
		<img
			src={section.image}
			alt={section.title}
			data-sal={scrollSettings.animation}
			data-sal-duration={scrollSettings.duration}
			data-sal-delay={scrollSettings.delay}
		/>
		<Text>{section.description}</Text>

		<BtnInnerLink to={`/${section.link}/`}>+ See More</BtnInnerLink>
	</PortfolioItem>
);

export default HomePortfolioItem;
