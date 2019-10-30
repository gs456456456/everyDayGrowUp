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


class shoppingCart extends LkEvent{
	constructor(){
		super()
		this.shoppingCartList = []
	}
	// addProduct(product){
	// 	this.shoppingCartList.push(product)
	// }
	caculateTotalDiscount(product){
		console.log('计算' + product + '折扣')
	}
	caculateTotalPrice(product){
		console.log('计算' + product + '总价')
	}
}

var shoppingCartIns = new shoppingCart()
shoppingCartIns.subscribe('addProduct',shoppingCartIns.caculateTotalDiscount)
shoppingCartIns.subscribe('addProduct',shoppingCartIns.caculateTotalPrice)
shoppingCartIns.publish('addProduct','苹果')
shoppingCartIns.publish('addProduct','香蕉')





