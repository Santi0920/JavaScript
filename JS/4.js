//desafio 4
let lista = "";

//incializamos en 0
var suma = 0;

function añadir()

{
    var numero = Number(prompt('Ingrese un número'));

    lista = lista + " * " + numero;
  
    document.getElementById("salida4").innerHTML =  lista + " * "; 

    suma += numero;

    document.getElementById('salida4a').innerHTML = "La de los números digitados es de: " + suma;
}
