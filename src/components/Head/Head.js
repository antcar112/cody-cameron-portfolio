import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ children }) => (
	<Helmet>
		<title>Cody Cameron - {children}</title>
	</Helmet>
);

export default Head;
