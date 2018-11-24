// 这两个包导入的时候，接收的成员名称，必须这么写
import React from 'react' // 创建组件、虚拟DOM、生命周期
import ReactDOM from 'react-dom' //把创建好的组件和虚拟DOM放到页面上展示的

//创建虚拟DOM -- React.createElement()
// 参数1： 创建的元素的类型
// 参数2： 是一个对象或null，表示 当前这个DOM 元素的属性
// 参数3： 子节点
// 参数n:  其他子节点

const myh1 = React.createElement('h1', {
	id: 'myh1'
}, 'this is a h1')

ReactDOM.render(myh1, document.getElementById('app'))