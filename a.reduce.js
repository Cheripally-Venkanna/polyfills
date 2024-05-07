 
 
 const arr = [10,20,30,40,50];

 function abc(cur,next){
   return cur+next; 
 }
 Array.prototype.myreduce = function (cb,acc){

   let res;
   let startind ;
   if(acc){
      res = acc;
      startind = 0;
   }else{
    startind = 1;
      res = this[0];
   }
   
   for (let index = startind; index < this.length; index++) {
    res = cb(res,this[index])
   }
   return res;
  }
const resultdata = arr.myreduce(abc,30);
console.log(resultdata);