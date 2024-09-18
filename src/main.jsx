import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Ingressos from './routes/Ingressos.jsx'
import Sobre from './routes/Sobre.jsx'
import Desafios from './routes/Desafios.jsx'
import CadastrarUsuario from './routes/CadastrarUsuario.jsx'

const router = createBrowserRouter([
  {
    path:'/', element:<App/>,
    errorElement:<Error/>,

    children:[
      {path:'/', element:<Home/>},
      {path:'/login', element:<Login/>},
      {path:'/ingressos', element:<Ingressos/>},
      {path:'/sobre', element:<Sobre/>},
      {path:'/desafios',element:<Desafios/>},
      {path:'/cadastro', element:<CadastrarUsuario/>}
    ]
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
