const arr = ["venky",100,{name:"pavan",age:23},[10,20,30],130,560,undefined,null];
Array.prototype.myshift = function (){
    let output = this[0];
for(let i = 0;i<this.length;i++){
    this[i]=this[i+1]
}
this.length = this.length-1;
return output;

}
console.log(arr.myshift());
console.log(arr);
// console.log(arr.myshift());
// console.log(arr);
// console.log(arr.myshift());
// console.log(arr.shift());
// console.log(arr[0]);



