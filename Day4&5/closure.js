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

//闭包 执行上下文


