function Value(a,b){
 var p,o=b,e=this;
 for(p in o){e[p]=o[p];};
 e.x=a;
}
//
var w=window,
e=w.Function.prototype,
Call=e.bind.bind(e.call),
O=w.Object,
Stringfy=Call((e=O.prototype).toString);
//
Value.prototype={
 get value(){return this.x;},
 valueOf:function(){return this.x;},
 toString:function(){return Stringfy(this.x);}
};


/*
var Result=new Value(1,{msg:'ciao'});
console.log(Result.msg);
console.log(Result.value);
console.log(Result.value?1:0);
console.log(Result?1:0);
console.log(Result+1);//2
console.log(Result+'1');//11
*/
