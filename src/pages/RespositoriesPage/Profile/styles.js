import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	padding: 1rem;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
		align-items: center;
	}
`;

export const Avatar = styled.img`
	align-self: center;
	border-radius: 50%;
	width: 70%;
	margin-bottom: 1rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 70px;
		height: 70px;
		margin-right: 1rem;
		margin-bottom: 0;
	}
`;

export const Login = styled.h1`
	font-size: ${({ theme }) => theme.fontSize.title};
`;

export const Name = styled.h2`
	font-size: ${({ theme }) => theme.fontSize.subtitle};
	font-weight: normal;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`;

export const Inner = styled.div`
	padding: 1rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		display: none;
	}
`;

export const Data = styled.p`
	display: flex;
	align-items: center;
	line-height: 1.5;

	& > svg {
		margin-right: 1rem;
	}
`;
