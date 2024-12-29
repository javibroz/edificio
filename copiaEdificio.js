document.getElementById('edificioForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario.

    const calle = document.getElementById('calle').value;
    const numero = parseInt(document.getElementById('numero').value, 10);
    const codigoPostal = document.getElementById('codigoPostal').value;
    const numPlantas = parseInt(document.getElementById('plantas').value, 10);

    const nuevoEdificio = new Edificio(calle, numero, codigoPostal);

    // Mostrar los detalles del edificio en el DOM
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Detalles del Edificio</h2>
        <p>Calle: ${nuevoEdificio.calle}</p>
        <p>Número: ${nuevoEdificio.numero}</p>
        <p>Código Postal: ${nuevoEdificio.codigoPostal}</p>
        <p>Plantas: ${numPlantas} (sin puertas asignadas aún)</p>
    `;

    // Visualizar el boton de añadir plantas
    const btnAñadirPlantas = document.getElementById('agregarPlantas');
    btnAñadirPlantas.style.display = 'block';
    // nuevoEdificio.agregarPlantasYPuertas(numPlantas, 4); // 4 puertas por planta como ejemplo
});

function mostrarAgregarPlantas() {
    const divAgregar = document.getElementById('div-agregar');
    divAgregar.style.display = "block";//❓❓
}

function registrarPlantasYPisos() {
    const plantas = document.getElementById('numPlantas').value;
    const puertas = document.getElementById('numPisos').value;
    this.agregarPlantasYPuertas(plantas, puertas);
    alert(`Se añadieron ${plantas} plantas con ${puertas} puertas por planta.`)
    console.log(`Se añadieron ${plantas} plantas con ${puertas} puertas por planta.`)

}