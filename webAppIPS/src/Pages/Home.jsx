import React from 'react';

const CardServicio = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:scale-[1.02]">
    <img src={icon} alt={title} className="w-12 h-12 mb-4" />
    <h3 className="text-lg font-bold text-slate-800">{title}</h3>
    <p className="text-slate-500 text-sm mt-1">{desc}</p>
  </div>
);

export default function Home() {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('assets/img/otro_fondo.jpg')" }}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Bienvenido a Acme Travel</h1>
          <p className="text-xl md:text-2xl font-light italic">Descubre los mejores destinos y paquetes turísticos</p>
        </div>
      </div>

      <div className='max-w-6xl mx-auto py-16 px-6'>
        {/* Grid Section: Servicios y Paquetes */}
        <div className='grid md:grid-cols-2 gap-16 mb-20'>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Servicios Turísticos</h2>
            <div className="grid grid-cols-2 gap-4">
              <CardServicio icon="/assets/icons/vuelos.png" title="Vuelos" desc="Reserva tus vuelos." />
              <CardServicio icon="/assets/icons/hoteles.png" title="Hoteles" desc="Alojamiento perfecto." />
              <CardServicio icon="/assets/icons/coches.png" title="Alquiler Autos" desc="Total libertad." />
              <CardServicio icon="/assets/icons/entradas.png" title="Entradas" desc="Eventos únicos." />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Paquetes Turísticos</h2>
            <div className="grid grid-cols-2 gap-4">
              <CardServicio icon="/assets/icons/playa.png" title="Playa" desc="Sol y arena." />
              <CardServicio icon="/assets/icons/montana.png" title="Montaña" desc="Naturaleza." />
              <CardServicio icon="/assets/icons/cuidad.png" title="Ciudad" desc="Cultura urbana." />
              <CardServicio icon="/assets/icons/familiar.png" title="Familiar" desc="Recuerdos inolvidables." />
            </div>
          </div>
        </div>

        {/* Sección Informativa: Sobre nosotros y Por qué elegirnos */}
        <div className='grid md:grid-cols-2 gap-12 bg-white p-10 rounded-3xl shadow-sm border border-slate-100'>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Sobre Nosotros</h2>
            <p className="text-slate-600 leading-relaxed">
              Somos una agencia de viajes líder en el mercado, con más de 20 años de experiencia. 
              Nos dedicamos a brindar a nuestros clientes una experiencia de viaje excepcional, 
              combinando pasión, tecnología y un servicio de primera clase.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">¿Por qué Elegirnos?</h2>
            <div className="space-y-6">
              {[
                { title: "Atención Personalizada", desc: "Expertos asesorándote para un viaje único." },
                { title: "Garantía de Calidad", desc: "Proveedores confiables y seleccionados." },
                { title: "Precios Competitivos", desc: "La mejor relación calidad-precio." }
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-slate-800">{item.title}</h3>
                  <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}