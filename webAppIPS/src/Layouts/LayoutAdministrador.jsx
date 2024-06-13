import React from 'react'
import AsideBar from '../Components/AsideBar'
import { Outlet } from 'react-router-dom'
export default function LayoutAdministrador() {
  return (
    <div
     className='grid grid-cols-5 grid-rows-1'
    >
        <div className='bg-stone-300 h-full'>
        <AsideBar/>
        </div>
         <div
          className='col-start-2 col-end-6 bg-green-200'
         >
         <Outlet/>
         </div>
      
       
    </div>
  )
}
