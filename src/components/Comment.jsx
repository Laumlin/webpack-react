import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import ComList from '@/components/ComList'
import store from '@/store'

export default class Comment extends React.Component {
	constructor(props) {
	  super(props)
	
	  this.state = store.getState()
		
	}

	render () {
		return <div className="container mt-5">
			<h5>请输入留言内容：</h5>
			{this.editorForm()}
		 	<ComList comList={this.state.comList} handleDel={() => {this.delete()}}/>
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
			this.setState((preveState) => {
				const list = preveState.comList
				const index = list.length
	
				const newItem = {id:index, name:userName, comment:content}
				list.push(newItem)
				return {list}
			})
			document.getElementById('myform').reset() // 新增留言后，表单置为空
		} else {
			alert('姓名和内容不能为空！')
		}
	}

	delete = (index) => {
		this.setState((preveState) => {
			const list = preveState.comList
			list.splice(index, 1)
			return {list}
		})
	}
}