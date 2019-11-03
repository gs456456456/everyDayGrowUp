class myPromise{
	constructor(fn){
		this.status = 'PENDING'
		this.fn = fn
		this.eventList = []
	}
	resolve(parms){
		this.status = 'RESOLVE'
		if(this.eventList.length>0){
			let currentEvent = this.eventList.shift()
			currentEvent()
		}
		return parms
	}
	reject(parms){
		this.status = 'REJECT'
		return parms
	}
	then(cb){
		this.eventList.push(cb)
		return this
	}
	execute(){
		this.fn(this.resolve.bind(this),this.reject.bind(this))
		return this
	}
}

var promiseIns = new myPromise((resolve,reject)=>{
	setTimeout(()=>{
		// console.log('5s after')
		resolve('2s after')
	},2000)
})

promiseIns.execute().then(()=>{
	console.log(2)
})