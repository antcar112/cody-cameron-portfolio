import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import Theme from '../styles/Theme';
import Navbar from './Navbar/Navbar.js';
import Footer from './Footer/Footer.js';

export default ({ insta, children }) => {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<Fragment>
				<Navbar />
				<main>{children}</main>
				<Footer insta={insta} />
			</Fragment>
		</ThemeProvider>
	);
};
