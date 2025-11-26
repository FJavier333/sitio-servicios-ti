// frontend/src/components/Partners.jsx
import { useTheme } from "../theme/ThemeProvider"; 

export default function Partners() {
  // --- LÓGICA DE TEMA (Se mantiene para los textos) ---
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // --- VARIABLES DE COLOR OPTIMIZADAS ---
  const primaryBlue = isDark ? "rgb(96, 165, 250)" : "rgb(29, 78, 216)"; 

  // Clase base para la animación: Oculto al inicio + Animación en cascada
  const ANIMATION_CLASSES = "opacity-0 animate-fade-in-up";
  
  // Logos de las marcas **CON URL**
  const logos = [
    { src: "/logos/hikvision.png", alt: "Hikvision", url: "https://www.hikvision.com" },
    { src: "/logos/dahua.png", alt: "Dahua", url: "https://www.dahuatech.com" },
    { src: "/logos/meriva.png", alt: "Meriva", url: "https://merivatechnology.com/" },
    { src: "/logos/unv.png", alt: "Unv", url: "https://en.uniview.com" },
    { src: "/logos/zkteco.png", alt: "ZKTeco", url: "https://www.zkteco.com" },
    { src: "/logos/panduit.png", alt: "Panduit", url: "https://www.panduit.com" },
    { src: "/logos/velden.png", alt: "Velden", url: "https://www.veldenengineering.co.uk/" },
    { src: "/logos/adobe.png", alt: "Adobe", url: "https://www.adobe.com" },
  ];

  return (
    <section
      id="partners"
      aria-labelledby="partners-title"
      className={`relative mt-2 pb-14 sm:pb-16 ${ANIMATION_CLASSES} delay-150`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Título de acento */}
        <h2
          id="partners-title"
          className={`text-center text-base font-bold tracking-wider uppercase ${ANIMATION_CLASSES} delay-300`}
          style={{ color: primaryBlue }}
        >
          Marcas y aliados
        </h2>
        
        {/* Título principal */}
        <p className={`mt-2 text-center text-3xl md:text-4xl font-extrabold text-[var(--color-text)] ${ANIMATION_CLASSES} delay-450`}>
          Trabajamos con tecnología de clase mundial
        </p>

        {/* Subtítulo */}
        <p className={`mt-4 text-center max-w-3xl mx-auto text-[var(--color-muted)] ${ANIMATION_CLASSES} delay-600`}>
          Encuentra con nosotros 
          <span className="font-bold" style={{ color: primaryBlue }}> los mejores productos</span>, 
          somos distribuidores autorizados de distintas marcas de software, hardware 
          y equipos de impresión.
        </p>

        {/* Rejilla de Logos */}
        <div className={`mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 ${ANIMATION_CLASSES} delay-750`}>
          {logos.map((logo, i) => (
            <a 
              key={i}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div
                className={`
                  partner-card
                  rounded-2xl bg-white ring-1 shadow-lg 
                  hover:shadow-xl transition-all duration-300
                  aspect-square overflow-hidden flex items-center justify-center p-6
                  ${
                    isDark 
                      ? 'shadow-gray-700/30 hover:shadow-blue-500/50 hover:ring-blue-500'
                      : 'shadow-blue-300/50 hover:shadow-blue-500/50 hover:ring-blue-500 ring-slate-200'
                  }
                  hover:scale-[1.02]
                `}
                style={{ 
                  backgroundColor: 'white', 
                  borderColor: 'rgb(226, 232, 240)',
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-20 sm:max-h-24 w-auto object-contain partner-logo"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}