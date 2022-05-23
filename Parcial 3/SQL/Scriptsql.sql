create database 19100254;
use 19100254;

DROP TABLE cusuario;



create table cusuario
( idEmpleado smallint,
    nombre varchar(30),
    plataforma varchar(30),
    presentacion varchar(30),
    costo varchar(10),
    cantidad varchar(32),
    clasificacion varchar(32),
    estado varchar(32),
    PRIMARY KEY(idEmpleado)
);

insert into cusuario (idEmpleado, nombre,plataforma,presentacion,
costo,cantidad,clasificacion,estado)
values ('25','GTAV','Playstation','Fisico','60','2','T','Nuevo');

insert into cusuario (idEmpleado, nombre,plataforma,presentacion,
costo,cantidad,clasificacion,estado)
values ('30','Minecraft','Xbox','Fisico','60','1','E','Nuevo');

insert into cusuario (idEmpleado, nombre,plataforma,presentacion,
costo,cantidad,clasificacion,estado)
values ('10','Overwatch','PC','Digital','40','3','A','Nuevo');

select *
from cusuario;