import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: rgba(0, 0, 0, 0.25);
	border-left: 3px solid ${props => props.color || props.theme.colors.gray500};
	padding: 1rem;
`;

export const Name = styled.h3`
	font-size: ${({ theme }) => theme.fontSize.large};
	font-weight: normal;
`;

export const Description = styled.p`
	font-size: ${({ theme }) => theme.fontSize.small};
	line-height: 1.25;
	margin-left: 1rem 0;
`;

export const Footer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${props => props.color || props.theme.colors.gray500};
	font-size: ${({ theme }) => theme.fontSize.small};
`;

export const Lang = styled.span`
	color: inherit;
`;

export const MyLink = styled.a`
	color: inherit;
	font-weight: bold;
	text-transform: uppercase;
	text-decoration: none;
`;
