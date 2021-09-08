//desafio 5
var plbra = "";


function palabraespalindromo()
{
plbra = document.getElementById('palindromo').value;

let array = plbra.split("");

let consult = array.reverse();

//condicional
if (plbra == consult.join(""))
{
    var res = "La palabra <span class='text-light'>SI<\span><span class='text-dark'> es un palíndromo<\span>";
}else
{
    var res = "La palabra <span class='text-light'>NO<\span><span class='text-dark'> es un palíndromo<\span>";
}

document.getElementById("salida5").innerHTML = res;
}