import React,{useEffect,useState} from 'react'

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

    <div>
      <img src={imageUrl} alt={"iria la imagen"}  className='rounded-lg w-[200px]'/>
    

      <h3>{servicio.nombre}</h3>


      <p> {servicio.descripcion}</p>
      <p> Destino: {servicio.destino}</p>
      <p> Fecha:{servicio.fecha}</p>
       
      <p>Precio:{servicio.costo}</p>




    </div>
  )
}
