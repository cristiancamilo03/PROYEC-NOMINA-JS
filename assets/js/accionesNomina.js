$(document).ready(function() {

    var fila;

    $(document).on("click", ".btnEditar", function() {
        fila = $(this).closest("tr");
        id = parseInt(fila.find('td:eq(0)').text());
        cedula = fila.find('td:eq(1)').text();
        nombreE = fila.find('td:eq(2)').text();
        sueldo = fila.find('td:eq(3)').text();
        diasT = fila.find('td:eq(4)').text();
        horasExtraD = fila.find('td:eq(5)').text();
        horasExtraN = fila.find('td:eq(6)').text();
        horasExtraDD = fila.find('td:eq(7)').text();
        horasExtraND = fila.find('td:eq(8)').text();
        recargoN = fila.find('td:eq(9)').text();

        $("#codNomina").val(id);
        $("#cedulaEmp").val(cedula);
        $("#nombreEmp").val(nombreE);
        $("#sueldoEmp").val(sueldo);
        $("#diasTrabajados").val(diasT);
        $("#horasExD").val(horasExtraD);
        $("#horasExN").val(horasExtraN);
        $("#horasExDD").val(horasExtraDD);
        $("#horasExND").val(horasExtraND);
        $("#horasRecN").val(recargoN);

        $("#alertaUser1").empty();
        $(".modal-header").css("background-color", "#56D85A");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Actualizar Empleados");
        $("#empleadosEditar").modal("show");

    });

    $("#btnEliminar").click(function() {
        $("#formEliminar").trigger("reset");
        $(".modal-header").css("background-color", "#56D85A");
        $(".modal-header").css("color", "white");
        $(".modal-title").text("Eliminar Empleados");
        $("#empleadosEliminar").modal("show");
    });
});