import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import Theme from '../styles/Theme';
import Head from '../components/Head/Head';
import Navbar from './Navbar/Navbar.js';
import Footer from './Footer/Footer.js';

export default ({ insta, children, pageName }) => {
	return (
		<ThemeProvider theme={Theme}>
			<Head pageName={pageName} />
			<GlobalStyle />
			<Fragment>
				<Navbar />
				<main>{children}</main>
				<Footer insta={insta} />
			</Fragment>
		</ThemeProvider>
	);
};
