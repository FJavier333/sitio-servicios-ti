import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// El modal de éxito
export default function ModalExito({ message, onClose }) {
  // Estado para controlar la clase de animación (aparecer/desaparecer)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Al montar el componente, lo hacemos visible con una pequeña demora 
    //    para que la animación CSS se dispare.
    const timerVisible = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    // 2. Establecemos el temporizador principal para que desaparezca (5 segundos).
    const timerClose = setTimeout(() => {
      // Iniciamos la animación de salida
      setIsVisible(false);

      // Después de que la animación termine (300ms), ejecutamos la función onClose
      const timerFinal = setTimeout(onClose, 300);
      
      // Limpieza: importante para evitar fugas de memoria
      return () => clearTimeout(timerFinal);
    }, 3000); // 5000 milisegundos = 5 segundos

    // Limpieza general de los temporizadores
    return () => {
      clearTimeout(timerVisible);
      clearTimeout(timerClose);
    };
  }, [onClose]);

  // Usamos createPortal para renderizar el modal fuera del flujo normal del DOM (cuerpo de la página), 
  // asegurando que siempre esté encima de todo.
  return createPortal(
    <div className="modal-backdrop">
      <div className={`modal-content ${isVisible ? 'modal-show' : 'modal-hide'}`}>
        <h4 className="modal-title">¡Gracias por ponerte en contacto! 🎉</h4>
        <p className="modal-message">{message}</p>
      </div>
    </div>,
    document.body // Se renderiza directamente en el body
  );
}