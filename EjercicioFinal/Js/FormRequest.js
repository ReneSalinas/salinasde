$(document).ready(function() {

    document.getElementById("btnConsultaBD").addEventListener("click",function(){
         let parid=prompt("Teclee el ID a consultar");
         $.post('../PHP/getRegistroBD.php',{par1:parid},function(data){

           refrescar(data);

           },'json');



     });

    function refrescar(objeto) {

        console.log(objeto);

        $('#idE').val(objeto.idEmpleado);
        $('#NombreProducto').val(objeto.nombre);
        $('#idP').val(objeto.plataforma);
        $('#idPresentacion').val(objeto.presentacion);
        $('#costo').val(objeto.costo);
        $('#cantidad').val(objeto.cantidad);
        $('#idC').val(objeto.clasificacion);
        $('#idEstado').val(objeto.estado);

  }

});