const ModuleFederationPlugin = require("../../../../lib/container/ModuleFederationPlugin");

module.exports = {
	plugins: [
		new ModuleFederationPlugin({
			name: "main",
			library: { type: "commonjs-module" },
			remotes: {
				containerB: "../1-container-full/container.js",
				self: "./bundle0.js"
			},
			exposes: ["./Self"],
			shared: ["react"]
		})
	]
};
