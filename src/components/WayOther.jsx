import React from 'react'

export default class WayOther extends React.Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
	  	title: '第一种引进组件的方式',
	  	des: '使用class关键字创建的组件，有自己的私有数据(this.state)和生命明周期；运行效率低；使用率高；这也叫有状态组件。'
	  }
	}

	render () {
		return <div>
			<h2>{this.state.title}</h2>
			<p>{this.state.des}</p>
		</div>
	}
}