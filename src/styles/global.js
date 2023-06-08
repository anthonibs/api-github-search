import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		outline: 0;
	}

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: ${props => props.theme.colors.gray900};
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fontFamily.sans};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fontFamily.heading};
    font-weight: bold;
    color: ${props => props.theme.colors.white};
  }

	a {
		color: inherit;
	}
`;
