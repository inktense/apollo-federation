const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { ESBuildPlugin } = require("esbuild-loader")

module.exports = {
  entry: './index.ts',
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()],
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, '.webpack'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'esbuild-loader',
        exclude: [
          [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, '.webpack')
          ]
        ],
        options: {
          loader: "ts",
          target: "es2020",
        },
      }
    ]
  },
  plugins: [new ESBuildPlugin()],
}
