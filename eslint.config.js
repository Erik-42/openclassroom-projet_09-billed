const jest = require("eslint-plugin-jest");

module.exports = [
	...require("@eslint/js").configs.recommended,
	{
		files: ["test/**"],
		...jest.configs["flat/recommended"],
		rules: {
			...jest.configs["flat/recommended"].rules,
			"jest/prefer-expect-assertions": "off",
		},
	},
	// you can also configure jest rules in other objects, so long as some of the `files` match
	{
		files: ["test/**"],
		rules: { "jest/prefer-expect-assertions": "off" },
	},
];
