    $(document).ready(function() {

      $('#btnjson').click(function() {
          $.post('getregistro.php',{},function(data){

                console.log(data);
                $('#idCliente').val(data.idCliente);
                $('#nomCliente').val(data.nomCliente);
                $('#hora').val(data.hora);
                $('#dirCliente').val(data.dirCliente);
                $('#telCliente').val(data.telCliente);
                $('#ciudad').val(data.ciudad);
                $('#estado').val(data.estado);
                $('#pais').val(data.pais);

            },'json');
      });
});