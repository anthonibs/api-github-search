import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Filter = ({ languages, currentLanguage, onClick }) => {
	const selectors = languages.map(({ name, count, color }) => (
		<S.Selector
			key={name.toLocaleLowerCase()}
			color={color}
			className={currentLanguage === name ? 'selected' : ''}
			onClick={() => onClick && onClick(name)}
		>
			<span>{name}</span>
			<span>{count}</span>
		</S.Selector>
	));

	return (
		<S.Container>
			{selectors}
			<S.Cleaner onClick={() => onClick && onClick(undefined)}>Limpar</S.Cleaner>
		</S.Container>
	);
};

Filter.defaultProps = {
	currentLanguage: undefined,
	onClick: null,
};

Filter.propTypes = {
	languages: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			count: PropTypes.number.isRequired,
			color: PropTypes.string,
		}).isRequired
	).isRequired,
	currentLanguage: PropTypes.string,
	onClick: PropTypes.func,
};

export default Filter;
