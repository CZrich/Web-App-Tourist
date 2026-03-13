
import FormServicio from '../Components/Forms/FormServicio'


export default function PanelServicios() {
 return (
    <div className='max-w-6xl mx-auto space-y-10'>
      <header className='flex justify-between items-center border-b pb-4'>
          <h1 className='text-3xl font-extrabold text-slate-800 tracking-tight'>
            Gestión de Servicios
          </h1>
          <span className='bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold'>
            Panel de Control
          </span>
      </header>

      {/* El Formulario ahora ocupa todo el ancho arriba */}
      <section className='bg-white p-6 rounded-2xl shadow-sm border border-slate-200'>
          <FormServicio />
      </section>
    </div>
  )
}