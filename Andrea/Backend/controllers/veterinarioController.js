const Veterinario = require('../models/Veterinario');
const generarJWT = require('../helpers/generarJWT');
const generarId = require('../helpers/generarId');

const registrar = async (req, res) => {

    const { email, password } = req.body; 

    // Usuarios ya registrados
    const existeUsuario = await Veterinario.findOne({email});
    if(existeUsuario){
        const error = new Error('Usuario ya registrado');
        return res.status(400).json({msg: error.message})
    }
    try {
        // Guardar nuevo Veterinario
        const veterinario = new Veterinario(req.body);
        const veterinarioGuardado = await veterinario.save();

        res.json(veterinarioGuardado)

    } catch (error) {
        console.log(error)
    }

};

const perfil = (req, res) => {

    const { veterinario } = req;    
    res.json({ perfil: veterinario })
};

const confirmar = async (req, res) => {
    const token = req.params.token;

    const usuarioConfirmar = await Veterinario.findOne({token});
    console.log(usuarioConfirmar);
    if(!usuarioConfirmar){
        const error = new Error('Token no Válido');
        return res.status(404).json({msg:error.message});
    }

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();


    } catch (error) {
        console.log(error);
    }

    res.json({msg: "Confirmando cuenta"});
};

const autenticar = async (req, res) => {

    const { email, password } = req.body;

    // Comprobar si existe usuario
    const usuario = await Veterinario.findOne({email});

    if(!usuario) {
        const error = new Error("El usuario no existe");
        return res.status(404).json({ msg: error.message });

    } 

    // Comprobar si el usuario está confirmado
    if(!usuario.confirmado){
        const error = new Error('Tu cuenta no ha sido confirmada');
        return res.status(403).json({ msg: error.message });
    }

    // Revisar password
    if ( await usuario.comprobarPassword(password) ){
        res.json({ token: generarJWT(usuario.id) });
    } else {
        const error = new Error("El password es incorrecto");
        return res.status(403).json({ msg: error.message });
    }


};

const olvidePassword = async(req, res) => {

    const { email } = req.body;

    const existeVeterinario = await Veterinario.findOne({email});

    if(!existeVeterinario) {
        const error = new Error('El usuario no existe');
        return res.status(400).json({msg: error.message})
    }

    try {
        existeVeterinario.token = generarId();
        await existeVeterinario.save();
        res.json({ msg: "Hemos enviado un email con las instrucciones" });
    } catch (error) {
        console.log(error);
    }

};
const comprobarToken = async (req, res) => {

    const { token } = req.params;

    const tokenValido = await Veterinario.findOne({ token });

    if(tokenValido){
        // El usuario existe
        res.json({ msg: "Token válido y el usuario existe" });
    } else {
        const error = new Error('Token no válido');
        return res.status(400).json({msg: error.message });
    }

};
const nuevoPassword = async(req, res) => {

    const { token } = req.params;
    const { password } = req.body;

    const veterinario = await Veterinario.findOne({ token });

    if(!veterinario){
        const error = new Error ('Hubo un error... ');
        return res.status(400).json({ msg: error.message });
    }

    try {
        
        veterinario.token = null;
        veterinario.password = password;
        await veterinario.save();

        res.json({ msg: "Password modificada correctamente" });
    } catch (error) {
        console.log(error);
    }

};

module.exports = { 
    registrar,
    perfil,
    confirmar,
    autenticar ,
    olvidePassword,
    comprobarToken,
    nuevoPassword
};