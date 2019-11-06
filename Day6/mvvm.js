function isObj(parm){
	return Object.prototype.toString.call(parm) === '[object Object]'
}


function Mvvm(option){
	let data = option.data
	this.target = null
	this.el = option.el
	for(let key in data){
		this[key] = null
	}

	this.observe = function (root,data) {
		if(!isObj(data) || JSON.stringify(data) == "{}"){
			return
		}
		//对象键循环 
		for(let keys in data){
			this.defineReactive(root,keys,data[keys])
		}
	}

	this.defineReactive = function (root,key,val) {
		if(isObj(val)){
			return this.observe(root,val)
		}
		var dep = new Dispatcher()
		Object.defineProperty(root,key,{
			get(val){
				dep.add(this.target);
				return value
			},
			set(newVal){
				if(value === newVal){ return }
				   value = newVal
				dep.notify()
			}
		})

	}

	this.compile = function(){
		var child = document.getElementById(this.el).childNodes
		//类数组可以用 for..of..循环
		for(let node of child){
			if(node.nodeType === 1){
				let attrs = node.attributes 
				for(let attr of attrs){
					if(attr.name === 'mymvvm-model'){
						var keyName = attr.value
						node.addEventListener('input',(e) => {
						  this[name] = e.target.value
						});

						this.target = new Watcher(node,keyName)
						this[name]
					}
				}
			}
			else if(node.nodeType === 3){
				var reg = /\{\{(.*?)\}\}/
				var match = node.nodeValue.match(reg)
				if(match){
					let name = match[1].trim()

					this.target = new Watcher(node,name)
					this[name]
					node.nodeValue = ''
				}
			}
		}
	}

	this.main = function(){
		//发布
		this.observe(this,this.data)
		//订阅
		this.compile()
	}
}



function Dispatcher(){
	this.watchList = []
	this.add = function(watcher){
		this.watchList.push(watcher)
	}
	this.notify = function(){
		this.watchList.forEach((watcher) => {
		  // Todo...
		  watcher.update()
		})
	}
}


function Watcher(node,type){
    this.node = node;
    this.type = type;
    this.update = function(value) {
        if (this.type == 'input') {
            this.node.value = value;
        }
        if (this.type == 'text') {
            this.node.nodeValue = value;
        }
    }
}