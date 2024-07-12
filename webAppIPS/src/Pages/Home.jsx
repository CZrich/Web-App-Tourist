import React from 'react';
//import avion from "/assets/icons/vuelos.png"
export default function Home() {
  return (
    <div className='h-100% '>
      <div className=" flex  items-center justify-center h-[50vh] bg-cover bg-center bg-[url('assets/img/otro_fondo.jpg')]  backdrop-blur-sm bg-white/30">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>

        <div className="relative z-10 flex items-center justify-center h-full">

          <div className=" flex justify-center items-center   flex-col bg-white bg-opacity-10 backdrop-blur-md p-4 rounded">
            <h1 className="text-black text-[4rem] font-bold">Bienvenido a MariaBelen Travel</h1>
            <p className="text-3xl mb-8"> <i> Descubre los mejores destinos y paquetes turísticos</i></p>
          </div>
        </div>
      </div>
      <div className='flex  bg-stone-200 justify-center space-around'>
        <div className="m-8 w-[548px]">
          <h2 className="text-3xl font-bold mb-4">Sevicios Turisticos</h2>
          <p className="text-muted-foreground mb-8">
            Ofrecemos una amplia gama de servicios turísticos para hacer de tu viaje una experiencia inolvidable.
          </p>
          <div className="flex ">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex  justify-center items-center flex-col bg-white p-4">
                <img src="/assets/icons/vuelos.png" alt="avion" className="w-[64px]" />
                <h3 className="text-lg font-semibold mb-2">Vuelos</h3>
                <p className="text-muted-foreground text-sm">Reserva tus vuelos con nosotros.</p>
              </div>
              <div className="flex  justify-center items-center flex-col bg-white p-4">
                <img src="/assets/icons/hoteles.png" alt="hoteles" className="w-[64px]"/>
                <h3 className="text-lg font-semibold mb-2">Hoteles</h3>
                <p className="text-muted-foreground text-sm">Encuentra el alojamiento perfecto.</p>
              </div>
              <div className="flex  justify-center items-center flex-col bg-white p-4">
                <img src="/assets/icons/coches.png" alt="coches" className="w-[64px]"/>
                <h3 className="text-lg font-semibold mb-2">Alquiler de Autos</h3>
                <p className="text-muted-foreground text-sm">Explora los destinos con total libertad.</p></div>
              <div className="flex  justify-center items-center flex-col bg-white p-4">
                <img src="/assets/icons/entradas.png" alt="entradas" className="w-[64px]"/>
                <h3 className="text-lg font-semibold mb-2">Entradas</h3>
                <p className="text-muted-foreground text-sm">Disfruta de los mejores eventos y atracciones.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="m-8">
          <h2 className="text-3xl font-bold mb-4">Paquetes Turísticos</h2>
          <p className="text-muted-foreground mb-8">
            Nuestros paquetes todo incluido te ofrecen la mejor relación calidad-precio.
          </p>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="flex  justify-center items-center flex-col bg-white p-4">
              <img src="/assets/icons/playa.png" alt="playas" className="w-[64px]"/>
              <h3 className="text-lg font-semibold mb-2">Playa</h3>
              <p className="text-muted-foreground text-sm">Disfruta del sol y la arena.</p>

            </div>
            <div className="flex  justify-center items-center flex-col bg-white p-4">
              <img src="/assets/icons/montana.png" alt="montaña" className="w-[64px]"/>
              <h3 className="text-lg font-semibold mb-2">Montaña</h3>
              <p className="text-muted-foreground text-sm">Explora la naturaleza y la aventura.</p>
            </div>
            <div className="flex  justify-center items-center flex-col bg-white p-4">
              <img src="/assets/icons/cuidad.png" alt="ciudad" className="w-[64px]"/>
              <h3 className="text-lg font-semibold mb-2">Ciudad</h3>
              <p className="text-muted-foreground text-sm">Descubre la cultura y la vida urbana.</p>
            </div>
            <div className="flex  justify-center items-center flex-col bg-white p-4">
              <img src="/assets/icons/familiar.png" alt="familia"className="w-[64px]" />
              <h3 className="text-lg font-semibold mb-2">Familiar</h3>
              <p className="text-muted-foreground text-sm">Viaja en familia y crea recuerdos.</p>


            </div>

          </div>
        </div>

      </div>
      <div>
        <div>
          <h2> Sobre Nosotros  </h2>

        </div>

        <div>
          <h2>¿Porque Elegirnos?</h2>
          <h3>Atención Personalizada   </h3>
          <p>   Nuestro equipo de expertos te asesorará para que tu viaje sea único y memorable.</p>

          Garantía de Calidad
          Trabajamos solo con proveedores confiables y de alta calidad.

          Precios Competitivos
          Ofrecemos los mejores precios del mercado sin sacrificar la calidad.
        </div>
      </div>

    </div>

  )
}
