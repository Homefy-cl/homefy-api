import Users from "../models/Users.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { isAuthenticated } from "../auth/index.js";

const signToken = (_id) => {
	// Retornará el token encriptado
	return jwt.sign({ _id }, "mi-secreto", {
		// Se configura el tiempo de expiración del token
		// 60 segundos * 60 minutos * 24 hrs * 365 días (Durará un año)
		expiresIn: 60 * 60 * 24 * 365,
	});
};

// Registro
export const register = (req, res) => {
	try {
		const { email, password } = req.body;

		crypto.randomBytes(16, (err, salt) => {
			const newSalt = salt.toString("base64");
			crypto.pbkdf2(password, newSalt, 1000, 64, "sha1", (err, key) => {
				const encryptedPwd = key.toString("base64");
				Users.findOne({ email })
					.exec()
					.then((user) => {
						if (user) {
							return res.send("usuario ya existe");
						}
						Users.create({
							email,
							password: encryptedPwd,
							salt: newSalt,
						}).then(() => {
							res.send("Usuario creado con éxito");
						});
					});
			});
		});
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Login
export const login = (req, res) => {
	try {
		const { email, password } = req.body;
		Users.findOne({ email })
			.exec()
			.then((user) => {
				if (!user) {
					return res.send("Usuario y/o contraseña incorrecta");
				}
				crypto.pbkdf2(password, user.salt, 1000, 64, "sha1", (err, key) => {
					const encryptedPwd = key.toString("base64");
					if (user.password === encryptedPwd) {
						const token = signToken(user._id);
						return res.send({ token });
					}

					return res.send("usuario y/o contraseña incorrecta");
				});
			});
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

export const profileInfo = (req, res) => {
	try {
		res.send(req.user);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};
