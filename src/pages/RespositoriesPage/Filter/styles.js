import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: auto;
	gap: 0.2rem;
	padding-right: 2rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: auto auto;
		gap: 0.8rem;
		padding: 0 1rem;
	}
`;

export const Selector = styled.button`
	display: flex;
	align-items: center;
	cursor: pointer;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors.container};
	color: ${props => props.color || props.theme.colors.light};
	width: 100%;
	min-height: 2rem;
	border: none;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	transition: background 300ms, transform 300ms;
	padding: 0 1rem;

	&:hover,
	&.selected {
		background-color: ${props => props.color || props.theme.colors.light};
		color: ${props => (props.color ? props.theme.colors.white : props.theme.colors.black)};
		transform: translate(5px) scale(1.02);
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		border-radius: 20px;

		&:hover,
		&.selected {
			transform: translate(0) scale(1.02);
		}
	}
`;

export const Cleaner = styled.button`
	background-color: transparent;
	color: ${({ theme }) => theme.colors.text};
	border: none;
	text-align: left;
	cursor: pointer;
	padding: 1rem;

	&:hover {
		color: rgba(255, 255, 255, 0.5);
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		text-align: center;
		padding: 0 1rem;
	}
`;
