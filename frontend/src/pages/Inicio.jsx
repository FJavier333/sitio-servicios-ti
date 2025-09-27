// src/pages/Inicio.jsx
export default function Inicio() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      <section className="grid md:grid-cols-2 gap-10 items-center py-20 md:py-28">
        <div>
          <p className="inline-block rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium">
            Soluciones profesionales
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Soluciones de TI para tu negocio
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            iComp somos una empresa con mas de 15 años de experiencia, tenemos el firme objetivo de
            ofrecer a todos nuestros clientes las mejores soluciones en tecnología para modernizar,
            optimizar y proteger el funcionamiento de su empresa o negocio.
            
            Implementamos infraestructura, soporte y seguridad electrónica para optimizar procesos y
            hacer crecer tu empresa, desarrollo de software, instalación y mantenimiento de redes y
            compra y venta de equipos de cómputo.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700">
              Más información
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold border hover:bg-slate-50">
              Ver servicios
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 grid place-items-center">
            <div className="text-center p-8">
              <div className="text-6xl">📈🔐⚙️</div>
              <p className="mt-4 text-slate-500 text-sm">
                Aquí irá una imagen/ilustración del servicio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
