// call,apply
Function.prototype.myCall = function(context){
	// body... 
	context = context || window
	context.fn = this
	//不可以修改arguments(类数组对象)
	// Array.prototype.shift.call(arguments)
	let arguList = Array.from(arguments).slice(1)
	let res = context.fn(...arguList)
	return res
} 

var dog = { 
	type:1,
	getType:function(p1,p2){
		console.log(p1);
		console.log(p2);
		return this.type
	}
}

var cat = { type:2 }

// dog.getType.myCall(cat,1,2)

//bind
function bindFunc(b){
	console.log(this.a)
	console.log(b)
}

var bindObj = {
	a:"b"
}

Function.prototype.mybind = function(){
	let orgFunc = this
	let objCaller = arguments[0]
	Array.prototype.shift.call(arguments)
	return function(){
		orgFunc.apply(objCaller,...arguments)
	}
}


// bindFunc()

bindFunc.mybind(bindObj,1)()


//new 1创建一个新的对象 2新对象指向构造函数的this 3执行函数 4返回函数原本返回对象或者新对象
function myNew(){
	var constructionFunc = Array.prototype.shift.call(arguments)
	var obj = Object.create(constructionFunc.prototype)
	var res = constructionFunc.apply(obj,arguments)
	return res instanceof Object?res:obj
}

function test(a){
	this.a = a
	this.b = function(){
		console.log(a)
	}
	return {a:1}
}

// var testObj = myNew(test,1)

//throttle



//debounce




