import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'

import Home from './Pages/Home'
import { CardProduto } from './Pages/CardProduto/CardProduto'
import { FormularioCadastro } from './Pages/Form'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "produto",
    element: <CardProduto></CardProduto>
  },
  {
    path:"login",
    element: <FormularioCadastro></FormularioCadastro>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
