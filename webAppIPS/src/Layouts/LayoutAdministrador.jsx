
import AsideBar from '../Components/AsideBar'
import { Outlet } from 'react-router-dom'

export default function LayoutAdministrador() {
  return (
    // Agregamos h-screen para asegurar que el Layout llene la pantalla
    <div className='flex h-screen w-full bg-slate-50'>
        {/* Usamos flex-shrink-0 para que el AsideBar NUNCA se encoja */}
        <div className="flex-shrink-0">
            <AsideBar />
        </div>
        
        {/* Flex-1 hace que esto ocupe todo el espacio sobrante */}
        <main className='flex-1 p-4 md:p-8 pb-24 overflow-y-auto'>
            <Outlet />
        </main>
    </div>
  )
}