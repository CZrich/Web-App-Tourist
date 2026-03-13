import { useEffect, useState } from 'react'
import CardPaqueteTuristico from './Cards/CardPaqueteTuristico' 
import { getPaquetesTuristico } from '../Services/paquetes.turisticos'

export default function ListaPaquetes() {
    const [paquetes, setPaquetes] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function cargaPaquetes() {
            try {
                setLoading(true);
                const res = await getPaquetesTuristico();
                setPaquetes(res.data);
            } catch (error) {
                console.error("Error al cargar paquetes:", error);
            } finally {
                setLoading(false);
            }
        }
        cargaPaquetes();
    }, []);
   
  return (
    // Fondo limpio y estructura de Grid responsiva
    <div className='p-6 min-h-screen bg-slate-50'>
        <h1 className="text-2xl font-bold text-slate-800 mb-6">Paquetes Turísticos</h1>
        
        {loading ? (
            <div className="flex justify-center p-10 text-slate-500">Cargando paquetes...</div>
        ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {paquetes?.map((data) => (
                   <CardPaqueteTuristico key={data.paqcod} paquete={data}/>
                ))}
            </div>
        )}
    </div>
  )
}