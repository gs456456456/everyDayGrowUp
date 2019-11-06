//
var a = { test:1 }
var b = { test:1 }
a == b //false

var a = [1,2]
var b = [1,2]
a == b //false

//copy
var isObj = function(p){
	return Object.prototype.toString.call(p) === '[object Object]'
}

function deepCopy(parm){
	var copy = null
	if(!parm.isObj()){
		return parm
	}
	parm.isArray()?copy = []:copy = {}
	//for in 循环 array(idx) object(key)
	for(let item in )

}

//完善版deepcopy







//seniorFunc
Array.prototype.myMap = function(fn){ 
	var newArray = [];
	this.forEach(function(v){ 
		newArray.push(fn(v))
	})
	return newArray  
}

Array.prototype.myReduce = function(fn,initialAccumulator){
	var accumulator = 0
	initialAccumulator?accumulator = initialAccumulator:false
	if(typeof fn === 'function'){
		throw 'not function'
	}
	else{
		fn.arguments.forEach((v)=>{
			console.log(v)
		})
	}
}

[1,2,3].myReduce((a,b,c)=>{
	
})

