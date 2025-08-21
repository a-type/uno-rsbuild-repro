import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { UnoCSSRspackPlugin } from '@unocss/webpack/rspack';

export default defineConfig({
	plugins: [pluginReact()],
	server: {
		port: 3000,
		open: true,
	},
	tools: {
		rspack: {
			cache: false,
			plugins: [UnoCSSRspackPlugin()],
			output: {
				cssChunkFilename: '[name].[contenthash].css',
				cssFilename: '[name].[contenthash].css',
			},
			optimization: {
				realContentHash: true,
			},
		},
	},
});
