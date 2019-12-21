import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ pageName }) => (
	<Helmet>
		<title>Cody Cameron - {pageName}</title>
		<meta name="theme-color" content="#000000" />
	</Helmet>
);

export default Head;
