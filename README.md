# favoryGift
>Proyecto web diseañada para la busque de Gifs de interes diverso apartir de la utilizacion de dos apis apis diferentes:
 * **#1** Rest Api: creada con Node.js y express
 * **#2** Gifty GIFs:para la busqueda de gifs
 >Desde la app prodras registrarte a partir de cierto requirimientos minimos para validar identificacion en el cual, todos los datos son almacenados en una base de datos no SQL (MongoDB) para poder loggearte mas tarde pudiendo tener almacenados todos tus likes en un apartado de la app. 
 
 ## Información importante
 debemos tener una cuenta en mongodb con un link de conexion desde nuestro backend a nuestra DB 
 
 Para iniciar el proyecto una vez descargado deberas ejecutar el comando en tu terminal de :
  * **#1**  #npm init || npm i
  *  **#1.1** Crear un archivo .env dentro del proyecto con las siguiente variables:
  *  **#1.2** PORT= 3030
  *  **#1.3** MONGO_DB_URI= ${ url de conexion de nuestra cuenta de mongoDB}
  *  **#1.4** SING = ${ palabra secreta para poder firmar o codificar a partir de jwt}
  * **#2**  #npm run serv
  * **#3**  #npm run start 
  importante que desde dos terminales iniciemos el paso 2 y 3 para levantar tanto el Front-end de nuestra aplicacion y el Back-end
  
 
  
  
