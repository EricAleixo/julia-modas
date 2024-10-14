import { Cabecalho } from "../../shared/Cabecalho/"
import { Notificacao } from "../../shared/Notificacao"
import { Apresentacao } from "./components/Apresentacao/"
import { Precos } from "./components/Precos/"
import { Produtos } from "./components/Produtos/"
import { Anuncios } from "./components/Anuncios/"
import { Email } from "./components/Email/"
import { Membros } from "./components/Membros/"
import { Time } from "./components/Time"
import { Rodape } from "../../shared/Rodape/" 


function App() {


  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Cabecalho></Cabecalho>
      <Notificacao></Notificacao>
      <Apresentacao></Apresentacao>
      <Precos></Precos>
      <Produtos></Produtos>
      <Anuncios></Anuncios>
      <Email></Email>
      <Membros></Membros>
      <Time></Time>
      <Rodape></Rodape>
    </div>

  )
}

export default App