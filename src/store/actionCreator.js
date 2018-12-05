import {
	ADD_COMMENT_ITEM,
	DEL_COMMENT_ITEM
} from './actionTypes'

export const getAddCommentAction = (newItem) => ({
	type: ADD_COMMENT_ITEM,
	newItem
})

export const getDelCommentAction = (index) => ({
	type: DEL_COMMENT_ITEM,
	index
})