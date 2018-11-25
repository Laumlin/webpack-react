const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-Plugin')

// 创建一个插件实例
const htmlPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, './src/index.html'), //源文件
	filename: 'index.html' //生成的内存中首页的名称
})

// 向外暴露一个打包的配置对象
// webpack默认只能打包.js后缀名的文件，像.png .vue无法主动处理，需要配置第三方loader
module.exports = {
	mode: 'development', // 'paroduction' 或 'development'

	//不设置entry入口时，webpack的默认入口文件为src/index.js, 默认输出地址是dist/main.js
	plugins: [
		htmlPlugin
	],

	module: {
		rules: [{
			test: /\.js|jsx$/,
			use: 'babel-loader', //配置babel-loader解析.js或.jsx结尾的文件
			exclude: /node_modules/
		}]
	},

	resolve: {
		extensions: ['.js', '.jsx', 'json'],
		alias: {
			'@': path.join(__dirname, './src')
		}
	}
}