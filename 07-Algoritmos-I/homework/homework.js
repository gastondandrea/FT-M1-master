'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var result = [1];
  var baseDiv = 2;
  while(num>1){
    if(num % baseDiv === 0){
      result.push(baseDiv);
      num = num / baseDiv;
    }else{
      baseDiv++;
    }
  }
  return result;
}

function bubbleSort(array) {                // Compara con el valor siguiente y ordena el array
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var swap = true;
  while(swap){
    swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if(array[i] > array[i + 1]){
        var aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux;
        swap = true;
      }
    }
  }
  return array;
}


function insertionSort(array) {               // Compara con el valor anterior y ordena el array
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j >= 1; j--) {
      if(array[j] < array[j - 1]){
        var aux = array[j];
        array[j] = array[j-1];
        array[j-1] = aux;
      }
    }
  }
  return array;
}


function selectionSort(array) {             //
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length -1; i++) {
    for (let j = i+1; j < array.length; j++) {
      if(array[j]>array[i]){
        var aux = array[i];
        array[i] = array[j];
        array[j] = aux;
      }
    }
  }
  return array;
}
let array = [3,5,8,7]
console.log(selectionSort(array));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
