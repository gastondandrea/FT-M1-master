'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/
//5! = 5 * 4!
//4! = 4 * 3!
//3! = 3 * 2!
//2! = 2 * 1!
//1! = 1
function nFactorial(n) {
  // caso base, corte
  if(n===0 || n === 1){
    return 1;
  }
  return n * nFactorial(n-1);
}
console.log(nFactorial(15));

//Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
//Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

function nFibonacci(n) {
  //caso base, corte
  if(n === 0) return 0;
  if(n === 1) return 1;
  return nFibonacci(n - 2) + nFibonacci(n - 1) 
}
console.log(nFibonacci(3));
/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.data = [];
}

Queue.prototype.enqueue = function(value){
  this.data.push(value);
  return value;
}

Queue.prototype.dequeue = function(){
  if(this.data.size === 0){
    return undefined
  }
  return this.data.shift();
}

Queue.prototype.size = function(){
  return this.data.length;
}

const testMyQueue = new Queue;
console.log(testMyQueue.enqueue(5));
console.log(testMyQueue.size());
testMyQueue.dequeue()
console.log(testMyQueue.dequeue());
/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
