'use strict'

let numb = prompt('input number');
if(numb<1){
    console.log(NaN)
}
let div=0;
for (let i = 2; i <= Math.sqrt(numb); i++)
if (numb % i === 0){
  console.log(i) 
 div = 1;
 break;
}

  if (div === 0) {
console.log(numb)
  }
     
