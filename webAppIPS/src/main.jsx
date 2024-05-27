import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Rutas from './Routes/Rutas.jsx'
import NoFoundPage from './Pages/NoFoundPage.jsx'
import LoginPage from './Pages/loginPage.jsx'
import ServiciosTuristicos from './Pages/serviciosTuristicos.jsx'
import PaquetesTuristicos from "./Pages/PaquetesTuristicos.jsx"
import Registrarse from './Pages/Registrarse.jsx'

 const route=createBrowserRouter([
  
  {
    path:"/",
    element:<Rutas/>,
    errorElement:<NoFoundPage/>,
    children:[

      {
        path:"login",
        element:<LoginPage/>
       },
       {
        path:"servicios",
        element:<ServiciosTuristicos/>
        
       },
       {
        path:"paquetes",
        element:<PaquetesTuristicos/>
       },
       {
        path:"registrarse",
        element:<Registrarse/>
       },

      
    ]
    
 },
 

 ]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}>

    </RouterProvider>
  </React.StrictMode>,
)
