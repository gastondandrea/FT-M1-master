'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  this._length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value){
  var nodito = new Node(value) // {this.value:value, next:null}
  if(!this.head){ // si es null = lista vacia
    this.head = nodito // agregamos primer nodo al head
  }else{ // si no es null = lista no vacia..
    var current = this.head; // creamos un apuntador para recorrer la lista y saber cual es el ultimo objeto de la lista
    while(current.next){ // mientas el apuntador.next(su propiedad next) tenga un nodo va a pasar al siguiente hasta sea null
      current = current.next; 
    }
    current.next = nodito; // como ya no hay mas nodos agrega el nuevo nodo.
  }
  this._length ++; // incrementa el contador de nodos
  return nodito;
}

LinkedList.prototype.remove=function(){
  if(!this.head) return null; // si no hay ningun nodo return null
  var current = this.head;
  if(!this.head.next){ // si hay un solo nodo, asignarle null y devolver su valor
    this.head = null;
    this._length --;
    return current.value;
  }else{
    while(current.next.next){ // recorremos hasta que haya un ante ultimo null;
      current = current.next;
    }
    var valueCopy = current.next.value;
    current.next = null;
    this._length --;
    return valueCopy;
  }
}

LinkedList.prototype.search = function(valueOrCb){
  if(!this.head) return null;
  var current = this.head;
  if(typeof valueOrCb === "function"){
    while(current){
      if(valueOrCb(current.value)){
        return current.value;
      }
      current.next;
    }
  }
  while(current){
    if(current.value === valueOrCb){
      return current.value;
    }
    current = current.next;
  }
  return null;
}


/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.buckets = [];
  this.numBuckets = 35;
}

HashTable.prototype.hash = function(str){
  var result = 0;
  for(i = 0; i < str.length; i++){
    result += str[i].charCodeAt();
  }
  return result % this.numBuckets;
}

HashTable.prototype.set = function(){

}
HashTable.prototype.get = function(){
  
}
HashTable.prototype.hasKey = function(){
  
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
