import { useState } from "react";

// onNotify vendrá del Footer y será showAdminToast
export default function RegistrarAdminForm({ onNotify }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  // estados de respaldo por si algún día se usa sin toast
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const notify = (message, type) => {
    if (onNotify) {
      onNotify(message, type);
    } else {
      // fallback si no viene onNotify
      if (type === "error") {
        setError(message);
        setSuccess("");
      } else {
        setSuccess(message);
        setError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      notify("Las contraseñas no coinciden", "error");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("https://icomp-backend.onrender.com/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        notify(data.error || "Error registrando administrador", "error");
      } else {
        notify("Administrador registrado correctamente ✅", "success");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      console.error(err);
      notify("Error de conexión con el servidor", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="admin-register-panel opacity-0 animate-fade-in-up"
      style={{
        color: "#e5e7eb",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI'",
      }}
    >
      <h3
        style={{
          fontSize: "0.95rem",
          fontWeight: 600,
          marginBottom: "0.75rem",
        }}
      >
        Registrar nuevo administrador
      </h3>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.55rem",
        }}
      >
        {/* Usuario */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label
            htmlFor="nuevo-admin-username"
            style={{ fontSize: "0.8rem", color: "#bae6fd" }}
          >
            Usuario
          </label>
          <input
            id="nuevo-admin-username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              padding: "6px 9px",
              borderRadius: "10px",
              border: "1px solid rgba(148,163,184,0.7)",
              background: "rgba(15,23,42,0.97)",
              color: "#e5e7eb",
              fontSize: "0.85rem",
              outline: "none",
              boxShadow: "0 0 0 1px rgba(15,23,42,0.9)",
            }}
          />
        </div>

        {/* Contraseña */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label
            htmlFor="nuevo-admin-password"
            style={{ fontSize: "0.8rem", color: "#bae6fd" }}
          >
            Contraseña
          </label>
          <input
            id="nuevo-admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "6px 9px",
              borderRadius: "10px",
              border: "1px solid rgba(148,163,184,0.7)",
              background: "rgba(15,23,42,0.97)",
              color: "#e5e7eb",
              fontSize: "0.85rem",
              outline: "none",
              boxShadow: "0 0 0 1px rgba(15,23,42,0.9)",
            }}
          />
        </div>

        {/* Confirmar contraseña */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label
            htmlFor="nuevo-admin-confirm"
            style={{ fontSize: "0.8rem", color: "#bae6fd" }}
          >
            Confirmar contraseña
          </label>
          <input
            id="nuevo-admin-confirm"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{
              padding: "6px 9px",
              borderRadius: "10px",
              border: "1px solid rgba(148,163,184,0.7)",
              background: "rgba(15,23,42,0.97)",
              color: "#e5e7eb",
              fontSize: "0.85rem",
              outline: "none",
              boxShadow: "0 0 0 1px rgba(15,23,42,0.9)",
            }}
          />
        </div>

        {/* Botón */}
        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: "0.4rem",
            padding: "7px 12px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            fontSize: "0.85rem",
            fontWeight: 500,
            background:
              "linear-gradient(135deg, #22d3ee, #6366f1, #8b5cf6)",
            color: "#f9fafb",
            boxShadow:
              "0 12px 30px rgba(0,0,0,0.85), 0 0 14px rgba(59,130,246,0.9)",
            opacity: loading ? 0.8 : 1,
          }}
        >
          {loading ? "Registrando..." : "Registrar admin"}
        </button>

        {/* Fallback de mensajes solo si NO hay onNotify */}
        {!onNotify && error && (
          <p
            style={{
              marginTop: "0.3rem",
              fontSize: "0.8rem",
              color: "#fca5a5",
            }}
          >
            {error}
          </p>
        )}
        {!onNotify && success && (
          <p
            style={{
              marginTop: "0.3rem",
              fontSize: "0.8rem",
              color: "#bbf7d0",
            }}
          >
            {success}
          </p>
        )}
      </form>
    </div>
  );
}