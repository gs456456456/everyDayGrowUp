class LkEvent{
	constructor(){
		this.event = {}
	}
	subscribe(key,fn){
		if(!this.event[key]){
			this.event[key] = [fn]
		}else{
			this.event[key].push(fn)
		}
	}
	publish(key,...argu){
		if(this.event[key]){
			this.event[key].forEach((item) => {
				item.apply(this,argu)			  
			})
		}
	}
	cancel(key,fn){
		if(this.event[key]){
			this.event[key].forEach((item,idx) =>{
					if(fn === item){
						this.event[key].splice(this.event,idx)
					}
				}
			)
		}
	}
}

var a = new LkEvent()

var hasGotNotify = function(employee,where){
	console.log(employee +'在'+ where +'收到了通知')
}

var isPlaying = function(employee,where){
	console.log(employee +'在'+ where +'玩')
}


a.subscribe('company',hasGotNotify)

a.subscribe('company',isPlaying)

a.publish('company','mike','厕所')

a.cancel('company',isPlaying)

a.publish('company','mike','厕所')

// a.publish('')




