import React from 'react'

import ComItem from '@/components/ComItem'
import cssObj from '@/css/comlist.scss'

// 有状态组件，组件涉及逻辑操作时使用
// export default class ComList extends React.Component {
// 	constructor(props) {
// 	  super(props)
// 	}

// 	render () {
// 		return (
// 			<div>
// 				<h1 className={cssObj.title}>这是一个评论表单</h1>
// 				{this.props.comList.map((item,index) => (<ComItem key={item.id} {...item} index={index} />))}
// 			</div>
// 		)
// 	}
// }

// 无状态组件，一般只显示视图
const ComList = (props) => {
	return (
		<div>
			<h1 className={cssObj.title}>这是一个评论表单</h1>
			{props.comList.map((item,index) => (<ComItem key={item.id} {...item} index={index} />))}
		</div>
	)
}

export default ComList