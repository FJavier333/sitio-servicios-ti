export default function Formulario() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900">Formulario de contacto</h1>
      <form className="mt-8 grid gap-4 max-w-xl">
        <input className="rounded-lg border border-slate-300 px-4 py-2" placeholder="Nombre" />
        <input className="rounded-lg border border-slate-300 px-4 py-2" placeholder="Correo" />
        <textarea className="rounded-lg border border-slate-300 px-4 py-2" rows="4" placeholder="Mensaje" />
        <button className="rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition btn-enviar-form">
  Enviar
</button>
      </form>
    </main>
  );
}