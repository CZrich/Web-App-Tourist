import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from '../Layouts/Layout.jsx';
import NoFoundPage from '../Pages/NoFoundPage.jsx'
import Home from '../Pages/Home.jsx'
import LoginPage from "../Pages/loginPage.jsx"
import Registrarse from "../Pages/Registrarse.jsx"
import ServiciosTuristicos from "../Pages/serviciosTuristicos.jsx"
import PaquetesTuristicos from "../Pages/PaquetesTuristicos.jsx"
import LayoutAdministrador from "../Layouts/LayoutAdministrador.jsx"
import PanelEmpleados from '../Pages/PanelEmpleados.jsx';
import PanelServicios from '../Pages/PanelServicios.jsx';
import PanelPaquetes from '../Pages/PanelPaquetes.jsx';
import PanelClientes from '../Pages/PanelClientes.jsx';
export default function Rutas() {


  const route = createBrowserRouter([

    {
      path: "/",
      element: <Layout />,
      errorElement: <NoFoundPage />,
      children: [
        {
          index: true,
          element: < Home />
        },

        {
          path: "login",
          element: <LoginPage />
        },
        {
          path: "servicios",
          element: <ServiciosTuristicos />

        },
        {
          path: "paquetes",
          element: <PaquetesTuristicos />
        },
        {
          path: "registrarse",
          element: <Registrarse />
        },

        {

          path: "administrar",
          element: <LayoutAdministrador />,
          children: [
            {
             path:"empleados",
             element:<PanelEmpleados/>
            },
            {
              path:"servicios",
              element:<PanelServicios/>
            },
            {
              path:"paquetes",
              element:<PanelPaquetes/>
            },
            {
             path:"clientes",
             element:<PanelClientes/>
            }
           

          ]
        },
        {
          path: "*",
          element: <NoFoundPage />
        }


      ]

    },


  ]);

  return (
    <RouterProvider router={route} />
  )
}
