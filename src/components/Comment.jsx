import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import ComList from '@/components/ComList'

export default class Comment extends React.Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
	  	comList: [
				{id: 0, name: '张三', comment: '哈哈哈'},
				{id: 1, name: '张三', comment: '哈哈哈'},
				{id: 2, name: '张三', comment: '哈哈哈'}
	  	],
	  	index: null,
	  }
	}

	render () {
		return <div className="container mt-5">
			<h5>请输入留言内容：</h5>
		  <form>
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
		 	<ComList comList={this.state.comList} handleDel={() => {this.delete()}}/>
		</div>
	}

	addComment = (e) => {
		e.preventDefault()
		let userName = document.getElementById('usr').value
		let content = document.getElementById('content').value
		let list = this.state.comList
		let index = list.length
		if (userName && content) {
			let newItem = {id:index, name:userName, comment:content}
			console.log(newItem)
			this.setState({
				comList: list.concat(newItem)
			})
		} else {
			alert('姓名和内容不能为空！')
		}
	}

	delete = (index) => {
		this.state.comList.splice(index, 1)
		this.setState({
			comList: this.state.comList
		})
	}
}