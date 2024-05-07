
arr = [16,17,21,23,25,28,26,30];

function fn(a){
    var bn ;
    if(a<50){
       bn = true;  
    }else{
        return false;
    }
    return bn;
}

Array.prototype.myevery = function (cb){
  for (let i = 0; i < this.length; i++) {
    if(cb(this[i])){

    } else{
        return cb(this[i]);
    }
  }
  return true;

}
console.log(arr.every(fn));
console.log(arr.myevery(fn));

