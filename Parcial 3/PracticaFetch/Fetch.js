$('#btnFetch').ready(function() {

    //*$('#btnjson').click(function() {
        //$.post('getRegistro.php',{},function(data){

          //    console.log(data);
           //   $('#idE').val(data.idE);
           //   $('#NombreProducto').val(data.NombreProducto);
          //    $('#idP').val(data.idP);
          //    $('#idPresentacion').val(data.idPresentacion);
          //    $('#costo').val(data.costo);
          //    $('#cantidad').val(data.cantidad);
          //    $('#idC').val(data.idC);
          //    $('#idEstado').val(data.idEstado);

          //},'json');
        //});

        document.getElementById("btnFetch").addEventListener("click",function(){

            let promesa = fetch('getRegistro.php');

            //promesa.then( (respuesta) => respuesta.json())
            //       .then( datos => console.log(datos)  );

            promesa.then( (respuesta) => respuesta.json())
                   .then( data => {
                    $('#idE').val(data.idE);
                       $('#NombreProducto').val(data.NombreProducto);
                       $('#idP').val(data.idP);
                       $('#idPresentacion').val(data.idPresentacion);
                       $('#costo').val(data.costo);
                       $('#cantidad').val(data.cantidad);
                      $('#idC').val(data.idC);
                      $('#idEstado').val(data.idEstado);
                   } );

            //fetch('getRegistro.php')
            //    .then(respuesta => respuesta.json())
            //        .then(datos => console.log(datos) );
        })
});