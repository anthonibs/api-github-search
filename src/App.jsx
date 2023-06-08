import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Normalize } from 'styled-normalize';
import { AppRoutes } from './routes';

import { GlobalStyle } from './styles/global';
import { Theme } from './styles/Theme';

const App = () => (
	<BrowserRouter>
		<Theme>
			<AppRoutes />
			<GlobalStyle />
			<Normalize />
		</Theme>
	</BrowserRouter>
);

export default App;
