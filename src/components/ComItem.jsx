import React from 'react'

export default class ComItem extends React.Component {
	constructor(props) {
	  super(props)
	
	  this.state = {}
	}

	render () {
		return <div>
			<div className="comment-list-wrap">
				<h4 className="comment-list-user">{this.props.name}</h4>
				<p className="comment-list-content">{this.props.comment}</p>
			</div>
		</div>
	}
}