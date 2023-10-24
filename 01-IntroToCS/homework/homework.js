'use strict';

// INPUT "101" -> OUTPUT num 34
function BinarioADecimal(string) {
   /*
   //*Metodo parseInt()
   var binarioNum = parseInt(string, 2);
   return binarioNum;
   */

   var arrayBinario = string.split("").reverse().map((str, index)=>str*(2**index));

   var binarioNum = arrayBinario.reduce((suma, num)=>{
       suma += num;
       return suma;
      },0)
   return binarioNum;
 }
 

console.log(BinarioADecimal('1010'));

// INPUT num 8 -> OUTPUT '1000'
function DecimalABinario(num) {
   /*
   //*Metodo .toString()
   var binarioString = num.toString(2);
   return binarioString;
   */
   var array = [];
   while(num!=0){
     array.push(num%2);
     num = Math.trunc(num/2);
   }
   var binarioString = array.reverse().join('');
   return binarioString;
 }
console.log(DecimalABinario(10));

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
