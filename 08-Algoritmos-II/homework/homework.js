'use strict'
// No cambies los nombres de las funciones.
/*
01 extraer pivot
02 divide y ordena en [] left y [] right
03 aplica recursion con [].length > 1 <- caso base es [].length <= 1
04 concat y listo
*/ 
function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array // caso corte recursion
  var pivot = Math.floor(array.length / 2); //es el index (posicion) en el centro <- array[pivot]
  var left = [];
  var right = [];
  for (let i = 0; i < array.length; i++) {
    if(i !== pivot){
      if(array[i] <= array[pivot]){
        left.push(array[i]);
      }else{
        right.push(array[i]);
      }
    }
  }
  //aplicamos recursion y concatenamos los arrays y el pivot.
  return quickSort(left).concat(array[pivot]).concat(quickSort(right));
}


/*
01 divide recursiva hasta que c/elem es un []
02 ahora merge y donde tb compara y ordena
*/ 

function mergeSort(list) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(list.length <= 1)return list; // caso corte recursion
  var lineDiv = Math.floor(list.length/2); // tomamos la linea para dividir
  console.log(lineDiv);

  var leftArray  = list.slice(0, lineDiv); // dividioms el array en left
  let rightArray = list.slice(lineDiv); // dividimos la otra mitad en right
  console.log(leftArray);
  console.log(rightArray);

  leftArray = mergeSort(leftArray); // hacemos recursion en la mitad 
  rightArray = mergeSort(rightArray); // hacemos recursion en la otra mitad

  var arrayResult = []; 
  while(leftArray.length && rightArray.length){   // si tiene valor a la derecha y a la izquierda
    if(leftArray[0] < rightArray[0]){ // compara quien es menor
      arrayResult.push(leftArray.shift()); // saca el elemento menor del array y lo pone en arrayResult
    }else{
      arrayResult.push(rightArray.shift()); // saca el elemento menor del array y lo pone en arrayResult
    }
  }
  arrayResult = arrayResult.concat(leftArray, rightArray); // concatena todo
  return arrayResult; //listo..
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
