db = db.getSiblingDB('test');
const bcrypt = require('bcryptjs');
db.usuarios.remove( {} );
db.usuarios.insertMany([
    {
        "nombre": "Pepe",
        "apellido": "Mujica",
        "email": "pepe@altavista.com",
        "username": "user1",
        "password": bcrypt.hashSync('password1', 8),
        "titulos": [],
        "seguidores": [],
        "seguidos": []
    },
    {
        "nombre": "Norberto",
        "apellido": "Napolitano",
        "email": "pappo@blues.com",
        "username": "user2",
        "password": bcrypt.hashSync('password1', 8),
        "titulos": [],
        "seguidores": [],
        "seguidos": []
    },
    {
        "nombre": "Rick",
        "apellido": "Sanchez",
        "email": "wabalaba@dubdub.com",
        "username": "user3",
        "password": bcrypt.hashSync('password1', 8),
        "titulos": [],
        "seguidores": [],
        "seguidos": []
    },
    {
        "nombre": "Pickle",
        "apellido": "Rick",
        "email": "pickle@altavista.com",
        "username": "user4",
        "password": bcrypt.hashSync('password1', 8),
        "titulos": [],
        "seguidores": [],
        "seguidos": []
    },
    {
        "nombre": "Walter",
        "apellido": "White",
        "email": "blue@magic.com",
        "username": "user5",
        "password": bcrypt.hashSync('password1', 8),
        "titulos": [],
        "seguidores": [],
        "seguidos": []
    },
    {
        "nombre": "Manu",
        "apellido": "Ginobilli",
        "email": "manu@spurs.com",
        "username": "user6",
        "password": bcrypt.hashSync('password1', 8),
        "titulos": [],
        "seguidores": [],
        "seguidos": []
    },
    {
        "nombre": "Juan",
        "apellido": "Topo",
        "email": "topo@gmail.com",
        "username": "user7",
        "password": bcrypt.hashSync('password1', 8),
        "titulos": [],
        "seguidores": [],
        "seguidos": []
    },
    {
        "nombre": "Ron",
        "apellido": "Swanson",
        "email": "rons@pawnee.gov",
        "username": "user8",
        "password": bcrypt.hashSync('password1', 8),
        "titulos": [],
        "seguidores": [],
        "seguidos": []
    },
    {
        "nombre": "Groucho",
        "apellido": "Marx",
        "email": "grouchom@spurs.com",
        "username": "user9",
        "password": bcrypt.hashSync('password1', 8),
        "titulos": [],
        "seguidores": [],
        "seguidos": []
    }
]);
