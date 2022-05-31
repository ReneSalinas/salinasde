<?php
include("getRegistroBD.php");

$idE=$_POST['par1'];
$NombreProducto=$_POST['par2'];
$idP=$_POST['par3'];
$idPresentacion=$_POST['par4'];
$costo=$_POST['par5'];
$cantidad=$_POST['par6'];
$idC=$_POST['par7'];
$idEstado=$_POST['par8'];

try {
$consultaSql= 
"insert into cusuario(idEmpleado,
                      nombre, 
                      plataforma, 
                      presentacion, 
                      costo, 
                      cantidad, 
                      clasificacion, 
                      estado) 
values('$idE','$NombreProducto', '$idP', '$idPresentacion', '$costo', '$cantidad', '$idC','$idEstado')";
$consulta = $con -> prepare($consultaSql);
$consulta -> execute();
$consulta->closeCursor();

} catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}
?>
