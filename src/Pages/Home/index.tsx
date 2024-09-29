import { Cabecalho } from "../../shared/Cabecalho/Cabecalho.tsx"
import { Apresentacao } from "./components/Apresentacao/Apresentacao.tsx"
import { Precos } from "./components/Precos/Precos.tsx"
import { Produtos } from "./components/Produtos/Produtos.tsx"
import { Anuncios } from "./components/Anuncios/Anuncio.tsx"
import { Email } from "./components/Email/Email.tsx"


function App() {


  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Cabecalho></Cabecalho>
      <Apresentacao></Apresentacao>
      <Precos></Precos>
      <Produtos></Produtos>
      <Anuncios></Anuncios>
      <Email></Email>
    </div>

  )
}

export default App