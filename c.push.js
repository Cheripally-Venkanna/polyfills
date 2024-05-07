const arr = [20,"cherry",null,{name:"cheery",age:25}];

Array.prototype.mypush = function (...a){
    let x = this.length;
    let y = a.length;
    let z = x+y;
    let s = 0; 
    for( let i = x ; i < z; i++){ 
        this[i] = a[s];
          s++;    
    }
    return this.length;



//     let input = a;
//    let  arr1 = [...a];
//      this[this.length] = a;
//      return this.length;   
}



console.log(arr.mypush([10,20,30,40],"pavan","rolex",100000));
// console.log(arr);

// console.log(arr.push([10));
// console.log(arr);