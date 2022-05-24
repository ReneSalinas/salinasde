$(document).ready(function() {


    // Cargando el Header del servidor mediante AJAX
    $('#btnCambiaHeaderAjax').click(function() {
          var solicitud = new XMLHttpRequest();
          solicitud.onreadystatechange = function() {
          if (solicitud.readyState == 4 && solicitud.status == 200) {
                document.getElementById("enca").innerHTML = solicitud.responseText;
          }};
          solicitud.open("GET","getHeader.txt", true);
          solicitud.send();
    });

    // Cargando Header der Servidor mediante Ajax
    // pero usando una promesa para hacer la peticion y procesar la respuesta
    $('#btnCambiaHeaderAjaxP').click(function() {

          // 1) Instanciamos el objeto promesa que recibe una funcion don dos callbacks
          // uno para resolver la promesa y otro para rechazarla
          let promesa = new Promise(function(resolve,reject) { 
                var solicitud = new XMLHttpRequest();
                solicitud.onreadystatechange = function() {
                if (solicitud.readyState == 4 && solicitud.status == 200) {
                      resolve(solicitud.responseText);
                }};
                solicitud.open("GET","getHeader.txt", true);
                solicitud.send();
          });

          // 2) Consumimos la promesa 
          // El objeto promesa tiene un metodo the()
          // Dentro del metodo then() ponemos la función que va procesar la respuesta
          // El parametro que recibe esta fucnión es la respueesta de la promesa
          //
          // promesa.then(function(value) {document.getElementById("enca").innerHTML = value;});
          // promesa.then( (value) => {document.getElementById("enca").innerHTML = value });
          promesa.then( value => document.getElementById("enca").innerHTML = value );


          // Abreviando lo anterior
          // Podemos instanciar y usar el método then para procesar la respuesta
          //
          //new Promise(function(resolve,reject) {
          //      var solicitud = new XMLHttpRequest();
          //      solicitud.onreadystatechange = function() {
          //      if (solicitud.readyState == 4 && solicitud.status == 200) {
          //            resolve(solicitud.responseText);
          //      }};
          //      solicitud.open("GET","getHeader.txt", true);
          //      solicitud.send();
          //}).then( value => document.getElementById("enca").innerHTML = value );
    });


    // Boton para devolver el header a su estado original
    $('#btnIniciaHeader').click(function() {
          document.getElementById("enca").innerHTML = "Formulario Bootstrap";
    });


    // // Obtenemos hora del servidor mediante AJAX
    $('#btnObtieneHoraAjax').click(function() {
          var solicitud = new XMLHttpRequest();
          solicitud.onload = function() {
                document.getElementById("hora").value=solicitud.responseText;
          }
          solicitud.open("GET","getHora.php",true);
          solicitud.send();
    });

    // En lugar de usar el objeto XMLHttpRequest()
    // podemos usar el metodo load() de JQuery que es una abstraccion
    // $('#btnObtieneHoraJQuery').click(function() {
    //       $("#hora").load("getHora.txt");
    // });


    // Obtenemos un registro json del servidor
    // usando el metodo $.post() de Jquery
    // $.post(URL,parametros,funciondeRetorno(),dato)
    $('#btnObtieneJsonJQuery').click(function() {
        $.post('getRegistro.php',function(data){
          refrescar(data);
          },'json');
    });

    // Obtenemos un registro json del la Base de datos
    // usando el metodo $.post() de Jquery
    // $.post(URL,parametros,funciondeRetorno(),dato)
    $('#btnConsultaBD').click(function() {
          let parid=prompt("Teclee el ID a consultar");

          $.post('getRegistroDB.php',{par1:parid},function(data){
            refrescar(data);
            },'json');
      });


    $('#btnObtieneJsonFetch').click(function() {
    // let promesa = fetch('getRegistro.php');
    // promesa.then(respuesta => respuesta.json())
    //        .then(function(dato) { refrescar(dato); });
    fetch('getRegistro.php',options)
          .then(respuesta => respuesta.json())
              .then(function(dato) { refrescar(dato) });

    });

    function refrescar(objeto) {
          console.log(objeto);
          
          $('#idE').val(data.idE);
            $('#NombreProducto').val(data.NombreProducto);
            $('#idP').val(data.idP);
            $('#idPresentacion').val(data.idPresentacion);
            $('#costo').val(data.costo);
            $('#cantidad').val(data.cantidad);
            $('#idC').val(data.idC);
            $('#idEstado').val(data.idEstado);
    }

});