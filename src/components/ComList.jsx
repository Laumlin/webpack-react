import React from 'react'

import ComItem from '@/components/ComItem'
import cssObj from '@/css/comlist.scss'

export default class ComList extends React.Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
	  }
	}

	render () {
		return <div>
			<h1 className={cssObj.title}>这是一个评论表单</h1>
			{this.props.comList.map((item,index) => <ComItem key={item.id} {...item} handleDel={() => {this.delete(index)}} />)}
		</div>
	}

	delete = (index) => {
		this.props.handleDel(index)
	}
}