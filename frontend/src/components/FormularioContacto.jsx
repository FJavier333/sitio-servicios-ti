import { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";
import ModalExito from './ModalExito'; // <-- Importamos el nuevo componente

// ¡IMPORTANTE! Reemplaza esto con tu URL de endpoint de Formspree.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xblqogbn"; 

export default function FormularioContacto() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // --- ESTADO Y LÓGICA DE ENVÍO ---
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  
  // NUEVA FUNCIÓN: Limpia el formulario y el estado (llamada por el Modal)
  const handleSuccessClose = () => {
      // Limpiar formulario
      setForm({
          nombre: "",
          correo: "",
          mensaje: "",
      });
      // Restablecer el estado de status para ocultar el modal
      setStatus({ type: "", message: "" });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nombre || !form.correo || !form.mensaje) {
      setStatus({
        type: "error",
        message: "Por favor llena todos los campos.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "info", message: "Enviando mensaje..." });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.nombre,
          _replyto: form.correo,
          message: form.mensaje,
        }),
      });

      if (response.ok) {
       
        setStatus({
          type: "success",
          message: "El equipo de iComp te contactará a la brevedad posible.",
        });
        
      } else {
        setStatus({
          type: "error",
          message:
            "Ocurrió un problema al enviar el mensaje. Por favor, inténtalo de nuevo.",
        });
      }
    } catch (error) {
      console.error("Error al enviar el formulario a Formspree:", error);
      setStatus({
        type: "error",
        message:
          "Error de conexión. Por favor, revisa tu conexión e inténtalo de nuevo.",
      });
    } finally {
      setIsSending(false);
    }
  };

  // --- RENDERIZADO ---
  
  return (
    <div className="card-contacto">
      <h3 className="card-title" style={{ color: isDark ? 'var(--color-primary)' : 'var(--color-text)' }}>
        Contáctanos
      </h3>
      <p className="card-subtitle">
        Cuéntanos qué necesitas y te respondemos.
      </p>

      <form onSubmit={handleSubmit} className="form-contacto" noValidate>
        
        {/* ... INPUTS Y TEXTAREA (sin cambios) ... */}
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre" 
            type="text"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            autoComplete="name"
            className="" 
          />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo</label>
          <input
            id="correo"
            name="correo" 
            type="email"
            placeholder="tu@correo.com"
            value={form.correo}
            onChange={handleChange}
            required
            autoComplete="email"
            className="" 
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje" 
            rows={5}
            placeholder="Escribe tu mensaje…"
            value={form.mensaje}
            onChange={handleChange}
            required
            className=""
          />
        </div>

        <button type="submit" className="btn-primary" disabled={isSending}>
          {isSending ? "ENVIANDO..." : "ENVIAR"}
        </button>

        {/* Mostramos el mensaje de error o info estándar (NO el de éxito) */}
        {status.message && status.type !== "success" && (
          <div className={`alert ${status.type}`}>{status.message}</div>
        )}
      </form>
      
      {/* RENDERIZADO CONDICIONAL DEL MODAL DE ÉXITO */}
      {status.type === "success" && (
        <ModalExito 
          message={status.message} 
          onClose={handleSuccessClose} // <-- Llama a esta función al cerrar
        />
      )}
    </div>
  );
}