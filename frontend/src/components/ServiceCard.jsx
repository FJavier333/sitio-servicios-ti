import React from 'react';

export default function ServiceCard({ service, onOpen }) {
    // service debe contener: { title, summary, icon, color }
    
    // Estilo de hover dinámico
    const cardStyle = {
        transition: 'all 0.3s ease-out',
        cursor: 'pointer',
        height: '100%',
        padding: '1.5rem',
        borderRadius: '1rem',
        border: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    };
    
    // Estilos que cambian al hacer hover
    const hoverStyle = {
        transform: 'translateY(-5px) scale(1.02)', // Se levanta y agranda
        boxShadow: '0 15px 30px rgba(59, 130, 246, 0.25)', // Sombra azul vibrante
        borderColor: 'var(--color-primary)', // Borde acentuado
    };

    const [isHovered, setIsHovered] = React.useState(false);

    // Asumimos que service.icon es el SVG o un nombre para el icono
    const IconComponent = () => {
        // En un caso real, aquí iría la lógica para renderizar el icono
        // Por ahora, usaremos un texto para el icono.
        const iconMap = {
            mantenimiento: '🛠️',
            redes: '🌐',
            cctv: '📷',
            computo: '💻',
            soporte: '⚙️',
            seguridad: '🔒',
        };
        return (
            <div style={{ fontSize: '2.5rem', color: service.color || 'var(--color-primary)' }}>
                {iconMap[service.icon] || service.icon}
            </div>
        );
    };

    return (
        <div 
            style={{ ...cardStyle, ...(isHovered ? hoverStyle : {}) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onOpen(service)} // Llama a la función para abrir el modal
        >
            <IconComponent />
            
            <h3 style={{ 
                marginTop: '1rem', 
                fontSize: '1.25rem', 
                fontWeight: 700, 
                color: 'var(--color-text)' 
            }}>
                {service.title}
            </h3>

            <p style={{ 
                marginTop: '0.5rem', 
                fontSize: '0.9rem', 
                color: 'var(--color-muted)' 
            }}>
                {service.summary}
            </p>
        </div>
    );
}