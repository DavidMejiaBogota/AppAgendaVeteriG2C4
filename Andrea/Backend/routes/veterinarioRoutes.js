const express = require('express');
const router = express.Router();

const { 
    registrar, 
    perfil, 
    confirmar, 
    autenticar, 
    olvidePassword,
    comprobarToken,
    nuevoPassword
} = require ('../controllers/veterinarioController');
const checkAuth = require('../middleware/authMiddleware');

// Área pública
router.post('/', registrar);
router.post('/login', autenticar);
router.get('/confirmar/:token', confirmar);
router.post('/olvide-password', olvidePassword);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);

// Área privada
router.get('/perfil', checkAuth, perfil);


module.exports = router;