$(document).ready(function() {

    document.getElementById("btnConsultaBD").addEventListener("click",function(){
      //se habilitan
      $('#btnEliminar').removeAttr("disabled");
      $('#btnEditar').removeAttr("disabled");
      $('#btnLimpiar').removeAttr("disabled");
      //se cierra
      $("#btnNuevo").attr("disabled", "disabled");

      Swal.fire(
        {
          title: "INGRESE SU ID",
          input: "text",
          showCancelButton: true,
          confirmButtonText: "CONSULTAR",
          cancelButtonText: "CANCELAR",
        }).then(resultado => {
        
        let nombre = resultado.value;
        let parid = nombre;
        
        //  let parid=prompt("Teclee el ID a consultar");
         $.post('../PHP/getRegistroBD.php',{par1:parid},function(data){
           refrescar(data);
           },'json');

         
    });

     });

     document.getElementById("btnLimpiar").addEventListener("click",function(){
      completado();
      //se reinicia los botones
      reiniciar();
      Swal.fire("SE LIMPIO CORRECTAMENTE");
     });

     document.getElementById("btnNuevo").addEventListener("click",function(){
      
      //habilito los campos
      $('#idE').removeAttr("disabled");
      $('#NombreProducto').removeAttr("disabled");
      $('#idP').removeAttr("disabled");
      $('#idPresentacion').removeAttr("disabled");
      $('#costo').removeAttr("disabled");
      $('#cantidad').removeAttr("disabled");
      $('#idC').removeAttr("disabled");
      $('#idEstado').removeAttr("disabled");

      //desabilitar botones
      $('#btnConsultaBD').attr("disabled" , "disabled");
      $('#btnEditar').attr("disabled" , "disabled");
      $('#btnEliminar').attr("disabled" , "disabled");

      //habilitar botones
      $('#btnLimpiar').removeAttr("disabled");
      $('#btnAgregar').removeAttr("disabled");

      Swal.fire("FORMATO LISTO");

     });

     document.getElementById("btnAgregar").addEventListener("click",function(){
      
      let idEmpleado = document.getElementById("idE").value;
      var nombre = document.getElementById("NombreProducto").value;
      var plataforma = document.getElementById("idP").value;
      var presentacion = document.getElementById("idPresentacion").value;
      var costo = document.getElementById("costo").value;
      var cantidad = document.getElementById("cantidad").value;
      var clasificacion = document.getElementById("idC").value;
      var estado = document.getElementById("idEstado").value;
      
      $.post('../PHP/agregaBD.php',{par1:idEmpleado,par2:nombre,par3:plataforma,par4:presentacion,par5:costo,par6:cantidad,par7:clasificacion,par8:estado},
      function(data){
        },'json');
        
      completado();
      Swal.fire("SE AGREGO CORRECTAMENTE");
     });

     document.getElementById("btnEliminar").addEventListener("click",function(){
      let idEmpleado = document.getElementById("idE").value;
      $.post('../PHP/borrarBD.php',{par1:idEmpleado},function(data){
        completado();
    },'json');
    Swal.fire("SE ELIMINO CORRECTAMENTE");
     });

     document.getElementById("btnEditar").addEventListener("click",function(){
      
        Swal.fire("LISTO PARA EDITAR");
      
     
      $('#NombreProducto').removeAttr("disabled");
      $('#idP').removeAttr("disabled");
      $('#idPresentacion').removeAttr("disabled");
      $('#costo').removeAttr("disabled");
      $('#cantidad').removeAttr("disabled");
      $('#idC').removeAttr("disabled");
      $('#idEstado').removeAttr("disabled");

      let idEmpleado = document.getElementById("idE").value;
      let nombre = document.getElementById("NombreProducto").value;
      let plataforma = document.getElementById("idP").value;
      let presentacion = document.getElementById("idPresentacion").value;
      let costo = document.getElementById("costo").value;
      let cantidad = document.getElementById("cantidad").value;
      let clasificacion = document.getElementById("idC").value;
      let estado = document.getElementById("idEstado").value;

      $.post('../PHP/editarBD.php',{par1:idEmpleado,par2:nombre,par3:plataforma,par4:presentacion,par5:costo,par6:cantidad,par7:clasificacion,par8:estado},
      function(data){  
      },'json');

      
      
      
     });

    function refrescar(objeto) 
    {

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
    function reiniciar()
    {
    $("#idE").attr("disabled", "disabled");
    $('#NombreProducto').attr("disabled", "disabled");
    $('#idP').attr("disabled", "disabled");
    $('#idPresentacion').attr("disabled", "disabled");
    $('#costo').attr("disabled", "disabled");
    $('#cantidad').attr("disabled", "disabled");
    $('#idC').attr("disabled", "disabled");
    $('#idEstado').attr("disabled", "disabled");

    //BOTONES
    $("#btnAgregar").attr("disabled", "disabled");
    $("#btnEliminar").attr("disabled", "disabled");
    $("#btnEditar").attr("disabled", "disabled");
    $("#btnLimpiar").attr("disabled", "disabled");

    //BOTONES HABILITADOS
    $("#btnNuevo").removeAttr("disabled");
    $("#btnConsultaBD").removeAttr("disabled");
    
    }
    function completado(){
      $('#idE').val("");
      $('#NombreProducto').val("");
      $('#idP').val("");
      $('#idPresentacion').val("");
      $('#costo').val("");
      $('#cantidad').val("");
      $('#idC').val("");
      $('#idEstado').val("");
    }


  //campos  
  $("#idE").attr("disabled", "disabled");
  $('#NombreProducto').attr("disabled", "disabled");
  $('#idP').attr("disabled", "disabled");
  $('#idPresentacion').attr("disabled", "disabled");
  $('#costo').attr("disabled", "disabled");
  $('#cantidad').attr("disabled", "disabled");
  $('#idC').attr("disabled", "disabled");
  $('#idEstado').attr("disabled", "disabled");

  //BOTONES
  $("#btnAgregar").attr("disabled", "disabled");
  $("#btnEliminar").attr("disabled", "disabled");
  $("#btnEditar").attr("disabled", "disabled");
  $("#btnLimpiar").attr("disabled", "disabled");

  
  
});