import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../theme/ThemeProvider";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  // Estado para mostrar/ocultar modales de auth
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Usuario logueado (se guarda también en localStorage)
  const [currentUser, setCurrentUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Toast de notificación (éxito / error)
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    // Ocultar automáticamente después de 3.2s
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  // Ref para detectar clic fuera del menú de usuario
  const userMenuRef = useRef(null);

  // Cargar usuario guardado al iniciar
  useEffect(() => {
    const stored = localStorage.getItem("icompUser");
    if (stored) {
      try {
        setCurrentUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("icompUser");
      }
    }
  }, []);

  // Cerrar menú de usuario con clic fuera y tecla Esc
  useEffect(() => {
    if (!showUserMenu) return;

    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showUserMenu]);

  const handleLogout = () => {
    setCurrentUser(null);
    setShowUserMenu(false);
    localStorage.removeItem("icompUser");
    showToast("Has cerrado sesión correctamente.", "success");
  };

  // VARIABLES DE TEMA PARA LA NAVBAR
  const navbarBg = isDark ? "var(--color-surface)" : "var(--color-surface)";
  const navbarBorder = isDark
    ? "1px solid rgba(148,163,184,0.15)"
    : "1px solid rgba(15,23,42,0.08)";
  const linkTextColor = isDark ? "#e5e7eb" : "#0f172a";

  return (
    <>
      <header
        className="navbar"
        style={{
          paddingInline: "clamp(16px, 3vw, 32px)",
          boxSizing: "border-box",
          overflow: "visible",
          background: navbarBg,
          borderBottom: navbarBorder,
          zIndex: 1000,
        }}
      >
        <div
          className="nav-inner"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "clamp(24px, 4vw, 64px)",
            width: "100%",
          }}
        >
          {/* Izquierda: logo */}
          <NavLink to="/" className="brand" style={{ flexShrink: 0 }}>
            <img
              src="/logos/logo.png"
              alt="iComp"
              className="brand-logo"
              style={{ height: "40px", width: "auto" }}
            />
          </NavLink>

          {/* Menu móvil (hamburguesa) */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* 3 rayitas */}
            <span></span>
            <span></span>
            <span></span>
          </button>


          {/* Centro: enlaces principales */}
          <div
            className={`nav-links ${menuOpen ? "show-menu" : ""}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "clamp(18px, 2.5vw, 30px)",
              whiteSpace: "nowrap",
              flexGrow: 1,
              flexShrink: 1,
              minWidth: "fit-content",
              color: linkTextColor,
            }}
          >
            <NavLink to="/" end className="nav-link">
              Inicio
            </NavLink>
            <NavLink to="/quienes-somos" className="nav-link">
              ¿Quiénes Somos?
            </NavLink>
            <NavLink to="/servicios" className="nav-link">
              Servicios
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
            <NavLink
              to="/aviso-de-privacidad"
              className="nav-link"
              style={{ opacity: 0.9 }}
            >
              Aviso de Privacidad
            </NavLink>
          </div>

          {/* Derecha: controles */}
          <div
            className={`nav-controls ${menuOpen ? "show-menu" : ""}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(8px, 1vw, 12px)",
              whiteSpace: "nowrap",
              flexShrink: 0,
              minWidth: "fit-content",
              paddingRight: "0.75rem",
              overflow: "visible",
              color: linkTextColor,
            }}
          >
            {/* Si NO hay usuario -> botones Ingresar / Registrarse */}
            {!currentUser && (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setShowSignup(false);
                    setShowLogin(true);
                  }}
                  className="nav-auth-btn nav-auth-login"
                  style={{
                    padding: "6px 12px",
                    borderRadius: "999px",
                    border: "1px solid rgba(148,163,184,0.5)",
                    background: "transparent",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                  }}
                >
                  Ingresar
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowLogin(false);
                    setShowSignup(true);
                  }}
                  className="nav-auth-btn nav-auth-signup"
                  style={{
                    padding: "6px 14px",
                    borderRadius: "999px",
                    border: "none",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    background:
                      "linear-gradient(135deg, #6366f1, #a855f7, #ec4899)",
                    color: "#f9fafb",
                    boxShadow:
                      "0 10px 25px rgba(15,23,42,0.4), 0 0 0 1px rgba(148,163,184,0.3)",
                  }}
                >
                  Registrarse
                </button>
              </>
            )}

            {/* Si HAY usuario -> icono y menú */}
            {currentUser && (
              <div
                className="user-menu-wrapper"
                style={{ position: "relative" }}
                ref={userMenuRef}
              >
                <button
                  type="button"
                  onClick={() => setShowUserMenu((prev) => !prev)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 12px",
                    borderRadius: "999px",
                    border: "2px solid rgba(15,23,42,0.9)",
                    boxShadow: "0 0 0 2px rgba(148,163,184,0.65)",
                    background: isDark
                      ? "rgba(15,23,42,0.98)"
                      : "rgba(248,250,252,0.98)",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                  }}
                >
                  <span
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "999px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(135deg, #4f46e5, #7c3aed, #ec4899)",
                      color: "#f9fafb",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}
                  >
                    {currentUser.username?.[0] || "U"}
                  </span>
                  <span
                    style={{
                      maxWidth: 120,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {currentUser.username}
                  </span>
                </button>

                {showUserMenu && (
                  <div
                    className="user-menu-dropdown"
                    style={{
                      position: "absolute",
                      right: 0,
                      marginTop: 10,
                      minWidth: 230,
                      borderRadius: 18,
                      background: isDark
                        ? "rgba(15,23,42,0.99)"
                        : "rgba(248,250,252,0.99)",
                      boxShadow:
                        "0 22px 55px rgba(15,23,42,0.85), 0 0 0 1px rgba(148,163,184,0.4)",
                      padding: 10,
                      fontSize: "0.85rem",
                      zIndex: 3000,
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    {/* Header SESIÓN ACTIVA + X */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        padding: "6px 4px 8px",
                        borderBottom: "1px solid rgba(148,163,184,0.35)",
                        marginBottom: 4,
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: "0.7rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            color: isDark ? "#9ca3af" : "#64748b",
                            marginBottom: 3,
                          }}
                        >
                          Sesión activa
                        </div>
                        <div
                          style={{
                            fontWeight: 600,
                            color: isDark ? "#e5e7eb" : "#0f172a",
                          }}
                        >
                          {currentUser.username}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowUserMenu(false)}
                        aria-label="Cerrar"
                        style={{
                          border: "none",
                          background: "transparent",
                          color: isDark ? "#9ca3af" : "#64748b",
                          cursor: "pointer",
                          fontSize: "0.9rem",
                        }}
                      >
                        ✕
                      </button>
                    </div>

                    {/* Opciones */}
                    <button
                      type="button"
                      onClick={() =>
                        showToast(
                          "La sección 'Mi cuenta' estará disponible próximamente.",
                          "info"
                        )
                      }
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "7px 8px",
                        borderRadius: 10,
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        color: isDark ? "#e5e7eb" : "#0f172a",
                      }}
                    >
                      Mi cuenta
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        showToast(
                          "La opción para cambiar contraseña se implementará más adelante.",
                          "info"
                        )
                      }
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "7px 8px",
                        borderRadius: 10,
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        color: isDark ? "#e5e7eb" : "#0f172a",
                      }}
                    >
                      Cambiar contraseña
                    </button>

                    <button
                      type="button"
                      onClick={handleLogout}
                      style={{
                        width: "100%",
                        textAlign: "center",
                        padding: "7px 8px",
                        borderRadius: 10,
                        border: "none",
                        cursor: "pointer",
                        marginTop: 6,
                        background:
                          "linear-gradient(135deg, #ef4444, #f97316)",
                        color: "#f9fafb",
                        fontWeight: 500,
                      }}
                    >
                      Cerrar sesión
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Botón de tema */}
            <button
              onClick={toggle}
              aria-pressed={theme === "dark"}
              title={
                theme === "dark"
                  ? "Cambiar a modo día"
                  : "Cambiar a modo noche"
              }
              className="theme-toggle"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: 6 }}>
                {theme === "dark" ? "☀️" : "🌙"}
              </span>
              {theme === "dark" ? "Día" : "Noche"}
            </button>
          </div>
        </div>
      </header>

      {/* MODAL LOGIN - USUARIO */}
      {showLogin && (
        <div
          className="auth-modal-backdrop"
          style={{
            position: "fixed",
            inset: 0,
            background:
              "radial-gradient(circle at top, rgba(148,163,184,0.22), transparent 55%), rgba(15,23,42,0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            backdropFilter: "blur(18px)",
          }}
          onClick={() => setShowLogin(false)}
        >
          <div
            className="auth-modal-card"
            style={{
              position: "relative",
              width: "min(420px, 92vw)",
              padding: "24px 22px",
              borderRadius: "24px",
              background:
                "linear-gradient(145deg, rgba(15,23,42,0.96), rgba(15,23,42,0.9))",
              boxShadow:
                "0 24px 60px rgba(15,23,42,0.85), 0 0 0 1px rgba(148,163,184,0.35)",
              color: "#e5e7eb",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowLogin(false)}
              aria-label="Cerrar"
              style={{
                position: "absolute",
                top: 10,
                right: 10,
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
                marginBottom: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                Ingresar
              </h2>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#9ca3af",
                }}
              >
                Accede a tu cuenta para gestionar tus servicios y consultar
                novedades.
              </p>
            </div>

            <form
              className="auth-form"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                marginTop: "4px",
              }}
              onSubmit={async (e) => {
                e.preventDefault();

                const username = document
                  .getElementById("login-username")
                  .value.trim();
                const password = document
                  .getElementById("login-password")
                  .value.trim();

                if (!username || !password) {
                  showToast(
                    "Debes ingresar usuario y contraseña.",
                    "error"
                  );
                  return;
                }

                try {
                  const response = await fetch(
                    "https://icomp-backend.onrender.com/",
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
                    showToast(
                      data.error || "Error al iniciar sesión",
                      "error"
                    );
                    return;
                  }

                  showToast("Inicio de sesión exitoso", "success");

                  // Guardar usuario logueado
                  const userData = data.user || { username };
                  setCurrentUser(userData);
                  localStorage.setItem(
                    "icompUser",
                    JSON.stringify(userData)
                  );

                  setShowLogin(false);
                } catch (error) {
                  console.error("Error en login:", error);
                  showToast(
                    "Error al conectar con el servidor",
                    "error"
                  );
                }
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label
                  htmlFor="login-username"
                  style={{ fontSize: "0.8rem", color: "#cbd5f5" }}
                >
                  Nombre de usuario
                </label>
                <input
                  id="login-username"
                  type="text"
                  required
                  style={{
                    padding: "8px 10px",
                    borderRadius: "12px",
                    border: "1px solid rgba(148,163,184,0.6)",
                    background: "rgba(15,23,42,0.9)",
                    color: "#e5e7eb",
                    fontSize: "0.85rem",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label
                  htmlFor="login-password"
                  style={{ fontSize: "0.8rem", color: "#cbd5f5" }}
                >
                  Contraseña
                </label>
                <input
                  id="login-password"
                  type="password"
                  required
                  style={{
                    padding: "8px 10px",
                    borderRadius: "12px",
                    border: "1px solid rgba(148,163,184,0.6)",
                    background: "rgba(15,23,42,0.9)",
                    color: "#e5e7eb",
                    fontSize: "0.85rem",
                    outline: "none",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  marginTop: "4px",
                  padding: "9px 14px",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  background:
                    "linear-gradient(135deg, #4f46e5, #7c3aed, #ec4899)",
                  color: "#f9fafb",
                  boxShadow:
                    "0 18px 40px rgba(15,23,42,0.85), 0 0 0 1px rgba(148,163,184,0.4)",
                }}
              >
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL REGISTRO - USUARIO */}
      {showSignup && (
        <div
          className="auth-modal-backdrop"
          style={{
            position: "fixed",
            inset: 0,
            background:
              "radial-gradient(circle at top, rgba(148,163,184,0.22), transparent 55%), rgba(15,23,42,0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            backdropFilter: "blur(18px)",
          }}
          onClick={() => setShowSignup(false)}
        >
          <div
            className="auth-modal-card"
            style={{
              position: "relative",
              width: "min(420px, 92vw)",
              padding: "24px 22px",
              borderRadius: "24px",
              background:
                "linear-gradient(145deg, rgba(15,23,42,0.96), rgba(15,23,42,0.9))",
              boxShadow:
                "0 24px 60px rgba(15,23,42,0.85), 0 0 0 1px rgba(148,163,184,0.35)",
              color: "#e5e7eb",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowSignup(false)}
              aria-label="Cerrar"
              style={{
                position: "absolute",
                top: 10,
                right: 10,
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
                marginBottom: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                Crear cuenta
              </h2>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#9ca3af",
                }}
              >
                Regístrate para guardar tus datos y gestionar tus solicitudes
                con iComp.
              </p>
            </div>

            <form
              className="auth-form"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                marginTop: "4px",
              }}
              onSubmit={async (e) => {
                e.preventDefault();

                const username = document
                  .getElementById("signup-username")
                  .value.trim();
                const password = document
                  .getElementById("signup-password")
                  .value.trim();

                if (!username || !password) {
                  showToast(
                    "Debes ingresar usuario y contraseña.",
                    "error"
                  );
                  return;
                }

                try {
                  const response = await fetch(
                    "https://icomp-backend.onrender.com/",
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
                    showToast(
                      data.error || "Error al registrar usuario",
                      "error"
                    );
                    return;
                  }

                  showToast(
                    "Usuario registrado correctamente",
                    "success"
                  );

                  // AUTO-LOGIN DESPUÉS DE REGISTRARSE
                  const userData = data.user || { username };
                  setCurrentUser(userData);
                  localStorage.setItem(
                    "icompUser",
                    JSON.stringify(userData)
                  );

                  setShowSignup(false);
                } catch (error) {
                  console.error("Error en registro:", error);
                  showToast(
                    "Error al conectar con el servidor",
                    "error"
                  );
                }
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label
                  htmlFor="signup-username"
                  style={{ fontSize: "0.8rem", color: "#cbd5f5" }}
                >
                  Nombre de usuario
                </label>
                <input
                  id="signup-username"
                  type="text"
                  required
                  style={{
                    padding: "8px 10px",
                    borderRadius: "12px",
                    border: "1px solid rgba(148,163,184,0.6)",
                    background: "rgba(15,23,42,0.9)",
                    color: "#e5e7eb",
                    fontSize: "0.85rem",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label
                  htmlFor="signup-password"
                  style={{ fontSize: "0.8rem", color: "#cbd5f5" }}
                >
                  Contraseña
                </label>
                <input
                  id="signup-password"
                  type="password"
                  required
                  style={{
                    padding: "8px 10px",
                    borderRadius: "12px",
                    border: "1px solid rgba(148,163,184,0.6)",
                    background: "rgba(15,23,42,0.9)",
                    color: "#e5e7eb",
                    fontSize: "0.85rem",
                    outline: "none",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  marginTop: "4px",
                  padding: "9px 14px",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  background:
                    "linear-gradient(135deg, #4f46e5, #7c3aed, #ec4899)",
                  color: "#f9fafb",
                  boxShadow:
                    "0 18px 40px rgba(15,23,42,0.85), 0 0 0 1px rgba(148,163,184,0.4)",
                }}
              >
                Registrarme
              </button>
            </form>
          </div>
        </div>
      )}

      {/* TOAST DE NOTIFICACIÓN */}
      {toast && (
        <div
          className="auth-toast"
          style={{
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 4000,
            minWidth: 260,
            maxWidth: 340,
            borderRadius: 18,
            padding: "10px 14px",
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            background: isDark
              ? "rgba(15,23,42,0.98)"
              : "rgba(15,23,42,0.96)",
            boxShadow:
              "0 22px 55px rgba(15,23,42,0.85), 0 0 0 1px rgba(148,163,184,0.35)",
            color: "#e5e7eb",
            backdropFilter: "blur(16px)",
            animation: "userMenuFadeSlide 180ms ease-out",
            transformOrigin: "top right",
            borderLeft:
              toast.type === "success"
                ? "3px solid #22c55e"
                : toast.type === "error"
                ? "3px solid #f97316"
                : "3px solid #38bdf8",
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
              flexShrink: 0,
              background:
                toast.type === "success"
                  ? "rgba(34,197,94,0.18)"
                  : toast.type === "error"
                  ? "rgba(248,113,113,0.18)"
                  : "rgba(56,189,248,0.18)",
            }}
          >
            {toast.type === "success"
              ? "✅"
              : toast.type === "error"
              ? "⚠️"
              : "ℹ️"}
          </div>

          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                marginBottom: 2,
              }}
            >
              {toast.type === "success"
                ? "Operación exitosa"
                : toast.type === "error"
                ? "Ocurrió un problema"
                : "Información"}
            </div>
            <div style={{ fontSize: "0.8rem", opacity: 0.9 }}>
              {toast.message}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setToast(null)}
            style={{
              border: "none",
              background: "transparent",
              color: "#9ca3af",
              cursor: "pointer",
              fontSize: "0.85rem",
            }}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}