import React from 'react';
import * as S from './styles';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Respositories';

const RepositoriesPage = () => {
	const user = {
		login: 'anthonibs',
		followers: 20,
		following: 39,
		avatar_url: 'https://avatars.githubusercontent.com/u/77931577?v=4',
		company: null,
		blog: 'https://www.linkedin.com/in/anthoni-broering-dos-santos/',
		location: 'Florianópolis ',
		name: 'Anthoni Broering dos Santos',
		bio: 'Estudante de Análise e Desenvolvimento de Sistemas. Atualmente estudando HTML, CSS e JavaScript',
	};

	return (
		<S.Container>
			<S.SideBar>
				<Profile user={user} />
				<Filter />
			</S.SideBar>
			<S.Main>
				<Repositories />
			</S.Main>
		</S.Container>
	);
};

export default RepositoriesPage;
