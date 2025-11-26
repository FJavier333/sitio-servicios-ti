import HeroImageLocal5 from "../assets/images/quienesomos.jpeg";

export default function QuienesSomos() {
  // 1. DATA: Definición de valores y KPIs
  // -----------------------------------------------------------------------
  const valores = [
    { t: "Excelencia (o Profesionalismo)", d: "Más de 15 años de experiencia nos respaldan; siempre buscamos las mejores soluciones basadas en las necesidades del cliente.", icon: "🏅" },
    { t: "Innovación", d: "Modernizamos la infraestructura desde un punto de vista objetivo, no como un negocio.", icon: "💡" },
    { t: "Confianza", d: "Salvaguardamos la información y aseguramos el correcto funcionamiento de las operaciones de nuestros clientes.", icon: "🛡️" },
    { t: "Orientación al Cliente", d: "La prioridad de iComp es asesorar con honestidad para decisiones correctas y una inversión costo–beneficio.", icon: "👤" },
  ];

  const kpis = [
    { n: "+15", l: "Años de experiencia" },
    { n: "+200", l: "Proyectos realizados" },
    { n: "100%", l: "Clientes satisfechos" },
    { n: "24/7", l: "Soporte garantizado" },
  ];

  // Estilos base para la animación: Oculto al inicio + Animación en cascada
  const ANIMATION_CLASSES = "opacity-0 animate-fade-in-up";

  // 2. RENDER: Estructura del componente
  // -----------------------------------------------------------------------
  return (
    <main className="relative overflow-hidden">
      {/* Fondo de gradiente suave con más contraste */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-slate-50/50 
          bg-gradient-to-b from-white via-white to-slate-100/80
        "
      />

      <section className="relative">
        <div
          className="
            mx-auto max-w-6xl px-4 sm:px-6 lg:px-8
            pt-8 sm:pt-10 pb-16
          "
        >
          {/* Bloque 1: HERO y Banda de KPIs - Aparece primero (delay-150) */}
          <div 
            className={`grid md:grid-cols-12 items-center gap-8 ${ANIMATION_CLASSES} delay-150`}
          >
            
            {/* Columna de Texto y KPIs (Izquierda) */}
            <div className="md:col-span-6">
              <span class="tag-ios">Nuestra Historia</span>

              <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                ¿Quiénes Somos?
              </h1>
              <p className="mt-3 text-base md:text-lg text-slate-700 leading-7 md:leading-8 max-w-[65ch]">
                Somos un grupo de ingenieros con más de 15 años de experiencia en TI. Nuestro objetivo es
                ofrecer soluciones tecnológicas para modernizar, optimizar y proteger el funcionamiento de tu empresa o negocio.
              </p>

              {/* Contenedor de KPIs */}
              <div
                className="
                  mt-6 rounded-2xl p-0
                  bg-white/90 ring-0 shadow-lg border border-blue-100/50
                "
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                  {kpis.map((k, i) => (
                    <div 
                      key={i} 
                      className="p-4 text-center hover:bg-blue-50/50 transition duration-200"
                    >
                      <div className="text-3xl font-extrabold text-blue-700">{k.n}</div>
                      <div className="text-xs mt-1 text-slate-600 font-medium">{k.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna de Imagen (Derecha) */}
            <div className="md:col-span-6">
              <div 
                className="relative rounded-3xl overflow-hidden ring-1 ring-slate-200 
                shadow-2xl shadow-blue-300/50 transition-shadow duration-300"
              >
                <img
                  src={HeroImageLocal5}
                  alt="Equipo de trabajo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent" />
              </div>
            </div>
          </div>

          {/* Bloque 2: Misión, Visión y Valores - Aparece después (delay-300) */}
          <div 
            className={`mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 ${ANIMATION_CLASSES} delay-300`}
          >
            
            {/* Columna Izquierda: Tarjetas Misión y Visión (Flexbox para altura 50/50) */}
            <div
                className="
                    lg:col-span-6 
                    flex flex-col gap-6 lg:h-auto 
                    h-full
                "
            >
              
              {/* Tarjeta: Misión - Se mueve con el padre, pero la hacemos aparecer un poco más tarde (delay-450) */}
              <article
                className={`
                  rounded-2xl p-6 md:p-7 shadow-lg flex-1
                  bg-white/90 ring-1 ring-slate-200
                  hover:shadow-xl hover:ring-blue-500/80 hover:bg-blue-50/50 transition-all duration-300
                  ${ANIMATION_CLASSES} delay-450
                `}
              >
                <h2 className="text-xl font-bold text-slate-900">Misión</h2>
                <p className="mt-2 text-slate-700 leading-7 md:leading-8 max-w-[70ch]">
                  Nuestra misión es potenciar el futuro de cada cliente al proveer soluciones tecnológicas innovadoras y de alta
                  seguridad que no solo optimizan y modernizan sus sistemas, sino que también generan la confianza necesaria para
                  el funcionamiento ininterrumpido de su negocio.
                </p>
              </article>

              {/* Tarjeta: Visión - Aparece aún más tarde (delay-600) */}
              <article
                className={`
                  rounded-2xl p-6 md:p-7 shadow-lg flex-1
                  bg-white/90 ring-1 ring-slate-200
                  hover:shadow-xl hover:ring-blue-500/80 hover:bg-blue-50/50 transition-all duration-300
                  ${ANIMATION_CLASSES} delay-600
                `}
              >
                <h2 className="text-xl font-bold text-slate-900">Visión</h2>
                <p className="mt-2 text-slate-700 leading-7 md:leading-8 max-w-[70ch]">
                  Lograr que cada empresa o negocio que servimos opere con sistemas totalmente optimizados, modernos y ciberseguros,
                  convirtiéndonos en el motor fundamental de su crecimiento y eficiencia operativa.
                </p>
              </article>
            </div>

            {/* Columna Derecha: Valores - Aparece más tarde (delay-750) */}
            <aside 
                className={`lg:col-span-6 ${ANIMATION_CLASSES} delay-750`}
            >
              <div
                className="
                  rounded-2xl p-6 md:p-7 shadow-2xl shadow-blue-300/50 
                  bg-white/90 ring-1 ring-slate-200
                "
              >
                <h2 className="text-xl font-bold text-slate-900">Valores</h2>
                
                {/* Rejilla de Valores */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {valores.map((v, i) => (
                    <div
                      key={i}
                      // El efecto de cascada continúa aquí si quieres que las tarjetas internas se animen (delay-...)
                      className="
                        rounded-xl p-5 ring-1 ring-slate-200 bg-white
                        hover:shadow-xl hover:ring-blue-500 hover:-translate-y-1 hover:bg-blue-50/50 transition-all duration-300
                      "
                    >
                      <div className="flex items-start gap-3">
                        {/* El ícono */}
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xl flex-shrink-0">{v.icon}</span>
                        {/* El título */}
                        <p className="font-semibold text-slate-800 leading-6">{v.t}</p>
                      </div>
                      <p className="mt-2 text-sm text-slate-600 leading-6">{v.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}