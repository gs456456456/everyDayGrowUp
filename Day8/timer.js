function debonce(func,period){
	let timer=null;
	return function(){
		let that = this;
		let arg = func.arguments;
		if(timer){
			clearTimeout(timer)
		}
	   timer = setTimeout(() => {
		func.apply(that,...arg)
	   }, period)
	}
}

function throttle(func,period){
	let timer=null;
	return function(){
		let that = this;
		let last = null;
		let arg = func.arguments;
		let now = new Date()
		if(now - last > period){
			func.apply(this,...arg)
			last = now
		}

	}
}
