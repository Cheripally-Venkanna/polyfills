const arr = ["qwerty",12,40,{name:"cherry",age:29},"venky","vikram",20,30,100,390,[10,20]];


Array.prototype.myslice = function (a,b){
    if(a>0 && b==undefined){
       b=this.length; 
    } else if(a<0 && b==undefined){
       b=this.length;
    }

    const newarr = [];
    let x = 0;
    if(a > 0 && b > 0){
        for (let i = a; i < b; i++) {
          newarr[x] = this[i];
            x++;         
        }
     
    }
    else if (a<0 && b<0){
        for(let i =this.length+(a); i<this.length+(b);i++){
            newarr[x] = this[i];
            x++;
        }
   }
   else if (a<0 || b==this.length){
    for(let i =this.length+a; i<b;i++){
        newarr[x] = this[i];
        x++;
   }

}
return newarr;
}
console.log(arr.myslice(5));
console.log(arr.slice(5));

console.log(arr.myslice(-6));
console.log(arr.slice(-6));

console.log(arr.myslice(-7,-3));
console.log(arr.slice(-7,-3));

console.log(arr.myslice(4,8));
console.log(arr.slice(4,8));




