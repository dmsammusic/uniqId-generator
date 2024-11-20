module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	coverageProvider: 'v8',
	collectCoverage: true,
	coverageReporters: ['text', 'lcov'],
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90,
		},
	},
};
