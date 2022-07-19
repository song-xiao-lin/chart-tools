module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"commonjs": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"eol-last": 1, // 文件以单一的换行符结束
		"indent": ['error', 2], // 缩进2格
		"no-mixed-spaces-and-tabs": 'error', // 不能空格与tab混用
		"no-multiple-empty-lines": [1, { "max": 2 }], // 空行不能超过两行
		"no-multi-spaces": 1, // 不能有多余空格
		"no-spaced-func": 1, // 函数调用时 函数名与()之间不能有空格
		"no-trailing-spaces": 1, // 一行结束后面不要有空格
		"no-use-before-define": 1, // 未定义前不能使用
		"no-var": 1, // 禁用var，用let和const代替
		"no-else-return": 2, // 如果if语句里面有return, 后面不能跟else语句
		"no-empty": 1, // 块语句中的内容不能为空
		"no-invalid-regexp": 2, // 禁止无效的正则表达式
		"no-func-assign": 2, // 禁止重复的函数声明
	}
}
