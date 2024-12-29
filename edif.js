class Edificio {
    constructor(calle, numero, codigoPostal) {
        this.calle = calle;
        this.numero = numero;
        this.codigoPostal = codigoPostal;
        this.plantas = [];
    }

    agregarPlantasYPuertas(numPlantas, numPuertas) {
        for (let i = 0; i < numPlantas; i++) {
            const planta = {
                puertas: Array(numPuertas).fill(null),
            };
            this.plantas.push(planta);
        }

        console.log(`Agregadas ${numPlantas} plantas con ${numPuertas} puertas por planta.`);
        //alert(`Agregadas ${numPlantas} plantas con ${numPuertas} puertas por planta.`);
    }

    modificarNumero(numero) {
        this.numero = numero;
    }

    modificarCalle(calle) {
        this.calle = calle;
    }

    modificarCodigoPostal(codigo) {
        this.codigoPostal = codigo;
    }

    imprimeCalle() {
        console.log(`Calle: ${this.calle}`);
        
    }

    imprimeNumero() {
        console.log(`Número: ${this.numero}`);
    }

    agregarPropietario(nombre, planta, puerta) {
        this.plantas[planta - 1].puertas[puerta - 1] = nombre;
        console.log(`Agregado ${nombre} como propietario de la puerta ${puerta} de la planta ${planta}.`);

    }
    imprimePlantas() {
        console.log(`Listado de propietarios del edificio en la calle ${this.calle}, número: ${this.numero}.`)
        this.plantas.forEach((planta, indexPlanta) => {
            planta.puertas.forEach((propietario, indexPuerta) => {
                const propietarioTexto = propietario
                    ? propietario
                    : "Sin propietario.";
                console.log(`Propietario del  piso ${indexPuerta + 1} de la planta ${indexPlanta + 1}:${propietarioTexto}`);
            });
        });
    }
}
//************   CLASS EDIFICIO  *********************** */

const edificios = [];

//• Construido nuevo edificio en calle: Garcia Prieto, nº: 58, CP: 15706.
const edificioA = new Edificio("Garcia Prieto", 58, "15706");
edificios.push(edificioA);

//Construido nuevo edificio en calle: Camino Caneiro, nº: 29, CP: 32004.
const edificioB = new Edificio("Camino Caneiro", 29, "32004");
edificios.push(edificioB);

// Construido nuevo edificio en calle: San Clemente, nº: s/n, CP: 15705.
const edificioC = new Edificio("San Clemente", "s/n", 15705);
edificios.push(edificioC);

// El código postal del edificio A es: 15706.
console.log(`El codigo postal del edificio A es: ${edificioA.codigoPostal}`);

//La calle del edificio C es: San Clemente.
console.log(`La calle del edificio C es: ${edificioC.calle}`);

// • El edificio B está situado en la calle Camino Caneiro número 29.
console.log(`El edificio B está situado en la calle: ${edificioB.calle} numero ${edificioB.numero}`);

//Agregamos 2 plantas y 3 puertas por planta al edificio A...
edificioA.agregarPlantasYPuertas(2, 3);


// Agregamos 4 propietarios al edificio A...
//• Jose Antonio Lopez es ahora el propietario de la puerta 1 de la planta 1.
edificioA.agregarPropietario("José Antonio López", 1, 1);

//• Luisa Martinez es ahora el propietario de la puerta 2 de la planta 1.
edificioA.agregarPropietario("Luisa Martinez", 1, 2);

//• Marta Castellón es ahora el propietario de la puerta 3 de la planta 1.
edificioA.agregarPropietario("Marta Castellón", 1, 3);

//• Antonio Pereira es ahora el propietario de la puerta 2 de la planta 2.
edificioA.agregarPropietario("Antonio Pereira", 2, 2);



// Listado de propietarios del edificio calle García Prieto número 58
//console.log(`Listado de propietarios del edificio en la calle ${edificioA.calle}, número: ${edificioA.numero}.`);
edificioA.imprimePlantas();
// • Propietario del piso 1 de la planta 1: Jose Antonio Lopez.

// • Propietario del piso 2 de la planta 1: Luisa Martinez.
// • Propietario del piso 3 de la planta 1: Marta Castellón.
// • Propietario del piso 1 de la planta 2:
// • Propietario del piso 2 de la planta 2: Antonio Pereira.
// • Propietario del piso 3 de la planta 2:

// Agregamos 1 planta más al edificio A...
edificioA.agregarPlantasYPuertas(1, 3);

// Agregamos 1 propietario más al edificio A planta 3, puerta 2...
edificioA.agregarPropietario("Pedro Meijide", 3, 2);
// • Pedro Meijide es ahora el propietario de la puerta 2 de la planta 3.

// Listado de propietarios del edificio calle García Prieto número 58

edificioA.imprimePlantas();
// • Propietario del piso 1 de la planta 1: Jose Antonio Lopez.
// • Propietario del piso 2 de la planta 1: Luisa Martinez.
// • Propietario del piso 3 de la planta 1: Marta Castellón.
// • Propietario del piso 1 de la planta 2:
// • Propietario del piso 2 de la planta 2:
// • Propietario del piso 1 de la planta 3:
// • Propietario del piso 2 de la planta 3: Pedro Meijide.
