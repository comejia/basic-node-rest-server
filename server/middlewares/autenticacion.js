const jwt = require('jsonwebtoken')


let verificaToken = (req, res, next) => {
    let token = req.get('token')
    console.log(token);
    console.log(process.env.SECURITY);

    jwt.verify(token, process.env.SECURITY, (err, decoded) => {
        if(err) {
            return res.status(401).json( {
                ok: false,
                err: {
                    message: 'Token no valido'
                }
            })
        }

        req.usuario = decoded.usuario
        next();
    })
}

// Verifica role del administrador
let verificaAdminRole = (req, res, next) => {
    let usuario = req.usuario

    if(usuario.role === 'ADMIN_ROLE') {
        next()
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        })
    }

}

module.exports = {
    verificaToken,
    verificaAdminRole
}
