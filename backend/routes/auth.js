import express from "express";
import bcrypt from "bcrypt";
import pool from "../db.js";

const router = express.Router();

// ------------------------------------------
// REGISTRO DE USUARIO
// ------------------------------------------
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ error: "Faltan datos" });

    // Verificar si el usuario existe
    const [rows] = await pool.query(
      "SELECT * FROM usuarios WHERE username = ?",
      [username]
    );

    if (rows.length > 0) {
      return res.status(409).json({ error: "El nombre de usuario ya existe" });
    }

    // Encriptar contraseña
    const password_hash = await bcrypt.hash(password, 10);

    // Insertar nuevo usuario
    await pool.query(
      "INSERT INTO usuarios (username, password_hash) VALUES (?, ?)",
      [username, password_hash]
    );

    res.json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error("Error en /register:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// ------------------------------------------
// LOGIN DE USUARIO
// ------------------------------------------
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Buscar usuario
    const [rows] = await pool.query(
      "SELECT * FROM usuarios WHERE username = ?",
      [username]
    );

    if (rows.length === 0)
      return res.status(404).json({ error: "Usuario no encontrado" });

    const user = rows[0];

    // Comparar contraseña
    const match = await bcrypt.compare(password, user.password_hash);

    if (!match)
      return res.status(401).json({ error: "Contraseña incorrecta" });

    // Login exitoso
    res.json({
      message: "Ingreso exitoso",
      user: {
        id_usuario: user.id_usuario,
        username: user.username,
      },
    });
  } catch (error) {
    console.error("Error en /login:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

export default router;