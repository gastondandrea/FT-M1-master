'use strict';

// INPUT "101" -> OUTPUT num 34
function BinarioADecimal(string) {
   /*
   var num = parseInt(string, 2);
   return num;
   */
   /*let decimal = 0;
   let array = string.split("").reverse()
   array.forEach(function (element, index) {
      decimal = decimal + Math.pow(2, index) * element
   });
   return decimal;*/
 
   var array = string.split("").reverse().map((letra)=>{
     return parseInt(letra);
   });
   var aux = 0;
   var result = array.reduce((suma, elemnet, index)=>{
       suma += elemnet*(2**index);
       return suma;
      },0)
   return result;
 }
 

console.log(BinarioADecimal('101'));

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
