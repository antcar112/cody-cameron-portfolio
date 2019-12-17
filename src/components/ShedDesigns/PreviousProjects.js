import React from 'react';

import ImageGrid from '../ImageGrid/ImageGrid';

const PreviousProjects = ({ shoes }) => {
	const previousWork = shoes.map(shoe => {
		return {
			id    : shoe.id,
			title : shoe.title,
			image : shoe.image.file.url
		};
	});

	return (
		<ImageGrid
			content={previousWork}
			title={'Previous Projects'}
			loading={false}
		/>
	);
};

export default PreviousProjects;
