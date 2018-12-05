import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import ComList from '@/components/ComList'
import { getAddCommentAction } from  '@/store/actionCreator'
import store from '@/store'

export default class Comment extends React.Component {
	constructor(props) {
	  super(props)
	
	  this.state = store.getState()
	  this.handleStoreChange = this.handleStoreChange.bind(this)
		store.subscribe(this.handleStoreChange)
	}

	render () {
		return <div className="container mt-5">
			<h5>请输入留言内容：</h5>
			{this.editorForm()}
		 	<ComList comList={this.state.comList}/>
		</div>
	}
	editorForm () {
		return (
			<form id="myform">
				<div className="form-group ">
					<label htmlFor="usr">用户名:</label>
					<input type="text" className="form-control" id="usr" />
				</div>
				<div className="form-group ">
					<label htmlFor="content">评论内容:</label>
					<input type="text" className="form-control" id="content" />
				</div>
				<div className="form-group">
					<button className="btn btn-primary" onClick={(e) => {this.addComment(e)}}>提交</button>
				</div>
			</form>
		)
	}

	addComment = (e) => {
		e.preventDefault()
		let userName = document.getElementById('usr').value // name
		let content = document.getElementById('content').value // content

		if (userName && content) {
			
			const index = this.state.comList.length
			const newItem = {id:index, name:userName, comment:content}
			
			//action
			const action = getAddCommentAction(newItem)
			store.dispatch(action)

			document.getElementById('myform').reset() // 新增留言后，表单置为空
		} else {
			alert('姓名和内容不能为空！')
		}
	}

	handleStoreChange () {
		this.setState(store.getState())
	}
}