export default function AvisoPrivacidad() {
  // Clase base para la animación: Oculto al inicio + Animación en cascada
  const ANIMATION_CLASSES = "opacity-0 animate-fade-in-up";

  return (
    <main className="relative min-h-[70vh]">
      {/* Fondo sutil con toque de color */}
      <div 
        className="
          pointer-events-none absolute inset-0 
          bg-slate-50/50 
          bg-gradient-to-b from-white via-white to-slate-100/80
        " 
      />
      
      {/* Contenedor principal de la sección */}
      <section className="mx-auto w-full max-w-5xl px-4 py-12 relative">
        
        {/* Encabezado (Aparece primero: delay-150) */}
        <header className={`mb-8 ${ANIMATION_CLASSES} delay-150`}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Aviso de Privacidad
          </h1>
          <p className="mt-2 text-base font-medium text-blue-700">
            iComp — Protección y tratamiento de datos personales
          </p>
        </header>

        {/* Tarjeta del Aviso (Cuerpo, aparece segundo: delay-300) */}
        <article className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-300/20 sm:p-8 ${ANIMATION_CLASSES} delay-300`}>
          <div className="prose prose-slate max-w-none prose-a:text-blue-600 prose-a:font-medium">
            <p>
              <strong>iComp</strong>, es responsable del tratamiento de sus datos personales, con
              domicilio en Av. Juárez s/n, Colonia Francisco I Madero, Nicolás Romero, Estado de
              México, y los datos obtenidos son utilizados únicamente para proveer servicios y productos
              requeridos por nuestros clientes en materia de Tecnología de la Información, o en su caso,
              recibir los mismos por parte de nuestros proveedores.
            </p>

            <p>
              Usted por el hecho de enviar información por medio de esta dirección de correo
              electrónico, autoriza a iComp a administrar sus datos personales y a transferir los
              mismos a terceros cuando sea estrictamente necesario para otorgarle nuestros servicios.
            </p>

            <p>
              Se podrán realizar transferencias de su información para los fines antes mencionados,
              hacia autoridades, poderes, entidades, órganos y organismos gubernamentales de los tres
              órdenes de gobierno y personas físicas o morales, cuando así se requiera, se informará al
              titular de la información respecto de dicha transferencia a los medios de contacto que nos
              proporcionó.
            </p>

            <p>
              Cualquier duda o aclaración sobre el tratamiento de sus datos personales podrá (i) mandar
              dicha notificación a <a href="mailto:contacto@icomp.mx">contacto@icomp.mx</a> y hacer uso de sus
              derechos ARCO; o (ii) acceder a nuestro aviso de privacidad integral solicitándolo por
              medio del correo electrónico o de manera virtual en nuestra página de internet{" "}
              <a href="https://www.icomp.mx" target="_blank" rel="noreferrer">www.icomp.mx</a>, en la
              sección de aviso de privacidad.
            </p>
          </div>

          {/* Pie de la tarjeta / Datos de Contacto (Aparece al final: delay-450) */}
          <div className={`mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-2 ${ANIMATION_CLASSES} delay-450`}>
            {/* Tarjeta 1 */}
            <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4 transition duration-300 hover:bg-blue-100">
              <span className="block font-bold text-slate-800">Responsable</span>
              <span className="text-slate-700">iComp</span>
            </div>
            {/* Tarjeta 2 */}
            <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4 transition duration-300 hover:bg-blue-100">
              <span className="block font-bold text-slate-800">Contacto</span>
              <a 
                className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-700 transition"
                href="mailto:contacto@icomp.mx"
              >
                contacto@icomp.mx
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}