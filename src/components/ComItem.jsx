import React from 'react'
import cssObj from '@/css/comlist.scss' //自定义
import store from '@/store'
import { getDelCommentAction } from '@/store/actionCreator'

export default class ComItem extends React.Component {
	constructor(props) {
	  super(props)
	
	  this.state = {}
	}

	render () {
		const { index, name, comment } = this.props
		return (
			<div>
				<div className={cssObj['comment-list-wrap']}>
					<span className={cssObj['comment-list-close']} onClick={() => {this.delete(index)}}>✘</span>
					<h4 className={cssObj['comment-list-user']}>{name}</h4>
					<p className={cssObj['comment-list-content']}>{comment}</p>
				</div>
			</div>
		)
	}
	delete = (index) => {
		const action = getDelCommentAction(index)
		store.dispatch(action)
	}
}