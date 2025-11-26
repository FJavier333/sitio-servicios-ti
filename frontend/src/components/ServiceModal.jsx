import React, { useEffect } from "react";

// Componente para manejar el desenfoque estilo iOS
const Backdrop = ({ onClick }) => (
  <div className="service-modal-overlay" onClick={onClick} />
);

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  // Obtener el array de URLs. Usamos una propiedad segura.
  const imageURLs = service.modalImageURLs || [];
  // Decidimos cuántas columnas usar. Usamos 2 si hay 2 o más imágenes.
  const gridColumns = imageURLs.length >= 2 ? "repeat(2, 1fr)" : "1fr";

  // === LÓGICA DE CIERRE CON TECLA ESCAPE ===
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);
  // ============================================

  return (
    <>
      <Backdrop onClick={onClose} />

      <div className="service-modal-content">
        <div className="service-modal-body">
          {/* Título */}
          <h2 className="service-modal-title">{service.title}</h2>

          {/* Descripción completa */}
          <div className="service-modal-description">
            <p>{service.fullDescription}</p>
          </div>

          {/* Imágenes en cuadrícula */}
          {imageURLs.length > 0 && (
            <div
              className="service-modal-gallery"
              style={{ gridTemplateColumns: gridColumns }}
            >
              {imageURLs.map((url, index) => (
                <div className="service-modal-image-wrapper" key={index}>
                  <img
                    src={url}
                    alt={`Detalle ${index + 1} de ${service.title}`}
                    className="service-modal-image"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Botón de cerrar */}
          <button className="service-modal-close" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </>
  );
}
