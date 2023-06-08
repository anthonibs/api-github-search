import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import RepositoriesPage from './pages/RespositoriesPage';

export const AppRoutes = () => (
	<Routes>
		<Route
			path='/'
			index
			element={<MainPage />}
		/>
		<Route
			path='/repositories'
			element={<RepositoriesPage />}
		/>
	</Routes>
);
