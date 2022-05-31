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

$consultaSql= 
"update cusuario set 
                      nombre='$NombreProducto', 
                      plataforma='$idP', 
                      presentacion='$idPresentacion', 
                      costo='$costo', 
                      cantidad='$cantidad', 
                      clasificacion='$idC', 
                      estado='$idEstado'
                      where idEmpleado=$idE";
$consulta = $con -> prepare($consultaSql);
$consulta -> execute();
$consulta->closeCursor();

?>