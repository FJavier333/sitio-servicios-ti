import React from 'react';
import { createPortal } from 'react-dom';
import FormularioContacto from './FormularioContacto'; 

// Backdrop con blur estilo iOS
const Backdrop = ({ onClick }) => (
    <div 
        onClick={onClick}
        className="modal-backdrop" 
        style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(5px)',
            zIndex: 1020, 
        }}
    />
);

export default function ContactModal({ onClose, isVisible }) {
    if (!isVisible) return null;

    // Cerrar con tecla ESC
    React.useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    return createPortal(
        <>
            <Backdrop onClick={onClose} />

            <div 
                className={`service-modal-content ${isVisible ? 'is-visible' : 'is-hidden'}`} 
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1030,
                    width: '90%',
                    maxWidth: '550px',
                    maxHeight: '90vh',
                    padding: '2rem',
                    borderRadius: '1rem',
                    backgroundColor: 'var(--color-surface)',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
                    overflowY: 'auto',
                }}
            >
                {/* Botón en la esquina superior derecha */}
                <button 
                    onClick={onClose}
                    className="contact-modal-close-x"
                >
                    ✕
                </button>

                {/* Formulario */}
                <FormularioContacto />
            </div>
        </>,
        document.body
    );
}