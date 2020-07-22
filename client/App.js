/** @format */

import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import theme from './theme';
import MainRoute from './MainRoute';

const App = () => {
	React.useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<MainRoute />
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default hot(module)(App);
