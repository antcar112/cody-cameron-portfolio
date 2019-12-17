import React from 'react';

const SocialItem = ({ site: { icon, url } }) => (
	<li>
		<a href={url} target="_blank" rel="noopener noreferrer">
			{icon}
		</a>
	</li>
);

export default SocialItem;
