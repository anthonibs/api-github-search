import React from 'react';
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';
import * as S from './styles';

const Profile = () => (
	<S.Container>
		<S.Header>
			<S.Avatar
				src='https://avatars.githubusercontent.com/u/77931577?v=4'
				alt='Imagem do perfil no Github'
			/>
			<S.Login>Anthonibs</S.Login>
			<S.Name>Anthoni Broeing dos Santos</S.Name>
		</S.Header>

		<S.Inner>
			<S.Data>
				<MdGroup size={20} />
				30&nbsp;<i>seguidores</i>&nbsp; &middot; 10&nbsp;<i>seguindo</i>
			</S.Data>
			<S.Data>
				<MdWork size={20} />
				Estudante de Programação
			</S.Data>
			<S.Data>
				<MdLocationCity size={20} />
				Florianópolis, Santa Catarina
			</S.Data>
			<S.Data>
				<MdLink size={20} />
				<a href='https://github.com/anthonibs'>Anthonibs</a>
			</S.Data>
		</S.Inner>
	</S.Container>
);

export default Profile;
