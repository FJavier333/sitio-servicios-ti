import React, { useState } from 'react'; 
import { Link } from "react-router-dom"; 
import { useTheme } from "../theme/ThemeProvider"; 
import ServiceCard from "../components/ServiceCard";
import ServiceModal from "../components/ServiceModal";
import ContactModal from "../components/ContactModal"; // <-- ¡NECESARIO!

// ----------------- Importaciones de imágenes locales existentes para sección de tarjetas flotantes: -----------------
//Mantenimiento:
import ImgMantenimiento1 from "../assets/images/mtto1.jpeg";
import ImgMantenimiento2 from "../assets/images/mtto2.jpeg";
import ImgMantenimiento3 from "../assets/images/mtto3.jpeg";
import ImgMantenimiento4 from "../assets/images/mtto4.jpeg";

//Redes:
import ImgRedes1 from "../assets/images/redes1.jpeg";
import ImgRedes2 from "../assets/images/redes2.jpeg";
import ImgRedes3 from "../assets/images/redes3.jpeg";
import ImgRedes4 from "../assets/images/redes4.jpeg";

//CCTV:
import ImgCCTV1 from "../assets/images/cctv1.jpeg";
import ImgCCTV2 from "../assets/images/cctv2.jpeg";
import ImgCCTV3 from "../assets/images/cctv3.jpeg";
import ImgCCTV4 from "../assets/images/cctv4.jpeg";

//Compra/Venta de equipos de cómputo:
import ImgCYV1 from "../assets/images/cyv1.jpeg";
import ImgCYV2 from "../assets/images/cyv2.jpeg";
import ImgCYV3 from "../assets/images/cyv3.jpeg";
import ImgCYV4 from "../assets/images/cyv4.jpeg";

//Soporte tpecnico y mesa de ayuda:
import ImgSTE1 from "../assets/images/ste1.jpeg";
import ImgSTE2 from "../assets/images/ste2.jpeg";
import ImgSTE3 from "../assets/images/ste3.jpeg";
import ImgSTE4 from "../assets/images/ste4.jpeg";

//Seguridad electrónica:
import ImgSEG1 from "../assets/images/seg1.jpeg";
import ImgSEG2 from "../assets/images/seg2.jpeg";
import ImgSEG3 from "../assets/images/seg3.jpeg";
import ImgSEG4 from "../assets/images/seg4.jpeg";

// ----------------- Importaciones de imágenes locales existentes para sección de presentación: -----------------
import HeroImageLocal1 from "../assets/images/servicios1.jpeg";
import HeroImageLocal2 from "../assets/images/servicios2.jpeg";
import HeroImageLocal3 from "../assets/images/servicios3.jpeg";
import HeroImageLocal4 from "../assets/images/servicios4.jpeg";

// --- DATOS COMPLETOS DE SERVICIOS (CON fullDescription) ---
const servicesData = [
    { 
        id: 1, 
        title: "Mantenimiento preventivo y correctivo.", 
        summary: "Planes preventivos/correctivos, optimización, reparación y soporte técnico.", 
        fullDescription: "Nuestro Mantenimiento Preventivo incluye diagnóstico profundo de hardware y software, limpieza física y virtual, y actualización de sistemas. El Correctivo cubre reparaciones de fallas críticas de equipo y sistema operativo con tiempos de respuesta garantizados por SLA (Acuerdo de nivel de servicio).",
        icon: "🛠️",
        color: "#d946ef", // Morado
        modalImageURLs: [
            ImgMantenimiento1,
            ImgMantenimiento2,
            ImgMantenimiento3,
            ImgMantenimiento4,
        ],
    },
    { 
        id: 2, 
        title: "Redes de voz y datos.", 
        summary: "Diseño e instalación de redes, cableado estructurado, switches, Wi-Fi empresarial y segmentación segura.", 
        fullDescription: "Realizamos el diseño de infraestructura de red completa, incluyendo cableado estructurado (Cat 6/6A), configuración de VLANs, implementación de Wi-Fi de alta densidad y políticas de seguridad para garantizar una conectividad rápida y protegida.",
        icon: "🌐",
        color: "#3b82f6", // Azul
        modalImageURLs: [
            ImgRedes1, ImgRedes2, ImgRedes3, ImgRedes4,
        ],
    },
    { 
        id: 3, 
        title: "CCTV, sistemas de videovigilancia y grabación.", 
        summary: "Instalación de cámaras, sistemas de vigilancia, control de acceso y monitoreo.", 
        fullDescription: "Implementamos sistemas de videovigilancia CCTV con marcas líderes (Hikvision, Dahua), incluyendo cámaras IP, grabación en NVRs, acceso remoto y analítica de video. También cubrimos sistemas de control de acceso biométrico.",
        icon: "📷",
        color: "#f59e0b", // Naranja
        modalImageURLs: [
            ImgCCTV1, ImgCCTV2, ImgCCTV3, ImgCCTV4,
        ],
    },
    { 
        id: 4, 
        title: "Compra venta de equipos de cómputo.", 
        summary: "Compra y venta de equipos, incluyendo su instalación y configuración inicial.", 
        fullDescription: "Ofrecemos equipos de cómputo, servidores y periféricos de grado empresarial. Incluimos el servicio de configuración inicial, instalación de software base y migración de datos para que el puesto de trabajo esté listo para operar desde el primer momento.",
        icon: "🖥️️",
        color: "#10b981", // Verde
        modalImageURLs: [
            ImgCYV1, ImgCYV2, ImgCYV3, ImgCYV4,
        ],
    },
    { 
        id: 5, 
        title: "Soporte técnico y mesa de ayuda.", 
        summary: "Asistencia técnica general y resolución de problemas mas complejos y específicos.", 
        fullDescription: "Nuestra mesa de ayuda ofrece soporte remoto y presencial con técnicos certificados. Cubrimos desde problemas de software comunes hasta fallas de hardware, garantizando un Service Level Agreement (SLA) para minimizar el tiempo de inactividad.",
        icon: "⚙️",
        color: "#9333ea", // Morado claro
        modalImageURLs: [
            ImgSTE1, ImgSTE2, ImgSTE3, ImgSTE4,
        ],
    },
    { 
        id: 6, 
        title: "Seguridad electrónica y control de acceso.", 
        summary: "Implementación de sistemas tecnológicos (videovigilancia, alarmas) y mecanismos de control de acceso para la protección integral de instalaciones.", 
        fullDescription: "Nos especializamos en la protección integral: alarmas, sensores de movimiento, cercas eléctricas y sistemas de control de acceso biométrico o con tarjeta. Implementamos soluciones escalables que se integran con tu infraestructura de red.",
        icon: "🔒",
        color: "#f97316", // Naranja brillante
        modalImageURLs: [
            ImgSEG1, ImgSEG2, ImgSEG3, ImgSEG4,
        ],
    },
];

export default function NuestrosServicios() {
    // --- LÓGICA DE TEMA Y ESTADO ---
    const { theme } = useTheme(); 
    const isDark = theme === "dark";

    // ESTADOS NECESARIOS
    const [selectedService, setSelectedService] = useState(null);
    const [showContactModal, setShowContactModal] = useState(false); // <-- AGREGADO: Estado para el modal de contacto

    // Clase base para la animación: Oculto al inicio + Animación en cascada
    const ANIMATION_CLASSES = "opacity-0 animate-fade-in-up";

    // URLs de imágenes para el collage (PlANTA DE EN MEDIO)
    const COLLAGE_IMAGES = [
        HeroImageLocal1,
        HeroImageLocal2,
        HeroImageLocal3,
        HeroImageLocal4
    ];

    // Variables de color para el Hero (Asegurar que cambien con el tema)
    const tagBg = isDark ? "rgba(37,99,235,0.2)" : "rgba(37,99,235,0.12)";
    const tagText = isDark ? "rgb(96, 165, 250)" : "rgb(30,64,175)";

    return (
        <main className="relative bg-[var(--color-bg)]">
            {/* Fondo sutil con toque de color (Actualizado para usar variables dinámicas) */}
            <div 
                className="pointer-events-none absolute inset-0" 
                style={{ 
                    background: isDark 
                        ? 'linear-gradient(to bottom, rgba(15,23,42,0.8), rgba(2,6,23,0.8))' 
                        : 'linear-gradient(to bottom, #ffffff, #f1f5f9)', 
                    opacity: 0.9 
                }}
            />

            {/* Hero */}
            <section className="relative">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-0">
                    <div className={`text-center max-w-3xl mx-auto ${ANIMATION_CLASSES} delay-150`}>
                        {/* Etiqueta */}
                        <span class="tag-ios">Catálogo de servicios</span>
                        
                        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[var(--color-text)]">
                            Nuestros servicios
                        </h1>
                        
                        <p className="mt-5 text-lg text-[var(--color-muted)]">
                            Soluciones de TI integrales para modernizar, optimizar y proteger tu empresa:
                            desde equipos y redes hasta software a la medida y seguridad electrónica.
                        </p>
                        
                        {/* CTAs - Aparecen después del texto (delay-300) */}
                        <div className={`mt-8 flex justify-center gap-4 ${ANIMATION_CLASSES} delay-300`}>
                            <a href="#grid-servicios" className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] text-white px-6 py-3 font-semibold shadow-lg shadow-blue-500/50 hover:opacity-90 hover:scale-[1.02] transition-all duration-300">
                                Ver servicios
                            </a>
                            
                            {/* BOTÓN 1: Solicitar información - MODIFICADO para abrir el modal */}
                            <button 
                                onClick={() => setShowContactModal(true)} // <-- Lógica para abrir
                                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-surface)] hover:opacity-80 transition-all duration-300"
                            >
                                Solicitar información
                            </button>
                        </div>
                    </div>
                </div>

                {/* === COLLAGE DE IMÁGENES === */}
                <div className={`mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-16 ${ANIMATION_CLASSES} delay-450`}>
                    <div className="grid grid-cols-2 gap-4 rounded-3xl overflow-hidden shadow-2xl shadow-blue-300/50">
                        {COLLAGE_IMAGES.map((src, index) => (
                            <div key={index} className="aspect-video relative overflow-hidden bg-[var(--color-surface)]">
                                <img
                                    src={src}
                                    alt={`Collage de Servicios de TI ${index + 1}`}
                                    className="w-full h-full object-cover transition-all duration-500 hover:scale-[1.05]"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid de servicios (Bloque principal: delay-600) */}
            <section id="grid-servicios" className="relative">
                <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 ${ANIMATION_CLASSES} delay-600`}> 
                    
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        
                        {/* === RENDERIZACIÓN DINÁMICA DE TARJETAS === */}
                        {servicesData.map(service => (
                            <ServiceCard 
                                key={service.id} 
                                service={service} 
                                onOpen={setSelectedService} 
                            />
                        ))}
                        {/* ========================================= */}

                    </div>

                    {/* Paquetes / Destacados (Bloque 2: delay-750) */}
                    <section className={`mt-16 ${ANIMATION_CLASSES} delay-750`}>
                        {/* ... (Contenido de Paquetes) ... */}
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">Paquetes destacados.</h2>
                            <p className="mt-4 text-lg text-[var(--color-muted)]">
                                Elige la solución que mejor se adapta al momento de tu empresa. Todos son escalables.
                            </p>
                        </div>

                        {/* Grid de Paquetes (Asegurar que los colores sean dinámicos) */}
                        <div className="mt-10 grid gap-8 md:grid-cols-3">
                            {/* Paquete 1 - Redes Seguras */}
                            <article className="rounded-2xl bg-[var(--color-surface)] shadow-lg ring-1 ring-[var(--color-border)] p-8 hover:shadow-xl hover:shadow-blue-300/30 transition flex flex-col">
                                <div className="text-5xl mb-4 text-[var(--color-primary)]">🌐</div>
                                <h3 className="text-xl font-bold text-[var(--color-text)]">Redes Seguras</h3>
                                <p className="mt-2 text-[var(--color-muted)] text-sm">
                                    Conecta tus áreas con Wi-Fi empresarial y segmentación segura.
                                </p>
                                <ul className="mt-5 space-y-2 text-sm text-[var(--color-muted)]">
                                    <li className="flex gap-2 font-medium"><span style={{ color: 'var(--color-primary)' }}>✅</span><span>Site survey y diseño de red</span></li>
                                    <li className="flex gap-2 font-medium"><span style={{ color: 'var(--color-primary)' }}>✅</span><span>Switching + Access Points</span></li>
                                    <li className="flex gap-2 font-medium"><span style={{ color: 'var(--color-primary)' }}>✅</span><span>VLANs y políticas básicas</span></li>
                                    <li className="flex gap-2 font-medium"><span style={{ color: 'var(--color-primary)' }}>✅</span><span>Documentación y capacitación</span></li>
                                </ul>
                                <div className="mt-6">
                                    {/* Botón de paquete: MODIFICADO para abrir el modal */}
                                    <button 
                                        onClick={() => setShowContactModal(true)}
                                        className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-6 py-3 text-white font-semibold shadow-lg shadow-blue-500/50 hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
                                    >
                                        +Info
                                    </button>
                                </div>
                            </article>
                            
                            {/* Paquete 2 - Cómputo Empresarial */}
                            <article className="rounded-2xl bg-[var(--color-surface)] shadow-lg ring-1 ring-[var(--color-border)] p-8 hover:shadow-xl hover:shadow-blue-300/30 transition flex flex-col">
                                <div className="text-5xl mb-4 text-[var(--color-primary)]">🖥️</div>
                                <h3 className="text-xl font-bold text-[var(--color-text)]">Cómputo Empresarial</h3>
                                <p className="mt-2 text-[var(--color-muted)] text-sm">
                                    Puestos de trabajo listos para operar desde el día uno.
                                </p>
                                <ul className="mt-5 space-y-2 text-sm text-[var(--color-muted)]">
                                    <li className="flex gap-2 font-medium"><span style={{ color: 'var(--color-primary)' }}>✅</span><span>Equipos configurados y con garantía</span></li>
                                    <li className="flex gap-2 font-medium"><span style={{ color: 'var(--color-primary)' }}>✅</span><span>Software y políticas básicas</span></li>
                                    <li className="flex gap-2 font-medium"><span style={{ color: 'var(--color-primary)' }}>✅</span><span>Respaldo inicial y antivirus</span></li>
                                    <li className="flex gap-2 font-medium"><span style={{ color: 'var(--color-primary)' }}>✅</span><span>Soporte remoto 30 días</span></li>
                                </ul>
                                <div className="mt-6">
                                    {/* Botón de paquete: MODIFICADO para abrir el modal */}
                                    <button 
                                        onClick={() => setShowContactModal(true)}
                                        className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-6 py-3 text-white font-semibold shadow-lg shadow-blue-500/50 hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
                                    >
                                        +Info
                                    </button>
                                </div>
                            </article>

                            {/* Paquete 3 - Software a la Medida */}
                            <article className="rounded-2xl bg-[var(--color-surface)] shadow-lg ring-1 ring-[var(--color-border)] p-8 hover:shadow-xl hover:shadow-blue-300/30 transition flex flex-col">
                                <div className="text-5xl mb-4 text-[var(--color-primary)]">⚙️</div>
                                <h3 className="text-xl font-bold text-[var(--color-text)]">Software a la Medida</h3>
                                <p className="mt-2 text-[var(--color-muted)] text-sm">
                                    Automatiza procesos y obtén reportes clave para decisiones.
                                </p>
                                <ul className="mt-5 space-y-2 text-sm text-[var(--color-muted)]">
                                    <li className="flex gap-2 font-medium"><span style={{ color: 'var(--color-primary)' }}>✅</span><span>Relevamiento y UX básico</span></li>
                                    <li className="flex gap-2 font-medium"><span style={{ color: 'var(--color-primary)' }}>✅</span><span>MVP web responsivo</span></li>
                                    <li className="flex gap-2 font-medium"><span style={{ color: 'var(--color-primary)' }}>✅</span><span>Integración con tu base de datos</span></li>
                                    <li className="flex gap-2 font-medium"><span style={{ color: 'var(--color-primary)' }}>✅</span><span>Entrenamiento y soporte inicial</span></li>
                                </ul>
                                <div className="mt-6">
                                    {/* Botón de paquete: MODIFICADO para abrir el modal */}
                                    <button 
                                        onClick={() => setShowContactModal(true)}
                                        className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-6 py-3 text-white font-semibold shadow-lg shadow-blue-500/50 hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
                                    >
                                        +Info
                                    </button>
                                </div>
                            </article>
                        </div>
                    </section>

                    {/* Proceso en 3 pasos (Bloque 3: dinámico) */}
                    <section className={`mt-20 ${ANIMATION_CLASSES} delay-900`}>
                        {/* ... (Contenido de Proceso) ... */}
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">¿Cómo trabajamos?</h2>
                            <p className="mt-4 text-lg text-[var(--color-muted)]">
                                Acompañamos a tu organización de principio a fin con un enfoque claro y práctico.
                            </p>
                        </div>
                        <div className="mt-10 grid gap-8 md:grid-cols-3">
                             {/* Bloques de proceso... */ }
                            <div className="rounded-2xl bg-[var(--color-surface)] p-8 ring-1 ring-[var(--color-border)] shadow-lg hover:shadow-xl hover:shadow-blue-300/30 transition">
                                <div className="text-2xl font-bold text-[var(--color-primary)]">1. Descubrimiento</div>
                                <p className="mt-3 text-[var(--color-muted)] text-sm">
                                    Levantamiento de requerimientos, revisión de infraestructura y objetivos.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-[var(--color-surface)] p-8 ring-1 ring-[var(--color-border)] shadow-lg hover:shadow-xl hover:shadow-blue-300/30 transition">
                                <div className="text-2xl font-bold text-[var(--color-primary)]">2. Propuesta</div>
                                <p className="mt-3 text-[var(--color-muted)] text-sm">
                                    Solución técnica, alcances, tiempos y presupuesto transparente.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-[var(--color-surface)] p-8 ring-1 ring-[var(--color-border)] shadow-lg hover:shadow-xl hover:shadow-blue-300/30 transition">
                                <div className="text-2xl font-bold text-[var(--color-primary)]">3. Implementación</div>
                                <p className="mt-3 text-[var(--color-muted)] text-sm">
                                    Despliegue, pruebas, documentación y capacitación del equipo.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FAQ (Bloque 4: dinámico) */}
                    <section className={`mt-20 ${ANIMATION_CLASSES} delay-[1050ms]`}>
                         {/* ... (Contenido FAQ) ... */}
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">Preguntas frecuentes</h2>
                            <p className="mt-4 text-lg text-[var(--color-muted)]">
                                Si tienes otra duda, contáctanos y te respondemos a la brevedad.
                            </p>
                        </div>
                        <div className="mt-10 grid gap-6 md:grid-cols-2">
                             {/* Bloques de FAQ... */ }
                            <div className="rounded-2xl bg-[var(--color-surface)] p-6 ring-1 ring-[var(--color-border)] shadow-md hover:shadow-lg hover:ring-[var(--color-primary)] transition">
                                <h3 className="font-semibold text-[var(--color-text)]">¿Trabajan con empresas de cualquier tamaño?</h3>
                                <p className="mt-2 text-[var(--color-muted)] text-sm">
                                    Sí, apoyamos desde pymes hasta corporativos. Adecuamos el alcance a tu contexto.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-[var(--color-surface)] p-6 ring-1 ring-[var(--color-border)] shadow-md hover:shadow-lg hover:ring-[var(--color-primary)] transition">
                                <h3 className="font-semibold text-[var(--color-text)]">¿Ofrecen soporte posterior a la implementación?</h3>
                                <p className="mt-2 text-[var(--color-muted)] text-sm">
                                    Contamos con planes de soporte y mantenimiento preventivo/correctivo con SLA.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-[var(--color-surface)] p-6 ring-1 ring-[var(--color-border)] shadow-md hover:shadow-lg hover:ring-[var(--color-primary)] transition">
                                <h3 className="font-semibold text-[var(--color-text)]">¿Pueden integrarse con sistemas existentes?</h3>
                                <p className="mt-2 text-[var(--color-muted)] text-sm">
                                    Sí, evaluamos APIs y bases de datos para proponer la integración adecuada.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-[var(--color-surface)] p-6 ring-1 ring-[var(--color-border)] shadow-md hover:shadow-lg hover:ring-[var(--color-primary)] transition">
                                <h3 className="font-semibold text-[var(--color-text)]">¿Cuánto tarda un proyecto típico?</h3>
                                <p className="mt-2 text-[var(--color-muted)] text-sm">
                                    Depende del alcance; tras el descubrimiento entregamos un cronograma claro.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CTA inferior (Bloque 5: dinámico) */}
                    <div className={`mt-16 text-center ${ANIMATION_CLASSES} delay-[1200ms]`}>
                        {/* BOTÓN CTA INFERIOR: MODIFICADO para abrir el modal */}
                        <button
                            onClick={() => setShowContactModal(true)}
                            className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-6 py-3 text-white font-semibold shadow-lg shadow-blue-500/50 hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
                        >
                            Contactar
                        </button>
                    </div>
                </div>
            </section>
            
            {/* 2. RENDERIZADO DEL MODAL DE SERVICIOS */}
            <ServiceModal 
                service={selectedService} 
                onClose={() => setSelectedService(null)} 
            />

            {/* 3. RENDERIZADO DEL MODAL DE CONTACTO */}
            <ContactModal 
                isVisible={showContactModal}
                onClose={() => setShowContactModal(false)}
            />

        </main>
    );
}