# Postman

Para probar la API ingresá en el siguiente link, hace click en "MovieList" y hace un fork del workspace. La primer request puede demorar unos 30 segundos.

https://www.postman.com/fpaez98/workspace/mymovielist

![Postman](https://user-images.githubusercontent.com/52828805/203870352-b6daee79-2b79-42b4-a46d-63eb6ac80452.png)

# Descripción

Una aplicación para armar listado de las peliculas que queres ver o ya viste y te permite dejarle una puntuacion y reseña. Podes seguir a otro usuario si te gustan las reseñas
que deja dicho usuario.

La API está hecha con Node.js (Express), la base de datos con MongoDB y actualmente está hosteada en https://render.com/

# Funcionalidades

    El usuario puede:

        Registrarse
        Buscar peliculas
        Agregarlas a su listado
        Dejar una puntuacion
        Dejar una reseña
        Buscar Usuarios
        Seguir Usuarios

# Actores/Roles

- Usuario

# Entidades principales

- Usuarios
- Reviews

# Endpoints de la API

- GET: '/api/peliculas/:movieName'; Devuelve una lista de peliculas con similitud al nombre enviado en la request.
- GET: '/usuario/:username'; Devuelve un json de usuarios con similitud al nombre enviado en la request.
- POST: '/usuario/login'; Login.
- POST: '/usuario/signup'; Registrarse.
- PUT: '/usuario/:id'; Actualizar usuario.
- DELETE: '/usuario/:id'; Borra al usuario. Se requiere un token que se obtiene al registrar un usuario o iniciar sesion. 
- POST: '/usuario/add-pelicula/:idUsuario'; Agregar pelicula a la lista de titulos del usuario.
- PUT: '/usuario/remove-pelicula/:idUsuario/:idPelicula'; Remueve pelicula de la lista de titulos del usuario.
- POST: '/usuario/follow/:id'; Agrega un usuario a la lista de seguidos del usuario.
- PUT: '/usuario/unfollow/:idUsuarioLogueado/:idUnfollowUser'; Remueve un usuario de la lista de seguidos del usuario logueado.
- GET: '/api/reviews'; Devuelve todas las reseñas.
- GET: '/api/reviews/:id'; Buscador de reseñas por id.
- POST: '/api/reviews'; Agregar reseña.
- GET: '/api/reviews/user-reviews/:id'; Busca reseñas por id de usuario.
- GET: '/api/reviews/title-reviews/:id'; Busca reseñas por id de titulo.
- PUT: '/api/reviews/:id'; Modificar reseña.
- DELETE: '/api/reviews/:id'; Borrar reseña.
