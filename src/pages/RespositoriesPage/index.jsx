import React from 'react';
import * as S from './styles';
import Profile from './Profile';

const RepositoriesPage = () => {
	console.log('object');

	return (
		<S.Container>
			<S.SideBar>
				<Profile />
			</S.SideBar>
			<S.Main>Main</S.Main>
		</S.Container>
	);
};

export default RepositoriesPage;
