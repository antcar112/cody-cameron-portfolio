import React from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import Grid from './Grid';
import HoverFigureLink from './HoverFigureLink';

const HoverImageGrid = ({ content, parentPage }) => (
	<ContentContainer>
		<Grid>
			{content.map(c => {
				return (
					<HoverFigureLink
						content={c}
						key={c.slug}
						parentPage={parentPage}
					/>
				);
			})}
		</Grid>
	</ContentContainer>
);

export default HoverImageGrid;
