function calcularsalario(){
    //desafio 1
    
    var horasTrjadas = Number(document.getElementById('horasTrabajadas').value);

    var pagoObtenido = Number(document.getElementById('costoporhora').value);

    console.log(horasTrjadas);
    console.log(pagoObtenido);

    document.getElementById("salida1").innerHTML = "El pago que recibira sera: $" + horasTrjadas*pagoObtenido;

    
}