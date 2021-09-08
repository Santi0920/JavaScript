function calcularindicemasamuscular(){

//desafio 2

    var Pesoo = Number(document.getElementById('Peso').value);

    var Altura = Number(document.getElementById('Altura').value);

    var m2 = Altura**2;

    var indicemasamuscular = Pesoo/m2;

    //decimales 2
    var valor = indicemasamuscular.toFixed(2);

    
    document.getElementById("salida2").innerHTML = "Tu índice de masa corporal es: " + valor;

    
}