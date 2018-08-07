create database proyectoJavascript;
use proyectoJavascript;
drop database proyectojavascript;


Insert into usuario(createdAt,updatedAt,id,nombre,apellido,correo,telefono,password,tipoUsuario)
values(1,2,1,'Jaimito','Proaño','davidgonzalomejia@hotmail.com','2537684','david','Administrador');

Insert into usuario(createdAt,updatedAt,id,nombre,apellido,correo,telefono,password,tipoUsuario)
values(2,22,2,'Carolina','Proaño','carolina.calderon@epn.edu.ec','0969457892','carolina','General');

Insert into usuario(createdAt,updatedAt,id,nombre,apellido,correo,telefono,password,tipoUsuario)
values(3,222,3,'Byron','Lopez','byron.lopez@epn.edu.ec','0964578964','byronL','General');

select *from control;
select*from usuario;