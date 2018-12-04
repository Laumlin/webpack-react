const defaultState = {
	comList: [{
		id: 0,
		name: '张三',
		comment: '哈哈哈'
	}, {
		id: 1,
		name: '张三',
		comment: '哈哈哈'
	}, {
		id: 2,
		name: '张三',
		comment: '哈哈哈'
	}]
}

export default (state = defaultState, action) => {
	if (action.type === 'add_comment_item') {
		const newState = JSON.parse(JSON.stringify(state))
		const newItem = action.newItem
		newState.comList.push(newItem)
		return newState
	}
	return state
}