import React from 'react'
import TablaEmpleados from '../Components/TablaEmpleados'
import RegistroEmpleados from '../Components/Forms/RegistroEmpleados'
export default function ServiciosTuristicos() {
  return (
    <div className='  relative overflow-x-auto ml-4'>serviciosTuristicos
       <RegistroEmpleados/>
      <TablaEmpleados/>
    </div>
  )
}
