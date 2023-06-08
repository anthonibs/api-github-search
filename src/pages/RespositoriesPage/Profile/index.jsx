import React from 'react';
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';
import PropTypes from 'prop-types';
import * as S from './styles';

const Profile = ({ user }) => (
	<S.Container>
		<S.Header>
			<S.Avatar
				src='https://avatars.githubusercontent.com/u/77931577?v=4'
				alt='Imagem do perfil no Github'
			/>
			<S.Login>{user.login}</S.Login>
			<S.Name>{user.name}</S.Name>
		</S.Header>

		<S.Inner>
			<S.Data>
				<MdGroup size={20} />
				{user.followers}&nbsp;<i>seguidores</i>&nbsp; &middot; {user.following}&nbsp;<i>seguindo</i>
			</S.Data>
			{!!user.company && (
				<S.Data>
					<MdWork size={20} />
					{user.company}
				</S.Data>
			)}
			<S.Data>
				<MdLocationCity size={20} />
				{user.location}
			</S.Data>
			<S.Data>
				<MdLink size={20} />
				<a
					href={user.blog}
					target='_blank'
					rel='noreferrer'
				>
					Anthoni
				</a>
			</S.Data>
		</S.Inner>
	</S.Container>
);

Profile.propTypes = {
	user: PropTypes.shape({
		login: PropTypes.string.isRequired,
		followers: PropTypes.number.isRequired,
		following: PropTypes.number.isRequired,
		avatar_url: PropTypes.string.isRequired,
		company: PropTypes.string,
		blog: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		bio: PropTypes.string.isRequired,
	}).isRequired,
};

export default Profile;
