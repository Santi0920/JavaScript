function calcularprecio(){

    var preciodia = 450*0.5;

    var cantidadbarrano = Number(document.getElementById('cantbarranoaldia').value);

    var cantidadbarras = Number(document.getElementById('cantbarradeldia').value);

    var totaldes = cantidadbarrano*preciodia;

    var total = cantidadbarras*450;
    
    var totalpagar = totaldes + total;

    document.getElementById("salida3").innerHTML = "El precio habitual de las barras dulces es de $" + 450 + "pesos c/u.<br> cuando una barra de dulce no es del dia entonces tiene un costo de $" + preciodia +
    "pesos c/u, quiere decir 50% mas del valor habitual.";

    
    document.getElementById("salida3a").innerHTML = "el costo total es de: $" + totalpagar + " <br> <span class='text-light'> acabas de ahorrar: $" + totaldes;
    
}