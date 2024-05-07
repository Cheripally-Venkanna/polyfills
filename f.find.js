const arr = ["venky","100",10,20,30,{name:"venky",age:34},[10,20]];

Array.prototype.myfind = function (cb){
    // console.log(this)
     for (let i = 0; i < this.length; i++) {
        // console.log(this[i]);
      if( cb(this[i])){
        return this[i];
     }
}
}

function fn(a){
return a==="100";   
}

console.log(arr.myfind(fn));

console.log(arr.find(fn));