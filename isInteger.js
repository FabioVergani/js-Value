function Result(a,b){var p,o=b,e=this;for(p in o){e[p]=o[p];};e.x=a;}
//
var w=window,
e=w.Function.prototype,
Call=e.bind.bind(e.call),
O=w.Object,
Stringfy=Call((e=O.prototype).toString);
//
e=O=null;
//
Result.prototype={
 get result(){return this.x;},
 valueOf:function(){return this.x;},
 toString:function(){return Stringfy(this.x);}
};
//==========================================================================


function isInteger(x){
 var n=x,o=false;
 return new Result(isNaN(n)?o:isFinite(n)?(o=Math.floor(n))===n:o,{floor:o!==false?o:null});
};


console.log(isInteger(1.0).result);
console.log(isInteger(1.3).result);
var test1=isInteger(2.3);
console.log(test1.result,test1.floor);
var test2=isInteger(false);
console.log(test2.result,test2.floor);


