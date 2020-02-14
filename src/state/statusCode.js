let check = function(code) {
	if (code >= 500) {
		if (code === 500) {
			console.log(`ErrCode: ${code}`)
			return "连接不可用"
		} else if (code === 503) {
			console.log(`ErrCode: ${code}`)
			return "服务器正忙"
		}
	} else if (code >= 400) {
		if (code === 400) {
			console.log(`ErrCode: ${code}`)
			return "非法请求"
		} else if (code === 401) {
			console.log(`ErrCode: ${code}`)
			return "未认证或认证失败"
		} else if (code === 403) {

			console.log(`ErrCode: ${code}`)
			return "拒绝访问"
		} else if (code === 404) {
			console.log(`ErrCode: ${code}`)
			return "未找到资源"
		}
	}
}
export default check
