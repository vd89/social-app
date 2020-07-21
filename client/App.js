/** @format */

import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

import theme from './theme';
import MainRoute from './MainRoute';

const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<MainRoute />
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
