// routes/adminAuthRoutes.js
import express from "express";
import bcrypt from "bcryptjs";
// 👇 Usa la MISMA importación de DB que ya usas en auth.js
// ej: import pool from "../db.js";   o   import { pool } from "../db.js";
import pool from "../db.js"; // <-- si en auth.js es distinto, copia la línea de auth.js

const router = express.Router();

// 👉 REGISTRO DE ADMIN
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Debes enviar usuario y contraseña" });
  }

  try {
    // 1. Ver si ya existe
    const [existentes] = await pool.query(
      "SELECT id_usuario FROM administradores WHERE username = ?",
      [username]
    );

    if (existentes.length > 0) {
      return res.status(409).json({ error: "Ese usuario ya existe" });
    }

    // 2. Hashear contraseña
    const passwordHash = await bcrypt.hash(password, 10);

    // 3. Insertar
    const [result] = await pool.query(
      "INSERT INTO administradores (username, password_hash) VALUES (?, ?)",
      [username, passwordHash]
    );

    // 4. Responder
    return res.json({
      admin: {
        id_usuario: result.insertId,
        username,
      },
    });
  } catch (err) {
    console.error("Error en /api/admin/register:", err);
    return res
      .status(500)
      .json({ error: "Error interno del servidor de administradores" });
  }
});

// 👉 LOGIN DE ADMIN
router.post("/login", async (req, res) => {
  console.log(">>> [LOGIN] Llamada recibida con body:", req.body);
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Debes enviar usuario y contraseña" });
  }

  try {
    const [rows] = await pool.query(
      "SELECT id_usuario, username, password_hash, fecha_registro FROM administradores WHERE username = ?",
      [username]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const admin = rows[0];

    const isMatch = await bcrypt.compare(password, admin.password_hash);
    if (!isMatch) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    return res.json({
      admin: {
        id_usuario: admin.id_usuario,
        username: admin.username,
        fecha_registro: admin.fecha_registro,
      },
    });
  } catch (err) {
    console.error("Error en /api/admin/login:", err);
    return res
      .status(500)
      .json({ error: "Error interno del servidor de administradores" });
  }
});

export default router;