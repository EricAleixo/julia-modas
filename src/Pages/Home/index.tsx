import { Cabecalho } from "../../shared/Cabecalho/"
import { Apresentacao } from "./components/Apresentacao/"
import { Precos } from "./components/Precos/"
import { Produtos } from "./components/Produtos/"
import { Anuncios } from "./components/Anuncios/index.tsx"
import { Email } from "./components/Email/"


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