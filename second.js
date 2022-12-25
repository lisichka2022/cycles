'use strict'
let number = +prompt('Input number');

let res=0;
if(number<2){
  res=false;
}
for(let i=2; i<number;i++){
    if(number%i===0 ){
      res=false;
      break;
      
    }
    else {
      res=true;
     
    }
  }
     console.log(res);
  