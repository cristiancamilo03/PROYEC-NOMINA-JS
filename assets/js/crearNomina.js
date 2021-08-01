document.getElementById('btnAgregar').addEventListener('click', registrarE);
document.getElementById('cerrarSes').addEventListener('click', Cerrar);

function CrearNomina(id, cedula, nombreE, sueldo, diasT, AuxilioT, horasExtraD, horasExtraN, horasExtraDD, horasExtraND,
    recargoN, valorHED, valorHEN, valorHEDD, valorHEND, recargoNoc, saludEmp, pensionEmp, fondoSalarial, retFuente, valorHorasExtras, totalDevengos, totalDeducido, totalSalarioNeto, AsaludEmp, ApensionEmp) {
    this.id = id;
    this.cedula = cedula;
    this.nombreE = nombreE;
    this.sueldo = sueldo;
    this.diasT = diasT;
    this.AuxilioT = AuxilioT;
    this.horasExtraD = horasExtraD;
    this.horasExtraN = horasExtraN;
    this.horasExtraDD = horasExtraDD;
    this.horasExtraND = horasExtraND;
    this.recargoN = recargoN;
    this.valorHED = valorHED;
    this.valorHEN = valorHEN;
    this.valorHEDD = valorHEDD;
    this.valorHEND = valorHEND;
    this.recargoNoc = recargoNoc;
    this.saludEmp = saludEmp;
    this.pensionEmp = pensionEmp;
    this.fondoSalarial = fondoSalarial;
    this.retFuente = retFuente;
    this.valorHorasExtras = valorHorasExtras;
    this.totalDevengos = totalDevengos;
    this.totalDeducido = totalDeducido;
    this.totalSalarioNeto = totalSalarioNeto;
    this.AsaludEmp = AsaludEmp;
    this.ApensionEmp = ApensionEmp;
}
let vectorEmpleados = [];

function obtenerCedula() {
    let cedula = document.getElementById('cedula').value;
    return cedula;
}

function obtenerNombre() {
    let nombreE = document.getElementById('nombreE').value;
    return nombreE;
}

function obtenerSueldo() {
    let sueldo = document.getElementById('sueldoE').value;
    return sueldo;
}

function obtenerDiasTrabajados() {
    let diasT = document.getElementById('diasT').value;
    return diasT;
}

function obtenerHorasExtraD() {
    let horasExtraD = document.getElementById('horasExtraD').value;
    return horasExtraD;
}

function obtenerHorasExtraN() {
    let horasExtraN = document.getElementById('horasExtraN').value;
    return horasExtraN;
}

function obtenerHorasExtraDD() {
    let horasExtraDD = document.getElementById('horasExtraDD').value;
    return horasExtraDD;
}

function obtenerHorasExtraND() {
    let horasExtraND = document.getElementById('horasExtraND').value;
    return horasExtraND;
}

function obtenerRecargoN() {
    let recargoN = document.getElementById('recargoN').value;
    return recargoN;
}

let cedula = document.getElementById('cedula').value;
let nombreE = document.getElementById('nombreE').value;
let sueldo = document.getElementById('sueldoE').value;
let diasT = document.getElementById('diasT').value;
let horasExtraD = document.getElementById('horasExtraD').value;
let horasExtraN = document.getElementById('horasExtraN').value;
let horasExtraDD = document.getElementById('horasExtraDD').value;
let horasExtraND = document.getElementById('horasExtraND').value;
let recargoN = document.getElementById('recargoN').value;
alertaU = document.getElementById('alertaUser');

function registrarE() {
    let Nomina = new CrearNomina(vectorEmpleados.length + 1, obtenerCedula(), obtenerNombre(), obtenerSueldo(), obtenerDiasTrabajados(), obtenerHorasExtraD(), obtenerHorasExtraN(), obtenerHorasExtraDD(), obtenerHorasExtraND(), obtenerRecargoN(), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    vectorEmpleados.push(Nomina);
    localStorage.setItem('datosNom', JSON.stringify(vectorEmpleados));
    alert('Empleado registrado correctamente');
    document.getElementById('cedula').value = "";
    document.getElementById('nombreE').value = "";
    document.getElementById('sueldoE').value = "";
    document.getElementById('diasT').value = "";
    document.getElementById('horasExtraD').value = "";
    document.getElementById('horasExtraN').value = "";
    document.getElementById('horasExtraDD').value = "";
    document.getElementById('horasExtraND').value = "";
    document.getElementById('recargoN').value = "";
}

function Cerrar() {
    alert('Cerrando su sesion...');
    window.location = "../index.html";
}