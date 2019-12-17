import React from 'react';

export default function SocialItem(props) {
	const { icon, url } = props.site;

	return (
		<li>
			<a href={url} target="_blank" rel="noopener noreferrer">
				{icon}
			</a>
		</li>
	);
}
