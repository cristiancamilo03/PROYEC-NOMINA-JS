window.addEventListener('load', init, false);
document.getElementById('cerrarSes').addEventListener('click', Cerrar);
let guardadoNom = localStorage.getItem('datosNom');
guardadoNom = JSON.parse(guardadoNom);
console.log(guardadoNom)

let auxilioT = 106454;
let uvt = 36308;
let comision = 50000;
let vectorPrimariaServ = [];
let vectorParafiscales = [];
let vectorCesantias = [];
let vectorSena = [];
let vectorSenaPatron = [];
let vectorPensionPatron = [];
let vectorARL = [];
let vectorCajas = [];
let vectorICBF = [];
let vectorIntCesantias = [];
let vectorVacaciones = [];
let totalPrestaciones = [];
let totalParafiscales = [];
let totalNominas = [];
let totalapagarNominas = 0;

function init() {
    function ocultarTabla2() {
        let form = document.getElementById("empleadosList1");
        form.style.visibility = 'hidden';
    }
    ocultarTabla2();

    function calculoPrestaciones() {
        for (i = 0; i < guardadoNom.length; i++) {
            vectorPrimariaServ[i] = parseInt(guardadoNom[i].totalDevengos * 0.0833);
            vectorCesantias[i] = parseInt(guardadoNom[i].totalDevengos * 0.0833);
            vectorIntCesantias[i] = parseInt(vectorCesantias[i] * 0.12);
            vectorVacaciones[i] = parseInt((guardadoNom[i].totalDevengos - auxilioT) * 0.0417);
            totalPrestaciones[i] = parseInt((vectorCesantias[i] + vectorPrimariaServ[i] + vectorVacaciones[i] + vectorIntCesantias[i]));
        }
    }
    calculoPrestaciones();

    function calculoParafiscales() {
        for (i = 0; i < guardadoNom.length; i++) {
            vectorSenaPatron[i] = parseInt((guardadoNom[i].saludEmp));
            vectorPensionPatron[i] = parseInt((guardadoNom[i].pensionEmp));
            vectorSena[i] = parseInt((parseInt(guardadoNom[i].sueldo) + parseInt(guardadoNom[i].valorHorasExtras) + parseInt(comision)) * 0.02);
            vectorARL[i] = parseInt((parseInt(guardadoNom[i].sueldo) + parseInt(guardadoNom[i].valorHorasExtras) + parseInt(comision)) * 0.00522);
            vectorCajas[i] = parseInt((parseInt(guardadoNom[i].sueldo) + parseInt(guardadoNom[i].valorHorasExtras) + parseInt(comision)) * 0.04);
            vectorICBF[i] = parseInt((parseInt(guardadoNom[i].sueldo) + parseInt(guardadoNom[i].valorHorasExtras) + parseInt(comision)) * 0.03);
            totalParafiscales[i] = parseInt(parseInt(guardadoNom[i].saludEmp) + parseInt(guardadoNom[i].pensionEmp) + parseInt(vectorSena[i]) + parseInt(vectorARL[i]) + parseInt(vectorCajas[i]) + parseInt(vectorICBF[i]));
        }
    }
    calculoParafiscales();

    function calculoTotalNomina() {
        for (i = 0; i < guardadoNom.length; i++) {
            totalNominas[i] = parseInt(guardadoNom[i].totalDevengos) + parseInt(totalPrestaciones[i]) + parseInt(totalParafiscales[i]);
        }
    }
    calculoTotalNomina();

    function calculoTotalapagarNomina() {
        for (i = 0; i < guardadoNom.length; i++) {
            totalapagarNominas += parseInt(totalNominas[i])
        }
    }
    calculoTotalapagarNomina();

    function tablaEmpleados() {
        var listaNominas = document.getElementById('tabla');
        let tablaContent = ``
        let tablaRes = ``
        for (i = 0; i < guardadoNom.length; i++) {
            tablaContent += `
    <tr>
      <td>${guardadoNom[i].cedula}</td>
      <td>${guardadoNom[i].nombreE}</td>
      <td>${guardadoNom[i].sueldo}</td>
      <td>${guardadoNom[i].AuxilioT}</td>
      <td>${guardadoNom[i].valorHED}</td>
      <td>${guardadoNom[i].valorHEN}</td>
      <td>${guardadoNom[i].valorHEDD}</td>
      <td>${guardadoNom[i].valorHEND}</td>
      <td>${guardadoNom[i].recargoNoc}</td>
      <td>${guardadoNom[i].valorHorasExtras}</td>
      <td>${guardadoNom[i].totalDevengos}</td>
      <td>${guardadoNom[i].saludEmp}</td>
      <td>${guardadoNom[i].pensionEmp}</td>
      <td>${guardadoNom[i].fondoSalarial}</td>
      <td>${uvt}</td>
      <td>${guardadoNom[i].retFuente}</td>
      <td>${guardadoNom[i].totalDeducido}</td>
      <td>${guardadoNom[i].totalSalarioNeto}</td>
      <td>${totalPrestaciones[i]}</td>
      <td>${totalParafiscales[i]}</td>
      <td>${totalNominas[i]}</td>
    </tr>
`
        }
        tablaRes += `
    <td colspan="19"></td> 
    <td>Total a Pagar</td> 
    <td>${ totalapagarNominas}</td>
    <td><div class='text-center'><div class='btn-group'><button id="btnReporte" type="button" class="btn btn-danger btnReporte" data-toggle="modal" onClick="exrportToPdf()"><i class="fas fa-file-pdf"></i>&nbsp;Generar Reporte</button></div></div></td>
    `
        listaNominas.innerHTML += tablaContent
        listaNominas.innerHTML += tablaRes

    }
    tablaEmpleados();

    function tablaEmpleados2() {
        var listaNominas = document.getElementById('tabla1');
        let tablaContent = ``
        let tablaRes = ``
        for (i = 0; i < guardadoNom.length; i++) {
            tablaContent += `
    <tr>
      <td>${guardadoNom[i].cedula}</td>
      <td>${guardadoNom[i].nombreE}</td>
      <td>${guardadoNom[i].sueldo}</td>
      <td>${guardadoNom[i].diasT}</td>
      <td>${guardadoNom[i].AuxilioT}</td>
      <td>${guardadoNom[i].valorHorasExtras}</td>
      <td>${guardadoNom[i].saludEmp}</td>
      <td>${guardadoNom[i].pensionEmp}</td>
      <td>${guardadoNom[i].fondoSalarial}</td>
      <td>${guardadoNom[i].retFuente}</td>
      <td>${totalNominas[i]}</td>
    </tr>
`
        }
        tablaRes += `
        <td colspan="9"></td> 
        <td>Total a Pagar</td> 
        <td>${totalapagarNominas}</td>
        `
        listaNominas.innerHTML += tablaContent
        listaNominas.innerHTML += tablaRes

    }
    tablaEmpleados2();
}

function Cerrar() {
    alert('Cerrando su sesion...');
    window.location = "../index.html";
}

function exrportToPdf() {
    var doc = new jsPDF('p', 'pt', 'letter');
    var htmlstring = '';
    var tempVarToCheckPageHeight = 0;
    var pageHeight = 0;
    pageHeight = doc.internal.pageSize.height;
    specialElementHandlers = {
        '#codNomina': function(element, renderer) {
            return true
        }
    };
    var y = 20;
    doc.setLineWidth(2);
    doc.text(200, y = y + 30, "Nominas Empleados");
    doc.autoTable({
        html: '#table1',
        startY: 80,
        theme: 'grid',
        columnStyles: {
            0: {
                cellWidth: 65,
            },
            1: {
                cellWidth: 45,
            },
            2: {
                cellWidth: 54,
            },
            3: {
                cellWidth: 30,
            },
            4: {
                cellWidth: 30,
            },
            5: {
                cellWidth: 30,
            },
            6: {
                cellWidth: 50,
            },
            7: {
                cellWidth: 50,
            },
            8: {
                cellWidth: 50,
            },
            9: {
                cellWidth: 50,

            },
            10: {
                cellWidth: 55,

            }
        },
        styles: {
            minCellHeight: 40
        }
    })
    doc.save('NominasEmpleados.pdf');
}