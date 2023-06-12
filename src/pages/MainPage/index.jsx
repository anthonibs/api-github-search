import React, { useState } from 'react';

import { LuSearch } from 'react-icons/lu';

import githubLogo from '../../assets/images/github-logo.svg';

import * as S from './styles';

const MainPage = () => {
	const [login, setLogin] = useState('');

	return (
		<S.Container>
			<S.Logo
				src={githubLogo}
				height='256'
				alt='Logo GitHub'
			/>
			<S.Title>API GITHUB</S.Title>

			<S.Form>
				<S.Input
					placeholder='@usuário'
					value={login}
					onChange={event => setLogin(event.target.value)}
				/>
				<S.MyLink  to={`/${login}/repositories`}>
					<LuSearch size={24} />
				</S.MyLink>
			</S.Form>
		</S.Container>
	);
};

export default MainPage;
