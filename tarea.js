class edificio {
    constructor(calle,numero,codigoPostal,numeroPlantas){
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;
    this.plantas = [];
}
agregarPlantasYPuertas(numPlantas,numPuertas){
    for (let i = 0; i < numPlantas; i++){
        const planta = {
            puertas: Array(numPuertas).fill(null)
        };
        this.plantas.push(planta);
    }

    console.log(`Agregadas ${numPlantas} plantas con ${numPuertas} puertas por planta.`)
    alert(`Agregadas ${numPlantas} plantas con ${numPuertas} puertas por planta.`)

}
modificarNumero(numero){
    this.numero = numero;
}
modificarCalle(calle){
    this.calle = calle;

}
modificarCodigoPostal(codigo){
    this.codigoPostal = codigo;
}

imprimeCalle(){
    console.log(`Calle: ${this.calle}`);
    alert(`Calle: ${this.calle}`);
}

imprimeNumero(){
    console.log(`Número: ${this.numero}`)
}
agregarPropietario(nombre,planta,puerta){

    this.plantas[planta - 1].puertas[puerta - 1] = nombre;
    alert(`${nombre} es ahora el propietario de la puerta ${puerta}
        de la planta ${planta}.`)
    console.log(`${nombre}`)    

}

}
//let calle = document.getElementById('calle')
//let edificio1 = new edificio();
//console.log(edificio1)

// let calle = prompt('Calle:');
// let numero = prompt('Número:');
// let codigoPostal = prompt('Codigo Postal:');
// let numPlantas = prompt('Número de plantas: ')





document.getElementById('edificioForm').addEventListener('submit', function(event){
    const calle = document.getElementById('calle').value;
    const numero = document.getElementById('numero').value;
    const codigoPostal = document.getElementById('codigoPostal').value;
    const numPlantas = document.getElementById('plantas').value;

    console.log({calle,numero,codigoPostal,numPlantas})
});
let nuevoEdificio = new edificio(calle,numero,codigoPostal,numPlantas)
console.log(`Calle: ${nuevoEdificio.calle}`) //comprobaciones
console.log(`El número es el: ${numero}`)  //comprobaciones