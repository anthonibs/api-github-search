import React from 'react';
import * as S from './styles';

const Filter = () => {
	const langs = [
		{ name: 'JavaScript', count: 5, color: '#f1c40f' },
		{ name: 'Shell', count: 2, color: '#47df0a' },
		{ name: 'PHP', count: 5, color: '#25BEFF' },
	];

	const selectors = langs.map(({ name, count, color }) => (
		<S.Selector
			key={name.toLocaleLowerCase()}
			color={color}
		>
			<span>{name}</span>
			<span>{count}</span>
		</S.Selector>
	));

	return (
		<S.Container>
			{selectors}
			<S.Cleaner>Limpar</S.Cleaner>
		</S.Container>
	);
};

export default Filter;
