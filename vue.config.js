module.exports = {
	publicPath: '', //将项目地址加一个二级目录，在vue-cli.3.3版本后 baseUrl被废除了，要写成 publicPath
	outputDir: 'vue-cli', //定义打包输出路径
	assetsDir: 'src',
	productionSourceMap: false, //开启source map，用于在生产环境下为了快速定位错误信息
	devServer: {
		open: false, //是否自动打开浏览器页面
		host: '0.0.0.0', // 指定使用一个 host。默认是 localhost.如果你希望服务器外部可访问，应指定如下：'0.0.0.0'
		port: 8080, // 端口地址
		https: true, // 使用https提供服务
		proxy: {
			'/api': {
				target: 'https://hokori.online/',
				changeOrigin: true,
				pathRewrite:{
					'^/api':''
				}
			},
			// '/':{
			// 	target: 'https://hokori.online/',
			// 	changeOrigin: true,
			// 	pathRewrite:{
			// 		'^/':''
			// 	}
			// }
		}, // string | Object 代理设置
		allowedHosts: [
			'hokori.online'
		],
		// css: {
		// 	requireModuleExtension: false
		// }
	},
	pwa: {
		name: "vue-cli",
		description: "PWA test project",
		themeColor: "#673AB7",
		msTileColor: "#673AB7",
		appleMobileWebAppCapable: "yes",
		appleMobileWebAppStatusBarStyle: "black-translucent",
		workboxPluginMode: "InjectManifest",
		workboxOptions: {
			swSrc: "src/registerServiceWorker.js",
		},
		iconPaths: {
			msTileImage: "img/icons/msapplication-icon-144x144.png",
			favicon32: "img/icons/favicon-32x32.png",
			favicon16: "img/icons/favicon-16x16.png",
			appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
			maskIcon: 'img/icons/safari-pinned-tab.svg',
		},
		manifestOptions: {
			start_url: 'index.html',
			background_color: '#673AB7'
		}
	},
}
