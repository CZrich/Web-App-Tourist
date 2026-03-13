
import AsideBar from '../Components/AsideBar'
import { Outlet } from 'react-router-dom'

export default function LayoutAdministrador() {
  return (
    <div className='flex min-h-screen bg-slate-50 relative'>
        <AsideBar />
        
        {/* Agregamos pb-24 para que el contenido nunca sea tapado por el menú móvil del AsideBar */}
        <main className='flex-1 p-4 md:p-8 pb-24 overflow-y-auto'>
            <Outlet />
        </main>
    </div>
  )
}