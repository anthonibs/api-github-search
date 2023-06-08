module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		eqeqeq: ['error', 'always'],
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'import/prefer-default-export': 'off',
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'jsx-quotes': ['error', 'prefer-single'],
		'react/react-in-jsx-scope': 'off',
		'prefer-const': 'off',
		'array-callback-return': 'warn',
		'react/self-closing-comp': [
			'error',
			{
				component: false,
				html: false,
			},
		],
		'react/require-default-props': [1],
	},
};
