//typeof
typeof 1
//typeof 返回值 "string" "number" "boolean" "object" "undefined" "function"



//instanceof
var a = {a:1}
a instanceof Object //true
null instanceof Object //false
//检测 a.__proto__ === Object.prototype
