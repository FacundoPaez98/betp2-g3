const express = require('express');
const router = express.Router();
const dataUsuarios = require('../data/crud_usuarios');
const auth = require('../middleware/auth');

//BUSCADOR DE USUARIO POR NOMBRE
router.get('/:username', async function (req, res) {
  const usuario = await dataUsuarios.getUsuario(req.params.username);
  res.json(usuario);
});

//LOGIN
router.post('/login', async (req, res) => {
  try {
    const usuario = await dataUsuarios.buscarUsuario(req.body.email, req.body.password);
    const token = await dataUsuarios.generateJWT(usuario);
    res.json({ usuario, token });
  } catch (error) {
    res.status(401).send(error.message);
  }
});

//SIGNUP
router.post('/signup', async (req, res) => {
  try {
    let usuario = req.body;

    dataUsuarios.checkEmail(usuario.email);
    dataUsuarios.checkName(usuario.nombre);
    dataUsuarios.checkName(usuario.apellido);
    dataUsuarios.checkStringLength(usuario.username);
    dataUsuarios.checkStringLength(usuario.password);

    let emailEncontrado = await dataUsuarios.buscarEmail(req.body.email);     //busca si existe el mail
    let userNameEncontrado = await dataUsuarios.buscarUserName(req.body.username);

    if (!emailEncontrado && !userNameEncontrado) {    //si esta vacio, no encontro nada
      await dataUsuarios.addUsuario(usuario);
      const token = await dataUsuarios.generateJWT(usuario);
      res.json({ usuario, token });
    };

  } catch (error) {     //tira error de email/username existente
    res.send(error.message);
  }
});

//Consultar lo de la ID y getUsuario
router.put('/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let usuario = req.body;

    dataUsuarios.checkEmail(usuario.email);
    dataUsuarios.checkName(usuario.nombre);
    dataUsuarios.checkName(usuario.apellido);
    dataUsuarios.checkStringLength(usuario.username);
    dataUsuarios.checkStringLength(usuario.password);

    usuario._id = id;
    await dataUsuarios.updateUsuario(usuario);
    res.json(await dataUsuarios.getUsuarioId(id));

  } catch (error) {
    res.send(error.message);
  }
});

//DELETE
//solo el mismo usuario se puede dar de baja
router.delete('/:id', auth, async (req, res) => {
  let id = req.params.id;
  let usuario = await dataUsuarios.getUsuarioId(id);

  if (!usuario) {
    res.send("ID inexistente");
  }
  else {
    await dataUsuarios.deleteUsuario(id);
    res.send("Usuario eliminado");
  }
});

//Añade una pelicula al array de titulos del usuario
router.post('/add-pelicula/:idUsuario', async (req, res) => {
  let idUsuario = req.params.idUsuario;
  let pelicula = req.body;
  await dataUsuarios.addPelicula(idUsuario, pelicula);
  res.json(await dataUsuarios.getUsuarioId(idUsuario));
});

//Remueve una pelicula del array de titulos del usuario
router.put('/remove-pelicula/:idUsuario/:idPelicula', async (req, res) => {
  let idUsuario = req.params.idUsuario;
  let idPelicula = req.params.idPelicula;
  await dataUsuarios.removePelicula(idUsuario, idPelicula);
  res.json(await dataUsuarios.getUsuarioId(idUsuario));
});

//Agrega un usuario a la lista de seguidos del usuario logueado
router.post('/follow/:id', async (req, res) => {
  let id = req.params.id;
  let usuarioASeguir = req.body;
  try {
    await dataUsuarios.followUser(id, usuarioASeguir);
    res.json(await dataUsuarios.getUsuarioId(id));
  } catch (error) {
    res.send(error.message);
  }
});

//Remueve un usuario de la lista de seguidos del usuario logueado
router.put('/unfollow/:idUsuarioLogueado/:idUnfollowUser', async (req, res) => {
  let idUsuarioLogueado = req.params.idUsuarioLogueado;
  let idUnfollowUser = req.params.idUnfollowUser;
  await dataUsuarios.unfollowUser(idUsuarioLogueado, idUnfollowUser);
  res.json(await dataUsuarios.getUsuarioId(idUsuarioLogueado));
});

module.exports = router;