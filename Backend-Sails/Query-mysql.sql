-- CREACION DE LA BASE DE DATOS
create database proyectoJavascript;
use proyectoJavascript;

-- BORRA LA BASE DE DATOS
drop database proyectojavascript;

-- MUESTRA LAS TABLAS
show tables;

-- INSERTAMOS DATOS DE ACCESO
select*from acceso;
Insert into acceso(createdAt,updatedAt,id,NivelAcceso)values(1,1,1,'Admin');
Insert into acceso(createdAt,updatedAt,id,NivelAcceso)values(2,2,2,'General');

-- INSERTAMOS DATOS EN CASA

select*from casa;

Insert into casa(createdAt,updatedAt,id,TipoCasa,ownerAccesoCasa)values(1,1,1,'familiar',1);

-- INSERTAMOS DATOS USUARIOS
select*from usuario;
Insert into usuario(createdAt,updatedAt,id,nombre,apellido,correo,telefono,password,tipoUsuario,ownerCasa,ownerAccesoUsuario)
values(1,2,1,'Jaimito','Proaño','davidgonzalomejia@hotmail.com','2537684','david','Golden',1,1);

Insert into usuario(createdAt,updatedAt,id,nombre,apellido,correo,telefono,password,tipoUsuario,ownerCasa,ownerAccesoUsuario)
values(2,22,2,'Carolina','Proaño','carolina.calderon@epn.edu.ec','0969457892','carolina','Basico',1,2);

Insert into usuario(createdAt,updatedAt,id,nombre,apellido,correo,telefono,password,tipoUsuario,ownerCasa,ownerAccesoUsuario)
values(3,222,3,'Byron','Lopez','byron.lopez@epn.edu.ec','0964578964','byronL','General',1,1);

-- INSERTAMOS CONTROLADORES
select *from controlador;
Insert into controlador(createdAt,updatedAt,id,TipoControlador)values(1,1,1,'puerta');
Insert into controlador(createdAt,updatedAt,id,TipoControlador)values(2,2,2,'luz');
Insert into controlador(createdAt,updatedAt,id,TipoControlador)values(3,3,3,'alarma');
Insert into controlador(createdAt,updatedAt,id,TipoControlador)values(4,4,4,'Sensor magnetico');

-- INSERTAMOS LAS ACCIONES 
select *from accion;
Insert into accion(createdAt,updatedAt,id,Tipoaccion,ownerControlador)values(1,1,1,'activar',3);
Insert into accion(createdAt,updatedAt,id,Tipoaccion,ownerControlador)values(1,1,2,'desactivar',3);
Insert into accion(createdAt,updatedAt,id,Tipoaccion,ownerControlador)values(1,1,3,'encender',2);
Insert into accion(createdAt,updatedAt,id,Tipoaccion,ownerControlador)values(1,1,4,'apagar',2);
Insert into accion(createdAt,updatedAt,id,Tipoaccion,ownerControlador)values(1,1,5,'abrir',1);
Insert into accion(createdAt,updatedAt,id,Tipoaccion,ownerControlador)values(1,1,6,'Interrupcion',4);

 -- INSERTAR DATOS REGISTRO EVENTOS
 select *from registroevento;
 Insert into registroevento(createdAt,updatedAt,id,fecha,ownerA,ownerControlador)values(1,1,1,'12/12/12',1,3);


