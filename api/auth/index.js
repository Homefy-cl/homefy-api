import jwt from "jsonwebtoken";
import Users from "../models/Users.js";

export const isAuthenticated = (req, res, next) => {
	// Se saca el token dentro de la petición del usuario
	const token = req.headers.authorization;

	// Si el token no existe se envía el código 403 - Forbidden
	if (!token) {
		return res.sendStatus(403);
	}

	// Se verifica el token 
	jwt.verify(token, "mi-secreto", (err, decoded) => {
		// Si este es verificado, este es decodificado y por medio de 
		// destructuring se saca el _id
		const { _id } = decoded;

		// Se encuentra un usuario por id y se ejecuta una consulta
		Users.findOne({ _id })
			.exec()
			.then((user) => {     // Se encuentra el usuario
				req.user = user;    // Se modifica el objeto req.user con el usuario encontrado 
				next();
			});
	});
};


// Explicacion: Cuando se haya encontrado el usuario, el objeto de request se modifica
// con el usuario encontrado lo que hará que este esté disponible para el middleware 
// que continua permitiéndonos usar esta función de forma de verificar si el usuario
// esta autenticado y de está manera proteger nuestras rutas.

export const hasRoles = roles => (req, res, next) => {
	if (roles.indexOf(req.users.role) > -1) {
		// Si en el arreglo de roles el indexOf lo encuentra retornará next
		// De esta manera habilitará que se use la función
		return next()
	}
	
	// En caso contrario, indexOf al no encontrar lo buscado retornará -1 y con ello
	// se enviará un codigo 403 - forbidden
	res.sendStatus(403)
}
