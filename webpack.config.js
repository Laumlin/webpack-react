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
		}, {
			// 可以在css-loader后，通过？追加参数
			// 其中 有个固定参数，叫做 modules， 表示 普通的css样式表，启用模块化
			// 自己规定： 第三方 的样式表都是以.css结尾，这样我们不要为普通的 .css 启用模块化
			//					 自己的样式表，都要以 .scss 或 .less结尾， 只为 .scss 或 .less 文件启用模块化
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /.scss$/,
			/*使用localIdentName自定义生成的类名格式，可选参数有：
			[path]：表示样式表相 对于项目根目录所在 路径
			[name]：表示 样式表 文件名称
			[local] ：表示样式的类名定义名称
			[hash:length]：表示默认32为的hash值，取5-6位即可，防止类名重复
			*/
			use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:6]', 'sass-loader']
		}]
	},

	resolve: {
		extensions: ['.js', '.jsx', 'json'],
		alias: {
			'@': path.join(__dirname, './src')
		}
	}
}