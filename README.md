# api-rest-crud-nodejs

Esta es una plantilla de un api rest crud con nodejs y express, no contiene nada de frontend pero contiene las peticiones al servidor simulado a una base de datos **Products** de aqui proviene las peticiones **HTTP**, la base es modificar esta pequeña información y tener un punto de arranque bien configurado para hacer **despliegue** de la aplicación y sea mas dinamico trabajar con el proyecto.


# Configuración

Cuando tengas clonado el repositorio solo debes de realizar 2 pasos para configurarlo.

## PASO 1: Instalar NODE.JS y NPM

Tener instalado estos 2 servicios es imprecindible para la ejecución y desarrollo de este api

## PASO 2: Instalar los Modulos de Node

Para ello ejecutaras el comando 

     npm install

## PASO 3: Configuración Base de Datos

El nombre de la base de datos queda a tu criterio, puedes ponerle la que desees, pero si quieres probar el funcionamiento de esta api, crea una tabla en tu base de datos que se llame **Products** esta es importante porque las peticiones estan simuladas para una tabla con este nombre *puedes modificarlo después a gusto, no te preocupes.*

## PASO 4: Configura variables de entorno

Con la ayuda de un paquete de **npm** que es ***dotenv*** podemos crear variables de entorno, esto es importante ya que le da mas seguridad a nuestro codigo, por lo cual en la raiz del proyecto, crea un archivo llamado **.env** y en el copiaras lo siguiente:

    PORT = 8080
    DB_USER = Usuario de SQL Server
    DB_PWD = Contraseña de SQL Server 
    DB_NAME = Nombre de la base de datos
    DB_SERVER = Servidor al que se hará la petición / recomendable poner **localhost**

Siguiendo estos pasos tendras configurado el proyecto, y podras hacer uso de este api rest para realizar CRUD, ya teniendo este "esqueleto" podras crear el frontend para una mejor comodidad del usuario final.


## Gracias por su atención!!
