'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}
// arbol binario de busqueda // ordena segun sea mayor o menor
BinarySearchTree.prototype.insert = function(value){
   if(value > this.value){// si es mayor vamos a la derecha y si es menor o igual vamos a la izquierda
      if(!this.right){ // si no tengo nodo a la derecha
         this.right = new BinarySearchTree(value);
      }else{ // si hay nodo aplicamos la recursion..
         this.right.insert(value);
      }
      }else{
         if(!this.left){ // si no tengo nodo a la izquierda
            this.left = new BinarySearchTree(value);
         }else{ // si hay nodo aplicamos la recursion..
            this.left.insert(value);
         }
      }
   }
BinarySearchTree.prototype.size = function(){
   if(!this.left && !this.right) return 1;
   if(!this.right) return 1 + this.right.size();
   if(!this.left) return 1 + this.left.size();
   if(this.right && this.left) return 1 + this.right.size() + this.left.size();
}

BinarySearchTree.prototype.contains = function(value){
   if(value === this.value)return true;
   if(value > this.value){
      if(!this.right) return false;
      return this.right.contains(value);
   }else{
      if(!this.left) return false;
      return this.left.contains(value);
   }
}

BinarySearchTree.prototype.depthFirstForEach = function(value){
   
}
// No modifiquen nada debajo de esta linea
// --------------------------------

const testTree = new BinarySearchTree(10);
testTree.insert(14);
testTree.insert(20);
testTree.insert(8);
testTree.insert(11);
console.log(testTree.contains(20));


module.exports = {
   BinarySearchTree,
};
