
import  {RouterProvider,createBrowserRouter} from "react-router-dom"
//compontens
import Rutas from './Routes/Rutas.jsx'
import NoFoundPage from './Pages/NoFoundPage.jsx'
import LoginPage from './Pages/loginPage.jsx'
import ServiciosTuristicos from './Pages/serviciosTuristicos.jsx'
import PaquetesTuristicos from "./Pages/PaquetesTuristicos.jsx"
import Registrarse from './Pages/Registrarse.jsx'
import Home from "./Pages/Home.jsx"
function App() {
  const route=createBrowserRouter([
  
    {
      path:"/",
      element:<Rutas/>,
      errorElement:<NoFoundPage/>,
      children:[
        {
          index:true,
          path:"home",
          element:< Home/>
        },
  
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
         {
          path:"*",
          element:<NoFoundPage/>
         }
  
        
      ]
      
   },
   
  
   ]);
  

  return <RouterProvider router={route}/>

  
}

export default App
