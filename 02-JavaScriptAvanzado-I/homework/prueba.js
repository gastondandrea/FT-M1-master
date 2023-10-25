//Código #1

x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // muestra 10
   console.log(a); // muestra 8
   var f = function (a, b, c) {
      b = a; // asigna 8
      console.log(b); // muesta 8
      b = c; // asigna 10
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // muesta 10
};
c(8, 9, 10);
console.log(b); // muesta 10
console.log(x); // muesta 1

//Código #2

console.log(bar); // undefined
//console.log(baz); // not defined
foo();
function foo() {
   console.log('Hola!'); // muestra Hola!
}
var bar = 1; // asigna 1
//baz = 2;


//Código #3
//*BLOQUES - !== entre var let const | VAR trabaja por contexto y No por bloque
// LET trabaja por BLOQUE
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco'; //este chango quiso escribir instructor = 'Franco'
}
console.log(instructor); // Franco

//Código #4

var instructor = 'Tony';
console.log(instructor); // Tony
(function () {
   if (true) {
      var instructor = 'Franco'; // Franco
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony

//Código #5

var instructor = 'Tony'; 
let pm = 'Franco'; 
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // The Flash
   console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco

//Código #6

6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
{}[0]
parseInt("09")
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1
//[] == ![]

//Código #7

function test() {
    console.log(a); // undefined
    console.log(foo()); //2
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();

 //Código #8

 var snack = 'Meow Mix';

 function getFood(food) {
    if (food) {
       var snack = 'Friskies';
       return snack;
    }
    return snack;
 }
 
 getFood(false);

 //Código #9
//*THIS
 var fullname = 'Juan Perez';
 var obj = {
    fullname: 'Natalia Nerea',
    prop: {
       fullname: 'Aurelio De Rosa',
       getFullname: function () {
          return this.fullname;
       },
    },
 };
 
 console.log(obj.prop.getFullname());
 
 var test = obj.prop.getFullname;
 
 console.log(test());
 
 //Código #10

 function printing() {
    console.log(1);
    setTimeout(function () {
       console.log(2);
    }, 1000);
    setTimeout(function () {
       console.log(3);
    }, 0);
    console.log(4);
 }
 
 printing();