create database proyectoJavascript;
use proyectoJavascript;
drop database proyectojavascript;

show tables;
Insert into usuario(createdAt,updatedAt,id,nombre,apellido,correo,telefono,password,tipoUsuario)
values(1,2,1,'Jaimito','Proaño','davidgonzalomejia@hotmail.com','2537684','david','Administrador');

Insert into usuario(createdAt,updatedAt,id,nombre,apellido,correo,telefono,password,tipoUsuario)
values(2,22,2,'Carolina','Proaño','carolina.calderon@epn.edu.ec','0969457892','carolina','General');

Insert into usuario(createdAt,updatedAt,id,nombre,apellido,correo,telefono,password,tipoUsuario)
values(3,222,3,'Byron','Lopez','byron.lopez@epn.edu.ec','0964578964','byronL','General');

Insert into controlador(createdAt,updatedAt,id,TipoControlador)values(1,1,1,'puerta');
Insert into controlador(createdAt,updatedAt,id,TipoControlador)values(2,2,2,'luz');
Insert into controlador(createdAt,updatedAt,id,TipoControlador)values(3,3,3,'alarma');
Insert into controlador(createdAt,updatedAt,id,TipoControlador)values(4,4,4,'Sensor magnetico');

select *from control;
select*from usuario;
select*from controlador;