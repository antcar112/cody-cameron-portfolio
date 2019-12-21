import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ pageName }) => (
	<Helmet>
		<title>Cody Cameron - {pageName}</title>
		<meta
			name="theme-color"
			content={`${props => props.theme.color.black}`}
		/>
	</Helmet>
);

export default Head;
