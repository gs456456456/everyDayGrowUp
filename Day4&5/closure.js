for(var i=0;i<5;i++){
	// console.log(i)
	setTimeout(() => {
	  // console.log(i)
	}, 100)
}


//原理
//同步任务 ===> 每次遇到setTimeout 放入宏任务队列 
//同步任务执行完 ===> 执行异步任务setTimeout ===> i=5


//输出 1，2，3，4，5 解决办法
for(var i=0;i<5;i++){
	loop(i)
}

function loop(i){
	setTimeout(() => {
	  // console.log(i)
	}, 100)
}

//等价于
for(var i=0;i<5;i++){
	function loop(j){
		setTimeout(() => {
		  console.log(j)
		}, 100)
	}
	loop(i)
}


//等价于 closure 
//执行自执行函数时 i存储在局部变量里
for(var i=0;i<5;i++){
	(function(j){
		setTimeout(() => {
		  // console.log(j)
		}, 100)
	})(i)
}

//闭包 执行上下文 作用域 this
//作用域 ==> 查找变量的地方/规则 全局作用域,函数作用域,块级作用域 
//this 为当前行为执行主体
//闭包 ==> 有权访问另一个作用域中变量的函数
//         本应该执行完被回收的函数的作用域引用被保留下来，被闭包函数持有

function a(){
	var p1 = 1
	function b(){
		console.log(p1)
	}
	return b
}

var c = a()
c()




