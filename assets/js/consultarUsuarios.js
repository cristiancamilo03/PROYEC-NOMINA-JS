window.addEventListener('load', init, false);
document.getElementById('cerrarSes').addEventListener('click', Cerrar);
document.getElementById('btnBuscar').addEventListener('click', calculoHorasExtras);
document.getElementById('btnBuscar').addEventListener('click', calculoNominaEmpleado);
document.getElementById('btnBuscar').addEventListener('click', calculoDevengos);
document.getElementById('btnBuscar').addEventListener('click', guardarDatos);
document.getElementById('btnBuscar').addEventListener('click', consultarEmpleado);
document.getElementById('btnBuscar').addEventListener('click', mostrarEmpleados);
let guardadoNom = localStorage.getItem('datosNom');
guardadoNom = JSON.parse(guardadoNom);
console.log(guardadoNom)

function init() {
    let form = document.getElementById("empleadosList");
    form.style.visibility = 'hidden';
    let boton = document.getElementById("btnBuscar");
    boton.addEventListener('click', function(e) {
        if (form.style.visibility === 'hidden') {
            form.style.visibility = 'visible';

        } else {
            form.style.visibility = 'hidden';
        }
    }, false);
}

let totalHorasExtras = [];
let valorHorasExtras = [];

function calculoHorasExtras() {
    for (i = 0; i < guardadoNom.length; i++) {
        totalHorasExtras[i] = (parseInt(guardadoNom[i].horasExtraD) + parseInt(guardadoNom[i].horasExtraN) + parseInt(guardadoNom[i].horasExtraDD) + parseInt(guardadoNom[i].horasExtraND) + parseInt(guardadoNom[i].recargoN));
    }
}

let uvt = 36308;
let recargoF = 8821;
let comision = 50000;
let auxilioT = 106454;
let valorHED = [];
let valorHEN = [];
let valorHEDD = [];
let valorHEND = [];
let recargoNoc = [];
let saludEmp = [];
let AsaludEmp = [];
let ApensionEmp = [];
let pensionEmp = [];
let fondoSalarial = [];
let retFuente = [];
let totalDeducido = [];
let totalSalNeto = [];
let totalAuxT = [];

function calculoAuxilioT() {
    for (i = 0; i < guardadoNom.length; i++) {
        if (guardadoNom[i].sueldo > 1817052) {
            totalAuxT[i] = 0;
        } else {
            totalAuxT[i] = (106454 / 30) * guardadoNom[i].diasT;
        }
    }
}
calculoAuxilioT();

function calculoNominaEmpleado() {
    for (i = 0; i < guardadoNom.length; i++) {
        valorHorasExtras[i] = parseInt(4731 * (guardadoNom[i].horasExtraD)) + parseInt(6624 * (guardadoNom[i].horasExtraN)) + parseInt(7570 * (guardadoNom[i].horasExtraDD)) + parseInt(9463 * (guardadoNom[i].horasExtraND) + parseInt(1655 * (guardadoNom[i].recargoN)));
        valorHED[i] = 4731 * parseInt(guardadoNom[i].horasExtraD);
        valorHEN[i] = 6624 * parseInt(guardadoNom[i].horasExtraN);
        valorHEDD[i] = 7570 * parseInt(guardadoNom[i].horasExtraDD);
        valorHEND[i] = 9463 * parseInt(guardadoNom[i].horasExtraND);
        recargoNoc[i] = 9463 * parseInt(guardadoNom[i].recargoN);
        saludEmp[i] = parseInt((parseInt(guardadoNom[i].sueldo) + (valorHorasExtras[i]) + (comision)) * 0.085);
        pensionEmp[i] = parseInt((parseInt(guardadoNom[i].sueldo) + (valorHorasExtras[i]) + (comision)) * 0.12);
        AsaludEmp[i] = parseInt((parseInt(guardadoNom[i].sueldo) + (valorHorasExtras[i]) + (comision)) * 0.04);
        ApensionEmp[i] = parseInt((parseInt(guardadoNom[i].sueldo) + (valorHorasExtras[i]) + (comision)) * 0.04);
        if (guardadoNom[i].sueldo >= 3634104 && guardadoNom[i].sueldo < 14536416) {
            fondoSalarial[i] = (parseInt(guardadoNom[i].sueldo) * 0.01);
        } else if (guardadoNom[i].sueldo >= 14536416 && guardadoNom[i].sueldo < 15444942) {
            fondoSalarial[i] = (parseInt(guardadoNom[i].sueldo) * 0.012);
        } else if (guardadoNom[i].sueldo >= 15444942 && guardadoNom[i].sueldo < 16353468) {
            fondoSalarial[i] = (parseInt(guardadoNom[i].sueldo) * 0.014);
        } else if (guardadoNom[i].sueldo >= 16353468 && guardadoNom[i].sueldo < 17261994) {
            fondoSalarial[i] = (parseInt(guardadoNom[i].sueldo) * 0.016);
        } else if (guardadoNom[i].sueldo >= 17261994 && guardadoNom[i].sueldo < 18170520) {
            fondoSalarial[i] = (parseInt(guardadoNom[i].sueldo) * 0.018);
        } else if (guardadoNom[i].sueldo >= 18170520) {
            fondoSalarial[i] = (parseInt(guardadoNom[i].sueldo) * 0.02);
        } else {
            fondoSalarial[i] = 0;
        }

        if (guardadoNom[i].sueldo >= 3634104 && guardadoNom[i].sueldo < 5451216) {
            retFuente[i] = (parseInt(guardadoNom[i].sueldo / uvt) * 0.19);
        } else if (guardadoNom[i].sueldo >= 5451216 && guardadoNom[i].sueldo < 12719504) {
            retFuente[i] = parseInt((parseInt(guardadoNom[i].sueldo / uvt) - (uvt * 95) * 0.28) + (uvt * 10)) * (-1);
        } else if (guardadoNom[i].sueldo >= 12719504 && guardadoNom[i].sueldo < 16353648) {
            retFuente[i] = parseInt((parseInt(guardadoNom[i].sueldo / uvt) - (uvt * 360) * 0.33) + (uvt * 69)) * (-1);
        } else if (guardadoNom[i].sueldo >= 16353648 && guardadoNom[i].sueldo < 22713400) {
            retFuente[i] = parseInt((parseInt(guardadoNom[i].sueldo / uvt) - (uvt * 640) * 0.35) + (uvt * 162)) * (-1);
        } else if (guardadoNom[i].sueldo >= 22713400 && guardadoNom[i].sueldo < 33615832) {
            retFuente[i] = parseInt((parseInt(guardadoNom[i].sueldo / uvt) - (uvt * 945) * 0.37) + (uvt * 268)) * (-1);
        } else if (guardadoNom[i].sueldo >= 33615832 && guardadoNom[i].sueldo < 83585312) {
            retFuente[i] = parseInt((parseInt(guardadoNom[i].sueldo / uvt) - (uvt * 2300) * 0.39) + (uvt * 770)) * (-1);
        } else {
            retFuente[i] = 0;
        }

        totalDeducido[i] = parseInt(AsaludEmp[i] + ApensionEmp[i] + fondoSalarial[i]);
    }
}

let totalDevengos = [];

function calculoDevengos() {
    for (i = 0; i < guardadoNom.length; i++) {
        totalDevengos[i] = (parseInt(guardadoNom[i].sueldo) + comision + parseInt(valorHorasExtras[i]) + 1655 + recargoF + auxilioT);
    }
}

function guardarDatos() {
    for (i = 0; i < guardadoNom.length; i++) {
        totalSalNeto[i] = parseInt(totalDevengos[i] - totalDeducido[i]);
    }
    for (i = 0; i < guardadoNom.length; i++) {
        let valoresHED = parseInt(valorHED[i]);
        guardadoNom[i].valorHED = valoresHED;
    }
    for (i = 0; i < guardadoNom.length; i++) {
        let valoresHEN = parseInt(valorHEN[i]);
        guardadoNom[i].valorHEN = valoresHEN;
    }
    for (i = 0; i < guardadoNom.length; i++) {
        let valoresHEDD = parseInt(valorHEDD[i]);
        guardadoNom[i].valorHEDD = valoresHEDD;
    }
    for (i = 0; i < guardadoNom.length; i++) {
        let valoresHEND = parseInt(valorHEND[i]);
        guardadoNom[i].valorHEND = valoresHEND;
    }
    for (i = 0; i < guardadoNom.length; i++) {
        let valoresRecN = parseInt(recargoNoc[i]);
        guardadoNom[i].recargoNoc = valoresRecN;
    }
    for (i = 0; i < guardadoNom.length; i++) {
        let valoresSalEm = parseInt(saludEmp[i]);
        guardadoNom[i].saludEmp = valoresSalEm;
    }
    for (i = 0; i < guardadoNom.length; i++) {
        let valoresPensEm = parseInt(pensionEmp[i]);
        guardadoNom[i].pensionEmp = valoresPensEm;
    }
    for (i = 0; i < guardadoNom.length; i++) {
        let valoresFondoSal = parseInt(fondoSalarial[i]);
        guardadoNom[i].fondoSalarial = valoresFondoSal;
    }
    for (i = 0; i < guardadoNom.length; i++) {
        let valoresRetFuente = parseInt(retFuente[i]);
        guardadoNom[i].retFuente = valoresRetFuente;
    }
    for (i = 0; i < guardadoNom.length; i++) {
        let valoresTotalDed = parseInt(totalDeducido[i]);
        guardadoNom[i].totalDeducido = valoresTotalDed;
    }
    for (i = 0; i < guardadoNom.length; i++) {
        let valoresTotalDe = parseInt(totalDevengos[i]);
        guardadoNom[i].totalDevengos = valoresTotalDe;
    }
    for (i = 0; i < guardadoNom.length; i++) {
        let valoresHorasEx = parseInt(valorHorasExtras[i]);
        guardadoNom[i].valorHorasExtras = valoresHorasEx;
    }
    for (i = 0; i < guardadoNom.length; i++) {
        let valoresTotalNeto = parseInt(totalSalNeto[i]);
        guardadoNom[i].totalSalarioNeto = valoresTotalNeto;
    }
    for (i = 0; i < guardadoNom.length; i++) {
        let valorAsaludEmp = parseInt(AsaludEmp[i]);
        guardadoNom[i].AsaludEmp = valorAsaludEmp;
    }
    for (i = 0; i < guardadoNom.length; i++) {
        let valorApensionEmp = parseInt(ApensionEmp[i]);
        guardadoNom[i].ApensionEmp = valorApensionEmp;
    }
    for (i = 0; i < guardadoNom.length; i++) {
        let valorAuxTrans = parseInt(totalAuxT[i]);
        guardadoNom[i].AuxilioT = valorAuxTrans;
    }
    localStorage.setItem('datosNom', JSON.stringify(guardadoNom));
}
let empleado;

function consultarEmpleado() {
    let cedulaEmp = document.getElementById('cedula').value;
    empleado = _.findWhere(guardadoNom, { cedula: cedulaEmp });
}

let nominaEmpleados;
alertaU = document.getElementById('alertaUser');
btnRec = document.getElementById('btnRecargar');

function mostrarEmpleados() {
    alert('Consulta realizada correctamente');
    document.getElementById('btnBuscar').disabled = true;
    alertaU.innerText = "Recargue la pagina para consultar nuevamente";
    alertaU.style.color = '#12c01b';
    alertaU.style.textAlign = 'center';
    btnRec.style.visibility = 'visible';
    var listaEmpleados = document.getElementById('tabla');
    let tablaContent = ``
    let tablaRes = ``
    for (i = 0; i < 1; i++) {
        tablaContent += `
    <tr>
      <td>${empleado.cedula}</td>
      <td>${empleado.nombreE}</td>
      <td>${empleado.sueldo}</td>
      <td>${empleado.AuxilioT}</td>
      <td>${empleado.valorHED}</td>
      <td>${empleado.valorHEN}</td>
      <td>${empleado.valorHEDD}</td>
      <td>${empleado.valorHEND}</td>
      <td>${empleado.recargoNoc}</td>
      <td>${empleado.valorHorasExtras}</td>
      <td>${empleado.totalDevengos}</td>
      <td>${empleado.saludEmp}</td>
      <td>${empleado.pensionEmp}</td>
      <td>${empleado.AsaludEmp}</td>
      <td>${empleado.ApensionEmp}</td>
      <td>${empleado.fondoSalarial}</td>
      <td>${uvt}</td>
      <td>${empleado.retFuente}</td>
      <td>${empleado.totalDeducido}</td>
      <td>${empleado.totalSalarioNeto}</td>
    </tr>
`
    }
    listaEmpleados.innerHTML += tablaContent;
}
document.getElementById('btnRecargar').addEventListener('click', reloadBtn);

function reloadBtn() {
    location.reload();
}

function Cerrar() {
    alert('Cerrando su sesion...');
    window.location = "../index.html";
}