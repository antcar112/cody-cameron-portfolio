import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ pageName }) => (
	<Helmet>
		<title>Cody Cameron - {pageName}</title>
	</Helmet>
);

export default Head;
