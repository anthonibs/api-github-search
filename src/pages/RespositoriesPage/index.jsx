import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import * as S from './styles';

import { getUser, getRepos } from '../../services/api';
import { getLangsFrom } from '../../utils/colorLanguage';

const RepositoriesPage = () => {
	const { login } = useParams();

	const [user, setUser] = useState();
	const [repositories, setRepositories] = useState();
	const [languages, setLanguages] = useState();
	const [currentLanguage, setCurrentLanguage] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadData = async () => {
			const [userResponse, repositoriesResponse] = await Promise.all([
				getUser(login),
				getRepos(login),
			]);

			setUser(userResponse.data);
			setRepositories(repositoriesResponse.data);
			setLanguages(getLangsFrom(repositoriesResponse.data));

			setLoading(false);
		};

		loadData();
	}, []);

	const onFilterClick = language => {
		setCurrentLanguage(language);
	};

	if (loading) {
		return <S.Loading>Carregando...</S.Loading>;
	}

	return (
		<S.Container>
			<S.Sidebar>
				<Profile user={user} />
				<Filter
					languages={languages}
					currentLanguage={currentLanguage}
					onClick={onFilterClick}
				/>
			</S.Sidebar>
			<S.Main>
				<Repositories
					repositories={repositories}
					currentLanguage={currentLanguage}
				/>
			</S.Main>
		</S.Container>
	);
};

export default RepositoriesPage;
