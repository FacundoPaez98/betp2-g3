#Descripcion

Una aplicacion para armar listado de las peliculas y series que queres ver o ya viste y te permite dejarle una puntuacion y reseña. Podes seguir otro usuario si te gustan las reseñas
que deja dicho usuario.

#Funcionalidades

    El usuario puede:

        Registrarse
        Buscar peliculas y series
        Agregarlas a su listado
        Ponerles un estado (Completada, Pendiente, Abandonada, En Curso)
        Dejar una puntuacion
        Dejar una reseña
        Buscar Usuarios
        Seguir Usuarios

#Actores/Roles

- Usuario
- Moderador (?)

#Entidades principales

- Usuarios
- Reviews

#Instrucciones técnicas para la instalación de un entorno de desarrollo

1. Hacer un Fork al repositorio de GitHub: https://github.com/carrauKrizaj/betp2-g3
2. Clonar el repositorio localmente: no clonar el repo original, sino el que se generó luego del fork en tu propio repo.
3. Instalar las dependencias; para eso, desde la consola de comando pararse sobre el directorio del repo y ejecutar el comando "npm install".
4. Agregar las variables de entorno (solicitarlas).
5. Para ejecutar el programa, desde la consola de comando pararse sobre el directorio del repo y ejecutar el comando "npm run devstart".

#Endpoints de la API

- GET: '/' (http:/localhost:3000); Home.

- GET: '/usuario/:username' (http:/localhost:3000/':username'); Buscador usuarios. 
- POST: '/usuario/login' (http:/localhost:3000/login); Login.
- POST: '/usuario/signup' (http:/localhost:3000/signup); Registrarse.
- GET: '/api/reviews' (http:/localhost:3000/reviews); Reseñas.
- GET: '/api/reviews/:id' (http:/localhost:3000/reviews/':id'); Buscador reseña.
- POST: '/api/reviews' (http:/localhost:3000/reviews/); Agregar reseña.
- GET: '/api/reviews/user-reviews/:id' (http:/localhost:3000/reviews/user-reviews/':id'); Busca reseñas por usuario.
- GET: '/api/reviews/title-reviews/:id' (http:/localhost:3000/reviews/title-reviews/':id'); Busca reseñas por titulo.
- PUT: '/api/reviews/:id' (http:/localhost:3000/reviews/':id'); Modificar reseña.
- DELETE: '/api/reviews/:id' (http:/localhost:3000/reviews/':id'); Borrar reseña.
- PUT: 'api/usuario/:id' (http://localhost:3000/usuarios/':id'); Actualizar usuario.
- DELETE: 'api/usuario/:id' (http://localhost:3000/usuarios/':id'); Borrar usuario.