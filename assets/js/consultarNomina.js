window.addEventListener('load', init, false);
document.getElementById('cerrarSes').addEventListener('click', Cerrar);
document.getElementById('verEmpleados').addEventListener('click', mostrarEmpleadosNom);
document.getElementById('btnEliminarEmp').addEventListener('click', eiminarEmpleados);
document.getElementById('EditarEmp').addEventListener('click', editarEmpleados);
let guardadoNom = localStorage.getItem('datosNom');
guardadoNom = JSON.parse(guardadoNom);
console.log(guardadoNom)

function init() {
    let form = document.getElementById("empleadosList");
    form.style.visibility = 'hidden';
    let boton = document.getElementById("verEmpleados");
    boton.addEventListener('click', function(e) {
        if (form.style.visibility === 'hidden') {
            form.style.visibility = 'visible';
        } else {
            form.style.visibility = 'hidden';
        }
    }, false);
}

function eiminarEmpleados() {
    let pos = document.getElementById('idEmpleadoEliminar').value;
    pos -= 1;
    guardadoNom.splice(pos, 1);
    localStorage.setItem('datosNom', JSON.stringify(guardadoNom));
    location.reload();
}
alertaU1 = document.getElementById('alertaUser1');

function editarEmpleados() {
    let codEmpN = document.getElementById('codNomina').value;
    codEmpN -= 1;
    let nomEmp = document.getElementById('nombreEmp').value;
    let sueldoEmp = document.getElementById('sueldoEmp').value;
    let diasTrab = document.getElementById('diasTrabajados').value;
    let horasED = document.getElementById('horasExD').value;
    let horasEN = document.getElementById('horasExN').value;
    let horasEDD = document.getElementById('horasExDD').value;
    let horasEND = document.getElementById('horasExND').value;
    let horasRN = document.getElementById('horasRecN').value;
    if ((nomEmp == "") || (sueldoEmp == "") || (diasTrab == "") || (horasED == "") || (horasEN == "") || (horasEDD == "") || (horasEND == "") || (horasRN == "")) {
        alertaU1.innerText = "Los campos no pueden quedar vacios!";
        alertaU1.style.color = '#c01b12';
        alertaU1.style.fontSize = "20px";
        alertaU1.style.textAlign = 'center';
    } else {
        guardadoNom[codEmpN].nombreE = nomEmp;
        guardadoNom[codEmpN].sueldo = sueldoEmp;
        guardadoNom[codEmpN].diasT = diasTrab;
        guardadoNom[codEmpN].horasExtraD = horasED;
        guardadoNom[codEmpN].horasExtraN = horasEN;
        guardadoNom[codEmpN].horasExtraDD = horasEDD;
        guardadoNom[codEmpN].horasExtraND = horasEND;
        guardadoNom[codEmpN].recargoN = horasRN;
        localStorage.setItem('datosNom', JSON.stringify(guardadoNom));
        alert("Los datos se han editado correctamente");
        location.reload();
    }
}

function mostrarEmpleadosNom() {
    var listaEmpleados = document.getElementById('tabla');
    let tablaContent = ``
    let tablaRes = ``
    for (i = 0; i < guardadoNom.length; i++) {
        tablaContent += `
    <tr>
      <td>${guardadoNom[i].id}</td>
      <td>${guardadoNom[i].cedula}</td>
      <td>${guardadoNom[i].nombreE}</td>
      <td>${guardadoNom[i].sueldo}</td>
      <td>${guardadoNom[i].diasT}</td>
      <td>${guardadoNom[i].horasExtraD}</td>
      <td>${guardadoNom[i].horasExtraN}</td>
      <td>${guardadoNom[i].horasExtraDD}</td>
      <td>${guardadoNom[i].horasExtraND}</td>
      <td>${guardadoNom[i].recargoN}</td>
      <td><div class='text-center'><div class='btn-group'><button id="btnEditar" type="button" class="btn btn-primary btnEditar" data-toggle="modal"><i class="fas fa-edit"></i>&nbsp;Editar</button></div></div></td>
    </tr>
`
    }
    tablaRes += `
    <td colspan="9"></td> 
    <td>Generar Nominas</td> 
    <td><div class='text-center'><div class='btn-group'><button id="btnReporte" type="button" class="btn btn-danger btnReporte" data-toggle="modal" onClick="exrportToPdf()"><i class="fas fa-file-pdf"></i>&nbsp;Generar Reporte</button></div></div></td>
    `
    listaEmpleados.innerHTML += tablaContent;
    listaEmpleados.innerHTML += tablaRes;
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
        html: '#table',
        startY: 80,
        theme: 'grid',
        columnStyles: {
            0: {
                cellWidth: 60,
            },
            1: {
                cellWidth: 45,
            },
            2: {
                cellWidth: 55,
            },
            3: {
                cellWidth: 50,
            },
            4: {
                cellWidth: 50,
            },
            5: {
                cellWidth: 50,
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