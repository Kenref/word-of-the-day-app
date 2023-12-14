module.exports = {
	env: {
		type: "node",
		params: {
			env: "NODE_ENV=test",
		},
		babel: {
			babel: true,
			presets: ["@babel/preset-env", "@babel/preset-react"],
		},
	},
	autoDetect: true,
};
