import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	min-height: 100vh;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: column;
	}
`;

export const SideBar = styled.aside`
	background-color: ${({ theme }) => theme.colors.gray800};
	min-width: 20rem;
	max-height: 100vh;
	overflow-y: hidden;
`;

export const Main = styled.main`
	background-color: ${({ theme }) => theme.colors.container};
	width: 100%;
	height: 100vh;
	overflow-y: hidden;
	padding: 40px;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		height: 100%;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 40px 20px;
	}
`;
