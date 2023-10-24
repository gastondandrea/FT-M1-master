'use strict';

// INPUT "101" -> OUTPUT num 34
function BinarioADecimal(string) {
   /*
   var num = parseInt(string, 2);
   return num;
   */
 
   var array = string.split("").reverse().map((letra, index)=>{
     return letra*(2**index);
   });
   var aux = 0;
   var result = array.reduce((suma, elemnet)=>{
       suma += elemnet;
       return suma;
      },0)
   return result;
 }
 

console.log(BinarioADecimal('1010'));

// INPUT num 8 -> OUTPUT '1000'
function DecimalABinario(num) {
   /*
   var string = num.toString(2);
   return string;
   */
   var array = [];
   while(num!=0){
     array.push(num%2);
     num = Math.trunc(num/2);
   }
   return array.reverse().join('');
   
 }
console.log(DecimalABinario(10));

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
