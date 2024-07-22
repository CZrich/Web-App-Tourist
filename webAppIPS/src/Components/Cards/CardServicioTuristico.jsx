import React, { useEffect, useState } from 'react'

export default function CardServicioTuristico({ servicio }) {
  const [imageUrl, setImageUrl] = useState('');

  /*useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(`http://localhost:5173/api/servicios/${servicio.id}/imagen`);
      console.log(response)
      const blob = await response.blob();
      console.log(blob);
      const url = URL.createObjectURL(blob);

      console.log(url);
      setImageUrl(url);
      // Clean up the object URL when the component unmounts
      return () => URL.revokeObjectURL(url)
    };

    fetchImage();
  }, [servicio.id]);*/

  useEffect(() => {
    // Construye la URL de la imagen
    const url = `http://127.0.0.1:2024/api/servicios/${servicio.id}/imagen`;
    setImageUrl(url);
  }, [servicio.id]);

  return (

    <div className=' m-4 p-4  bg-white rounded-lg shadow-md overflow-hidden'>
      <img src={imageUrl} alt={"iria la imagen"} className='rounded-lg w-[600px]' />
      <div className='flex flex-col'>
        <h3 className='text-lg font-semibold my-4 '>{servicio.nombre}</h3>


        <p className=" text-slate-500 font-medium mt-2"> {servicio.descripcion}</p>

        
            
            <div className="flex items-center justify-between mt-4">
            <div>
              <p className="text-slate-500	font-medium ">Destino:</p>
              <p> {servicio.destino}</p>
            </div>
            <div>
              <p className="text-slate-500 font-medium	">Fecha:</p>
              <p> {servicio.fecha}</p>
            </div>
            <div>
              <p className="text-slate-500  font-medium	">Precio:</p>
              <p>$ {servicio.costo}</p>
            </div>
              
            

        </div>
       
        

      
      </div>






    </div>
  )
}
