import FormularioContacto from "../components/FormularioContacto";
import Partners from "../components/Partners";
import { Link } from "react-router-dom";
import { useTheme } from "../theme/ThemeProvider"; // Importamos el hook
import HeroImageLocal from "../assets/images/inicio.jpeg";

export default function Inicio() {
  // --- LÓGICA DE TEMA ---
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // --- VARIABLES DE COLOR OPTIMIZADAS PARA AMBOS MODOS ---
  
  // 1. Colores de la Etiqueta "Soluciones profesionales"
  // En Dark: Fondo más visible y texto más brillante.
  // En Light: Fondo sutil y texto oscuro.
  const tagBg = isDark ? "rgba(37,99,235,0.2)" : "rgba(37,99,235,0.12)";
  const tagText = isDark ? "rgb(96, 165, 250)" : "rgb(30,64,175)"; // text-blue-400 en Dark, text-blue-800 en Light

  // 2. Colores del Azul Destacado ("tecnología" y Métricas)
  // En Dark: Usamos un azul claro para contraste (ej: blue-400).
  // En Light: Usamos un azul oscuro y vibrante (ej: blue-700).
  const primaryBlue = isDark ? "rgb(96, 165, 250)" : "rgb(29, 78, 216)";

  // --- FIN VARIABLES DE COLOR ---
  
  // Clase base para la animación: Oculto al inicio + Animación en cascada
  const ANIMATION_CLASSES = "opacity-0 animate-fade-in-up";
  
  // URL de la imagen de tecnología (Abstracta y Corporativa)
  const HERO_IMAGE_URL = HeroImageLocal;
// ... (la otra URL está comentada, no la necesitamos)

  return (
    <main className="relative overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Fondo degradado suave con toque de color (ya usa variables) */}
      <div className="hero-overlay" />

      {/* Sección HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-2">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            
            {/* Columna izquierda: Contenido principal (delay-150) */}
            <div className={`${ANIMATION_CLASSES} delay-150`}>
              {/* Etiqueta - CORREGIDA */}
              <span class="tag-ios">Soluciones profesionales</span>

              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[var(--color-text)]">
                Soluciones de TI para tu negocio o empresa.
              </h1>

              <p className="mt-5 text-lg text-[var(--color-muted)]">
                iComp somos una empresa con más de 15 años de experiencia, con el firme
                objetivo de ofrecer a nuestros clientes soluciones en{" "}
                <span className="font-semibold" style={{ color: primaryBlue }}>tecnología</span> {/* CORREGIDO */}
                para modernizar, optimizar y proteger
                el funcionamiento de su empresa o negocio.
              </p>

              <p className="mt-5 text-lg text-[var(--color-muted)]">
                Implementamos infraestructura, soporte y seguridad electrónica para
                optimizar procesos y hacer crecer tu empresa: desarrollo de software,
                instalación y mantenimiento de redes y compra/venta de equipos de cómputo.
              </p>

              {/* CTAs (delay-300) - YA USAN VAR(--COLOR-PRIMARY) que debe ser responsivo al tema */}
              <div className={`mt-8 flex flex-wrap gap-4 ${ANIMATION_CLASSES} delay-300`}>
                <Link
                  to="/servicios"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold shadow-lg shadow-blue-500/50 hover:scale-[1.02] transition-all duration-300 bg-[var(--color-primary)] text-white"
                >
                  Ver servicios
                </Link>

                <Link
                  to="/quienes-somos"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 border text-[var(--color-text)] hover:bg-[color:rgba(37,99,235,0.06)] border-[var(--color-border)]"
                >
                  Más información
                </Link>
              </div>

              {/* Mini métricas (delay-450) - CORREGIDAS */}
              <div className={`mt-10 grid grid-cols-3 gap-6 max-w-md ${ANIMATION_CLASSES} delay-450`}>
                <div>
                  <div className="text-3xl font-extrabold" style={{ color: primaryBlue }}>15+</div> {/* CORREGIDO */}
                  <div className="text-sm font-medium text-[var(--color-muted)]">Años de experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold" style={{ color: primaryBlue }}>100%</div> {/* CORREGIDO */}
                  <div className="text-sm font-medium text-[var(--color-muted)]">Clientes satisfechos</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold" style={{ color: primaryBlue }}>24/7</div> {/* CORREGIDO */}
                  <div className="text-sm font-medium text-[var(--color-muted)]">Soporte</div>
                </div>
              </div>
            </div>

            {/* Columna derecha: IMAGEN DE TECNOLOGÍA (delay-600) */}
            <div className={`relative ${ANIMATION_CLASSES} delay-600`}>
              <div
                className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl shadow-blue-300/50 bg-[var(--color-surface)]"
              >
                <img
                  src={HERO_IMAGE_URL}
                  alt="Tecnología de redes abstracta"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Partners (delay-750) */}
      <section className={`relative pt-1 sm:pt-2 pb-0 ${ANIMATION_CLASSES} delay-750`}>
        <div className="mt-10">
          <Partners />
        </div>
      </section>
      
      {/* SECCIÓN DE CONTACTO AL FINAL - Corregido el fondo por si acaso */}
      <section 
        className={`relative py-12 sm:py-6 ${ANIMATION_CLASSES} delay-900 bg-[var(--color-bg)]`}
      >
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[var(--color-text)]">
            ¿Listo para modernizar tu empresa?
          </h2>
          <p className="mt-4 text-lg text-center max-w-2xl mx-auto text-[var(--color-muted)]">
            Envíanos un mensaje y un especialista en TI se pondrá en contacto contigo para una asesoría sin compromiso.
          </p>
          {/* Fondo del Formulario - CORREGIDO LA SOMBRA */}
          <div 
            className="mt-10 rounded-3xl ring-1 p-6 sm:p-8 bg-[var(--color-surface)] ring-[var(--color-border)]"
            // La sombra azul fuerte no funciona bien en dark mode, la eliminamos de esta clase
            style={{ boxShadow: isDark ? '0 20px 25px -5px rgba(0,0,0,0.4), 0 10px 10px -5px rgba(0,0,0,0.2)' : '0 20px 25px -5px rgba(59,130,246,0.3), 0 10px 10px -5px rgba(59,130,246,0.1)' }}
          >
            <FormularioContacto />
          </div>
        </div>

    {/* MAPA INTERACTIVO Y CONTACTO EN COLUMNAS */}
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-12">
        <h3 className="text-2xl font-bold text-center mb-8 text-[var(--color-text)]">
            Nuestra Ubicación
        </h3>
        
        {/* === CONTENEDOR DE LA GRILLA: Información y Mapa === */}
        {/* En mobile se apila, en desktop 2 columnas (1/3 y 2/3) */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            
            {/* 1. COLUMNA DE CONTACTO (1/3 del ancho en desktop) */}
            <div className="col-span-1 flex flex-col gap-6 text-[var(--color-text)]">
                
                {/* --- Bloque de Ubicación --- */}
                <div className="flex items-start gap-3"> {/* Icono y texto alineados */}
                    {/* Icono más pequeño y alineado */}
                    <span className="text-2xl mt-1" style={{ color: primaryBlue }}>📍</span> 
                    <p className="text-base font-semibold">
                        54434, Colonia Hidalgo, 
                        <br /> Cdad. Nicolás Romero, 
                        <br /> Estado de México, México.
                    </p>
                </div>

                {/* --- Bloque de Teléfonos --- */}
                <div className="flex items-start gap-3"> {/* Icono y texto alineados */}
                    {/* Icono de teléfono */}
                    <span className="text-2xl mt-1" style={{ color: primaryBlue }}>📞</span>
                    <div> {/* Contenedor para los números */}
                        <p className="text-base font-semibold mb-1">Llámanos</p>
                        <ul className="list-none p-0 m-0">
                            {/* Teléfono 1 */}
                            <li className="flex items-center gap-2 text-[var(--color-muted)] text-sm"> {/* Texto más pequeño */}
                                <span style={{ color: primaryBlue }}>✓</span> 55 7071 3137
                            </li>
                            {/* Teléfono 2 */}
                            <li className="flex items-center gap-2 text-[var(--color-muted)] text-sm"> {/* Texto más pequeño */}
                                <span style={{ color: primaryBlue }}>✓</span> 55 6138 5561
                            </li>
                        </ul>
                    </div>
                </div>
            </div> {/* Fin Columna 1 */}


            {/* 2. COLUMNA DEL MAPA (2/3 del ancho en desktop) */}
            <div className="col-span-2"> {/* Ocupa 2/3 del ancho en desktop */}
                <div 
                    className="rounded-3xl shadow-xl ring-1 ring-[var(--color-border)] bg-[var(--color-surface)]"
                    style={{ overflow: 'hidden' }}
                >
                    <iframe 
                        // =======================================================
                        // ¡IMPORTANTE! PEGA AQUÍ EL CÓDIGO SRC REAL DE TU GOOGLE MAPS
                        // =======================================================
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3758.22315864535!2d-99.3173949!3d19.617755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2197c6310af09%3A0xcf9a2feca32d7ce3!2sEl%20Charco%20Nicol%C3%A1s%20Romero!5e0!3m2!1ses-419!2smx!4v1763078429531!5m2!1ses-419!2smx"
                        width="100%" 
                        height="450" // Altura fija para el mapa
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación de la oficina"
                    ></iframe>
                </div>
            </div> {/* Fin Columna 2 */}
            
        </div> {/* Fin Grid */}
    </div> {/* Fin max-w-6xl */}
    </section>

    </main>
  );
}