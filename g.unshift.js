const arr = [20,30,40,50,60,70,80];

Array.prototype.myunshift =function (...a){
    const  x = this.length;
    const  y = a.length;
    this.length = this.length+a.length;
    let c = 1;
    for(let i=this.length;i>this.length-x;i--){
             this[i-1] = this[x-c];
             c++;  
            };
     for(let j = 0 ; j < y ; j++){
       this[j]  = a[j];
     }
     return this.length;
};
console.log(arr.myunshift(10,"venky","qwerty","sony"));
console.log(arr);
