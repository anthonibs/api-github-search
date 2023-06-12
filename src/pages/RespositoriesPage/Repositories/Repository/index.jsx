import PropTypes from 'prop-types';
import * as S from './styles';
import { langColors } from '../../../../services/config';

const Repository = ({ repository }) => {
	const color = langColors[repository.language && repository.language.toLowerCase()];

	return (
		<S.Container color={color}>
			<S.Name>{repository.name}</S.Name>

			<S.Description>{repository.description}</S.Description>

			<S.Footer color={color}>
				<S.Lang>{repository.language}</S.Lang>
				<S.MyLink
					href={repository.html_url}
					target='_blank'
				>
					ver
				</S.MyLink>
			</S.Footer>
		</S.Container>
	);
};

Repository.propTypes = {
	repository: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		language: PropTypes.string,
		html_url: PropTypes.string.isRequired,
		description: PropTypes.string,
	}).isRequired,
};

export default Repository;
