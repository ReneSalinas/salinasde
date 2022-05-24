<?php

$iduser=$_POST['par1'];
$hostname='localhost';
$database='L19100254'; // l19100254
$username='root';
$password='';
$port='3306';
try{
    $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
}catch(PDOException $e) {
    echo "Error en la conexion a la BD";
    echo $e->getMessage();
    exit();
}

try{
    $consultaSql = "select * from empleados where idEmpleado=".$iduser;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();
}catch(PDOException $e){
    echo "Error en la consulta a BD";
    echo $e->getMessage();
}

echo json_encode($resultado);


?>