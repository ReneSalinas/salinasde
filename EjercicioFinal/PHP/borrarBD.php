<?php
include("getRegistroBD.php");
$idE=$_POST['par1'];
$consultaSql = "delete 
                from cusuario where idEmpleado=".$idE;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();

?>