import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../theme/ThemeProvider"; // <-- IMPORTACIÓN CLAVE

export default function ModeSwitch() {
  const nav = useNavigate();
  const { pathname } = useLocation();

  // --- LÓGICA DE TEMA ---
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Colores dinámicos para el texto
  const textColor = isDark ? "#e5e7eb" : "#0f172a"; // Color principal del texto (Claro/Oscuro)
  const mutedColor = isDark ? "#9ca3af" : "#6b7280"; // Color sutil (Gris Claro/Gris Oscuro)
  
  // Si estás en /admin o debajo, el switch aparece activado
  const isAdminPath = useMemo(() => pathname.startsWith("/admin"), [pathname]);
  const [checked, setChecked] = useState(isAdminPath);

  useEffect(() => setChecked(isAdminPath), [isAdminPath]);

  const handleToggle = () => {
    const next = !checked;
    setChecked(next);

    if (next) {
      nav("/admin/login");
    } else {
      nav("/");
    }
  };

  return (
    <div 
        className="mode-switch" 
        aria-label="Cambiar modo general/administrador"
        style={{ display: 'flex', alignItems: 'center', gap: '8px' }} // Aseguramos que se vea bien
    >
      {/* Label "General" - CORREGIDO */}
      <span 
        className={`mode-label ${!checked ? "active" : ""}`}
        style={{
          color: !checked ? textColor : mutedColor, // Activo usa color principal, inactivo usa sutil
          transition: 'color 0.2s', // Para animación suave
          fontWeight: !checked ? 600 : 400,
        }}
      >
        General
      </span>

      <button
        type="button"
        className={`switch ${checked ? "on" : "off"}`}
        onClick={handleToggle}
        aria-pressed={checked}
        aria-label={checked ? "Administrador activado" : "General activado"}
      >
        <span className="switch-bg" />
        <span className="switch-thumb" />
      </button>

      {/* Label "Administrador" - CORREGIDO */}
      <span 
        className={`mode-label ${checked ? "active" : ""}`}
        style={{
          color: checked ? textColor : mutedColor, // Activo usa color principal, inactivo usa sutil
          transition: 'color 0.2s',
          fontWeight: checked ? 600 : 400,
        }}
      >
        Administrador
      </span>
    </div>
  );
}