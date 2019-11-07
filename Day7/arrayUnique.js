var unique = function(array){
	return array.filter((v,i)=>{
		return i === array.indexOf(v)
	})
}

var unique = function(array){
	let map = new Map()
	let resultArr = []
	array.forEach((v)=>{
		if(!map.get(v)){
			resultArr.push(v)
		}
		map.set(v,1)
	})
	return resultArr
}

var unique = (array)=>{return new Set(...array)}

var unique = (array)=>{
	let resultArr = []
	array.forEach((v)=>{
		if(!resultArr.includes(v)){
			resultArr.push(v)
		}
	})
	return resultArr
}




var a = unique([1,2,3,3])
console.log(a)