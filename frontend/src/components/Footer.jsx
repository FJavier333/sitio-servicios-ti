import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../theme/ThemeProvider";
import RegistrarAdminForm from "../components/RegistrarAdminForm";

export default function Footer() {
  const year = new Date().getFullYear();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // hSaber si hay un admin logueado (se llenará cuando hagamos el login de admin)
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdminLogged, setIsAdminLogged] = useState(false);
  const [adminToast, setAdminToast] = useState(null);
  const [showAdminRegister, setShowAdminRegister] = useState(false); // 👈 NUEVO

  useEffect(() => {
    const storedAdmin = localStorage.getItem("icompAdmin");
    setIsAdminLogged(!!storedAdmin);
  }, []);

  useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === "Escape") {
      setShowAdminRegister(false);
    }
  };

  window.addEventListener("keydown", handleEsc);
  return () => window.removeEventListener("keydown", handleEsc);
}, []);

  const showAdminToast = (message, type = "success") => {
    setAdminToast({ message, type });
    setTimeout(() => {
      setAdminToast(null);
    }, 3200);
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("icompAdmin");
    setIsAdminLogged(false);
    setShowAdminRegister(false); // 👈 por si estaba abierto el registro
    showAdminToast("Modo administrador desactivado", "info");
  };

  // --- ESTILOS COMPACTOS DE TEXTO ---

  const baseFont = "Arial, sans-serif";

  const footerStyle = {
    textAlign: "center",
    fontFamily: baseFont,
    background: isDark ? "#0a0a0a" : "#f9fafb",
    color: isDark ? "#e5e7eb" : "#000000ff",
    borderTop: `1px solid ${
      isDark ? "rgba(148,163,184,0.35)" : "rgba(15,23,42,0.06)"
    }`,
  };

  const innerStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "1.2rem 1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  };

  const textBlockStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const empresaStyle = {
    fontSize: "1.2rem",
    fontWeight: 700,
    color: isDark ? "#f9fafb" : "#0f172a",
    marginBottom: "0.1rem",
  };

  const copyStyle = {
    fontSize: "0.9rem",
    opacity: 0.8,
    color: isDark ? "#cbd5f5" : "#6b7280",
    lineHeight: 1.2,
    margin: "0",
  };

  const linkStyle = {
    color: isDark ? "#9ca3af" : "#4b5563",
    fontSize: "0.9rem",
    opacity: 0.8,
    textDecoration: "underline",
    cursor: "pointer",
    transition: "color 0.2s",
    marginTop: "0.2rem",
  };

  const devsStyle = {
    fontSize: "0.9rem",
    opacity: 0.8,
    color: isDark ? "#e5e7eb" : "#111827",
    marginTop: "0.4rem",
  };

  const socialBtnBase = {
    height: "48px",
    width: "48px",
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    transition: "all .25s ease",
    cursor: "pointer",
    border: isDark
      ? "1px solid rgba(148,163,184,0.6)"
      : "1px solid rgba(15,23,42,0.12)",
    background: isDark ? "#020617" : "#ffffff",
    color: isDark ? "#e5e7eb" : "#0f172a",
    boxShadow: isDark
      ? "0 4px 12px rgba(15,23,42,0.6)"
      : "0 2px 8px rgba(15,23,42,0.06)",
  };

  const separatorStyle = {
    width: "100%",
    maxWidth: "200px",
    height: "1px",
    background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
    margin: "0.8rem 0",
    border: "none",
  };

  return (
    <>
      <footer className="footer" style={footerStyle}>
        <div className="footer-inner" style={innerStyle}>
          {/* Bloque de Textos: iComp, Copyright, Aviso y Devs */}
          <div className="footer-text-block" style={textBlockStyle}>
            <span className="empresa" style={empresaStyle}>
              iComp
            </span>

            <span className="copy" style={copyStyle}>
              © {year} Todos los derechos reservados.
            </span>

            <a href="/aviso-de-privacidad" style={linkStyle}>
              Aviso de Privacidad
            </a>

            <div className="footer-devs" style={devsStyle}>
              Desarrollado por <strong>ProTech Dev</strong>
            </div>
          </div>

          {/* Separador visual */}
          <hr style={separatorStyle} />

          {/* Redes Sociales */}
          <div
            className="footer-social"
            style={{
              display: "flex",
              gap: "1.2rem",
            }}
          >
            {/* Instagram */}
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="social-btn"
              title="Instagram"
              style={socialBtnBase}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3.8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="social-btn"
              title="Facebook"
              style={socialBtnBase}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v6h3v-6h2.3l.7-3H14v-1.5a1 1 0 0 1 1-1H16V8h-1z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/0000000000"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="social-btn"
              title="WhatsApp"
              style={socialBtnBase}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 11.5A8.5 8.5 0 1 1 11.5 3 8.5 8.5 0 0 1 20 11.5z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M8.5 19.5 6 21l.8-2.8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M9.5 12.2c.5 1.1 2 2.4 3.1 2.7.7.2 1.2.2 1.7-.2l.8-.6c.2-.1.4 0 .5.1l.8 1.3c.1.2.1.5-.1.6-.8.7-1.7 1.1-2.8 1.1-2.4 0-5.4-2.7-6.1-5.2-.2-.8-.2-1.7.1-2.4.1-.2.4-.3.6-.2l1.4.8c.1.1.2.3.1.5l-.6.9c-.1.4-.1.7.5 1.6Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Botón flotante para abrir login admin */}
      {!isAdminLogged && (
        <Link
          to="/admin"
          title="Acceso administradores"
          className="admin-floating-button"
          onClick={(e) => {
            e.preventDefault();
            setShowAdminLogin(true);
          }}
        >
          <img src="/icons/admin.png" alt="Acceso administradores" />
        </Link>
      )}

      {/* Botón flotante para cerrar modo admin */}
      {isAdminLogged && (
        <button
          type="button"
          onClick={handleAdminLogout}
          style={{
            position: "fixed",
            right: "1.6rem",
            bottom: "1.6rem",
            zIndex: 3500,
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "0.5rem 0.9rem",
            borderRadius: "999px",
            border: "1px solid rgba(248,250,252,0.35)",
            background: "linear-gradient(135deg, #ef4444, #f97316)",
            color: "#f9fafb",
            fontSize: "0.8rem",
            fontWeight: 500,
            boxShadow: "0 16px 40px rgba(0,0,0,0.7)",
            cursor: "pointer",
          }}
        >
          ✕ Salir modo admin
        </button>
      )}

      {/* 👇 NUEVO: botón + formulario para registrar admins (solo admin logueado) */}
      {isAdminLogged && (
  <div
    style={{
      position: "fixed",
      left: "1.6rem",
      bottom: "1.6rem",
      zIndex: 3400,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "0.5rem",
    }}
  >
    {/* Botón +Admin */}
    <button
      type="button"
      onClick={() => setShowAdminRegister((prev) => !prev)}
      style={{
        padding: "0.5rem 0.9rem",
        borderRadius: "999px",
        border: "1px solid rgba(148,163,184,0.6)",
        background: "#020617",
        color: "#e5e7eb",
        fontSize: "0.8rem",
        fontWeight: 500,
        boxShadow: "0 12px 30px rgba(0,0,0,0.7)",
        cursor: "pointer",
      }}
    >
      {showAdminRegister ? "Cerrar registro admin" : "+ Admin"}
    </button>

    {/* Mini ventana encima del botón */}
    {showAdminRegister && (
      <div
        style={{
          marginTop: "0.5rem",
          maxWidth: "360px",
          background: "#020617",
          padding: "0.75rem",
          borderRadius: "18px",
          boxShadow: "0 24px 50px rgba(0,0,0,0.85)",
          border: "1px solid rgba(148,163,184,0.5)",
        }}
      >
        <RegistrarAdminForm onNotify={showAdminToast} />
      </div>
    )}
  </div>
)}
      {/* Modal login admin */}
      {showAdminLogin && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 4000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "radial-gradient(circle at top, rgba(56,189,248,0.18), transparent 55%), rgba(3,7,18,0.92)",
            backdropFilter: "blur(18px)",
          }}
          onClick={() => setShowAdminLogin(false)}
        >
          <div
            style={{
              position: "relative",
              width: "min(420px, 92vw)",
              padding: "22px 22px 20px",
              borderRadius: "22px",
              background:
                "radial-gradient(circle at top, rgba(59,130,246,0.25), transparent 55%), #020617",
              boxShadow:
                "0 28px 70px rgba(0,0,0,0.95), 0 0 0 1px rgba(56,189,248,0.35)",
              color: "#e5e7eb",
              border: "1px solid rgba(56,189,248,0.7)",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                position: "absolute",
                insetInline: 32,
                top: 0,
                height: 2,
                background:
                  "linear-gradient(90deg, transparent, #22d3ee, #6366f1, transparent)",
                opacity: 0.9,
              }}
            />

            <button
              type="button"
              onClick={() => setShowAdminLogin(false)}
              aria-label="Cerrar"
              style={{
                position: "absolute",
                top: 10,
                right: 12,
                border: "none",
                background: "transparent",
                color: "#9ca3af",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              ✕
            </button>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  height: 42,
                  width: 42,
                  borderRadius: "999px",
                  display: "grid",
                  placeItems: "center",
                  background:
                    "radial-gradient(circle at 30% 0%, #38bdf8, #1d4ed8 60%, #020617)",
                  boxShadow: "0 0 18px rgba(59,130,246,0.9)",
                }}
              >
                <img
                  src="/icons/admin.png"
                  alt="Admin"
                  style={{ height: 22, width: 22, objectFit: "contain" }}
                />
              </div>

              <div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#38bdf8",
                    marginBottom: 2,
                  }}
                >
                  Admin Console
                </div>
                <h2
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                  }}
                >
                  Acceso de administrador
                </h2>
              </div>
            </div>

            <p
              style={{
                fontSize: "0.8rem",
                color: "#9ca3af",
                marginBottom: 14,
              }}
            >
              Ingresa con tus credenciales de administrador para habilitar el
              modo de edición del sitio.
            </p>

            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
              onSubmit={async (e) => {
                e.preventDefault();

                const username = document
                  .getElementById("admin-username")
                  .value.trim();
                const password = document
                  .getElementById("admin-password")
                  .value.trim();

                if (!username || !password) {
                  showAdminToast(
                    "Debes ingresar usuario y contraseña de administrador",
                    "error"
                  );
                  return;
                }

                try {
                  const response = await fetch(
                    "https://icomp-backend.onrender.com/login",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ username, password }),
                    }
                  );

                  const data = await response.json();

                  if (!response.ok) {
                    showAdminToast(
                      data.error ||
                        "Error al iniciar sesión como administrador",
                      "error"
                    );
                    return;
                  }

                  const adminData = data.admin || { username };
                  localStorage.setItem("icompAdmin", JSON.stringify(adminData));
                  setIsAdminLogged(true);

                  showAdminToast(
                    "Inicio de sesión de administrador exitoso",
                    "success"
                  );
                  setShowAdminLogin(false);
                } catch (error) {
                  console.error("Error en login admin:", error);
                  showAdminToast(
                    "Error al conectar con el servidor de administradores",
                    "error"
                  );
                }
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label
                  htmlFor="admin-username"
                  style={{ fontSize: "0.8rem", color: "#bae6fd" }}
                >
                  Usuario administrador
                </label>
                <input
                  id="admin-username"
                  type="text"
                  autoComplete="username"
                  style={{
                    padding: "8px 10px",
                    borderRadius: "10px",
                    border: "1px solid rgba(56,189,248,0.6)",
                    background: "rgba(15,23,42,0.95)",
                    color: "#e5e7eb",
                    fontSize: "0.85rem",
                    outline: "none",
                    boxShadow: "0 0 0 1px rgba(15,23,42,0.9)",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label
                  htmlFor="admin-password"
                  style={{ fontSize: "0.8rem", color: "#bae6fd" }}
                >
                  Contraseña
                </label>
                <input
                  id="admin-password"
                  type="password"
                  autoComplete="current-password"
                  style={{
                    padding: "8px 10px",
                    borderRadius: "10px",
                    border: "1px solid rgba(56,189,248,0.6)",
                    background: "rgba(15,23,42,0.95)",
                    color: "#e5e7eb",
                    fontSize: "0.85rem",
                    outline: "none",
                    boxShadow: "0 0 0 1px rgba(15,23,42,0.9)",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  marginTop: 6,
                  padding: "9px 14px",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  background:
                    "linear-gradient(135deg, #22d3ee, #6366f1, #8b5cf6)",
                  color: "#f9fafb",
                  boxShadow:
                    "0 18px 40px rgba(15,23,42,0.95), 0 0 18px rgba(59,130,246,0.9)",
                }}
              >
                Ingresar como administrador
              </button>
            </form>
          </div>
        </div>
      )}

      {adminToast && (
  <div
    style={{
      position: "fixed",
      top: "1.5rem",
      right: "1.5rem",
      zIndex: 5000,
      minWidth: "260px",
      maxWidth: "320px",
      padding: "0.9rem 1rem",
      borderRadius: "14px",
      boxShadow: "0 20px 45px rgba(0,0,0,0.65)",
      color: "#f9fafb",
      background:
        adminToast.type === "error"
          ? "linear-gradient(135deg,#b91c1c,#f97316)"
          : adminToast.type === "info"
          ? "linear-gradient(135deg,#0f766e,#14b8a6)"
          : "linear-gradient(135deg,#4f46e5,#22c55e)",
      border: "1px solid rgba(248,250,252,0.25)",
      display: "flex",
      alignItems: "flex-start",
      gap: 10,

      /* ANIMACIÓN PARA LLAMAR LA ATENCIÓN */
      animation: "pulseGlow 0.65s ease-out",
    }}
  >
    <style>
      {`
        @keyframes pulseGlow {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0px rgba(255,255,255,0.1);
            opacity: 0;
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 25px rgba(255,255,255,0.35);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0px rgba(255,255,255,0.1);
            opacity: 1;
          }
        }
      `}
    </style>

    <div style={{ fontSize: "1.1rem", lineHeight: 1 }}>
      {adminToast.type === "error" ? "⚠️" : "✨"}
    </div>
    <div
      style={{
        fontSize: "0.85rem",
        lineHeight: 1.4,
      }}
    >
      {adminToast.message}
    </div>
  </div>
)}
    </>
  );
}