import React from 'react';
import PropTypes from 'prop-types';
import Repository from './Repository';

import * as S from './styles';

const Repositories = ({ repositories, currentLanguage }) => {
	const repos = repositories
		.filter(repository => currentLanguage === undefined || repository.language === currentLanguage)
		.map(repository => (
			<Repository
				key={repository.id}
				repository={repository}
			/>
		));

	return <S.Container>{repos}</S.Container>;
};

Repositories.defaultProps = {
	currentLanguage: undefined,
};

Repositories.propTypes = {
	repositories: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			html_url: PropTypes.string.isRequired,
			description: PropTypes.string,
			language: PropTypes.string,
		}).isRequired
	).isRequired,
	currentLanguage: PropTypes.string,
};

export default Repositories;
