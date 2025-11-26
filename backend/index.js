import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// IMPORTA LAS RUTAS DE ADMIN COMO ES MODULE
import adminAuthRoutes from "./routes/adminAuthRoutes.js";

// ----------------- Inicialización -----------------
const app = express();
app.use(cors());
app.use(express.json());

// ----------------- RUTA: Enviar correo -----------------
app.post("/enviar-correo", async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ error: "Faltan datos en el formulario." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje de contacto: ${nombre}`,
      text: `
Nombre: ${nombre}
Correo: ${correo}

Mensaje:
${mensaje}
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Correo enviado correctamente." });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return res
      .status(500)
      .json({ error: "Ocurrió un error al enviar el mensaje." });
  }
});

// ----------------- RUTAS DE AUTENTICACIÓN -----------------
import authRoutes from "./routes/auth.js";
app.use("/api/auth", authRoutes);

app.use("/api/admin", adminAuthRoutes);

// ----------------- Servidor -----------------
const PORT = process.env.PORT || 4000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});