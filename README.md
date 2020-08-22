#Chat Web TuChat

##Funcionalidades Generales
El portal Web TuChat cuenta con las siguientes funcionalidades.
___

###Inicio Login

El inicio de sesión está en la pagina principal Index.html, al cual serás redireccionado si no tienes una sesion iniciada en el sistema a traves de un metodo de JavaScript que se mantiene auditando las sesiones de los usuarios.

El inicio de sesion cuenta con un formulario basico que te permite desde él:

Ir a la ventana de registro de usuarios al portal.
*Loguear o iniciar una sesión.
*Recuperar contrasena de tu usuario.

El formulario de inicio de sesión, cuenta con las validaciones necesarias para evitar que el usuario intente acceder introduciendo algun email invalido asi como tratar de entrar con los datos nulos.

Puedes iniciar sesión una ves realizado el proceso de registro a traves del formulario de registro de sesión mediante el correo y contrasena definidos. Al hacerlo, seras redirigido automaticamente a la ventana principal, donde estarán las informaciones de perfil de los usuarios asi como tambien la ventana por la cual podra chatear.

###Registro de usuarios

La ventana de registro de usuarios contiene un formulario basico para registrarse en el portal.

Este consta con las validaciones necesarias tales como.
*Validacion de correo.
*Minimo de contrasena segura.
*Repetir contrasena para asegurar al usuario.
*Campos requeridos necesarios.

Una ves registrado y habiendo pasado todas las validaciones, el sistema te redirigira a tu pagina de perfil para que empieces a utilizar el portal web.

###Chat

En la ventana de chat, el usuario sera capaz de:
 
*Poder subir, cambiar y borrar su foto de perfil.
Esta foto tan pronto sea subida, se podra visualizar sin tener que recargar la pagina.

Cuando un usuario no tenga una foto de perfil definida, como se da el caso cuando este es un registro totalmente nuevo, el sistema carga por defecto una foto con un icono de usuario en blanco, representando que aun no tiene foto de perfil.

Por igual cuando el usuario elimina la foto de perfil, esta cambiara a la foto por defecto guardada en el sistema.

las fotos se guardan en FireBase Storage con el nombre del correo del usuario como su token identificador, para asi poder cargarlas mientras el usuario mantenga una sesión activa. Asi mismo la foto por defecto se guarda con el nombre **default-user.jpg**

Cuando el usuario necesite cerrar su sesión, encontrara el boton **cerrar sesión** ubicado en la parte superior derecha de su pantalla.

Al cerrar la sesión, sera automáticamente redirigido a la pantalla de inicio o index del portal web. 

##Herramientas Utilizadas

Entre las herramientas utilizadas se puede mensionar.

**Javascript** Vanilla

**Bootstrap**

**HTML5** 

**CSS**

**JQUERY** 

**Firebase** (Como motor de base de datos) con algunas de sus funcionalidades basicas como:

Firebase app

Firebase Store

Firebase firestore

Firebase database

Firebase Autenthication

**Github**

**MarkdownPad2** el cual me permitio realizar el Readme.MD

**Visual Studio Code** como editor de codigo con su gran liveServer

##Pasos para hacer setup del proyecto

Para hacer setup del proyecto basta con descargarse el repositorio completo e iniciar el archivo index.html en el navegador de su preferencia.

Links del repositorio.

https://github.com/masterwelin/ProyectoFinalTuChat.git
https://github.com/masterwelin/ProyectoFinalTuChat/tree/master

Todo lo que se necesitará es un navegador web e internet, ya que la base de datos con la que estará interactuando el proyecto es FireBase que esta totalmente en la nube y lo demas como las hojas de estilo estan en el repositorio.