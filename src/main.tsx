import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'

import Home from './Pages/Home'
import { CardProduto } from './Pages/CardProduto/CardProduto'
import { FormularioLogin } from './Pages/Forms/login'
import { FormularioSingUp } from './Pages/Forms/singUp'
import { ContaPage } from './Pages/ContaPage'

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
    element: <FormularioLogin></FormularioLogin>
  },
  {
    path:"singup",
    element: <FormularioSingUp></FormularioSingUp>
  },
  {
    path:"conta",
    element: <ContaPage></ContaPage>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
