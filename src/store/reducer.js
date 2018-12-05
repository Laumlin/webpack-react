import {
	ADD_COMMENT_ITEM,
	DEL_COMMENT_ITEM
} from './actionTypes'

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
	if (action.type === ADD_COMMENT_ITEM) {
		const newState = JSON.parse(JSON.stringify(state))
		const newItem = action.newItem
		newState.comList.push(newItem)
		return newState
	}
	if (action.type === DEL_COMMENT_ITEM) {
		const newState = JSON.parse(JSON.stringify(state))
		const index = action.index
		newState.comList.splice(index, 1)
		return newState
	}
	return state
}