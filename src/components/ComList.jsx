import React from 'react'

import ComItem from '@/components/ComItem'
import cssObj from '@/css/comlist.scss'

export default class ComList extends React.Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
	  	comList: [
				{id: 0, name: '张三', comment: '哈哈哈'},
				{id: 1, name: '张三', comment: '哈哈哈'},
				{id: 2, name: '张三', comment: '哈哈哈'},
				{id: 3, name: '张三', comment: '哈哈哈'},
				{id: 4, name: '张三', comment: '哈哈哈'}
	  	]
	  }
	}

	render () {
		return <div>
			<h1 className={cssObj.title}>这是一个评论表单</h1>
			{this.state.comList.map(item => <ComItem key={item.id} {...item} />)}
		</div>
	}
}