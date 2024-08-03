import React from 'react'
import TablaEmpleados from '../Components/tablas/TablaEmpleados'
import RegistroEmpleados from '../Components/Forms/RegistroEmpleados'
export default function PanelEmpleados() {
  return (
    <div className=' flex flex-col justify-center '>
        PanelEmpleados
        <RegistroEmpleados/>
        <TablaEmpleados/>
        
    </div>
  )
}
