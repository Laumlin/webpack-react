import React from 'react'
import cssObj from '@/css/comlist.scss' //自定义
export default class ComItem extends React.Component {
	constructor(props) {
	  super(props)
	
	  this.state = {}
	}

	render () {
		return <div>
			<div className={cssObj['comment-list-wrap']}>
				<span className={cssObj['comment-list-close']} onClick={() => {this.delete()}}>✘</span>
				<h4 className={cssObj['comment-list-user']}>{this.props.name}</h4>
				<p className={cssObj['comment-list-content']}>{this.props.comment}</p>
			</div>
		</div>
	}

	delete = () => {
		this.props.handleDel()
	}
}