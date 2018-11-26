import React from 'react'

export default class StateBindInput extends React.Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
	  	msg: '哈哈哈'
	  }
	}

	render () {
		return <div>
			<p>{this.state.msg}</p>
			<input type="text" value={this.state.msg} onChange={(e) => {this.handleChange(e)}}/>
		</div>
	}

	handleChange = (e) => {
		this.setState({
			msg: e.target.value
		})
	}
}