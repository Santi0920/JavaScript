//desafio 7
const frutasveg = {
    fresa: 500,
    lima: 250,
    limon: 600,
    durazno: 150,
    mora: 100,
    naranja: 200,
    mandarina: 210,
    melon: 300,
    sandia: 350,
    piña: 500,
    platano: 300,
    uva: 250,
    cereza: 700,
    kiwi: 200,
    berenjena: 800,
    papaya: 800,
    mango: 670,
    aguacate: 1000,
    tomate: 1500,
    cebolla: 3000
};

function calcularfrutasprecio()
{
    let preciokilogramo = frutasveg[fruta];

    let kilogramos = Number(document.getElementById("kilos").value);

    let fruta = (document.getElementById("fruta").value).toLowerCase();

if(preciokilogramo != null)
{
    var total = preciokilogramo * kilogramos;

    var resp = "El precio total va ser:" + total + "pesos";
}else
{
    var resp = "La fruta '" + frta + "' no esta registrada en la bases de datos, intentalo nuevamente."
}


document.getElementById("salida7").innerHTML = resp;
}