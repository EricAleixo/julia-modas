import { FotoPerfil } from "./components/FotoPerfil"

import emmaellyFoto from "./assets/emmaely.jpg"
import juliaFoto from "./assets/julia.jpeg"
import gustavoFoto from "./assets/gustavo.jpg"
import ryanFoto from "./assets/ryan.png"
import yuriFoto from "./assets/yuri.jfif"
import ericFoto from "./assets/eric.jpeg"
import thaysllaFoto from "./assets/thayslla.jpg"
import gabrielFoto from "./assets/gabes.jpg"

export const Time = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">

                <div className="mb-10 md:mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Conheça nossa Equipe</h2>

                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Nós acreditamos que o sucesso está nas pessoas que trabalham com dedicação e paixão. Nossa equipe é formada por profissionais experientes e criativos, comprometidos em oferecer o melhor em qualidade e atendimento. Cada um de nós traz uma combinação única de habilidades, garantindo que você tenha uma experiência incrível com nossos produtos.</p>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">

                    
                    <FotoPerfil
                    urlImagem={juliaFoto}
                    descricaoImagem="Foto de Júlia"
                    nome="Maria Júlia"
                    cargo="Fundadora / CEO"
                    linkInstagram="https://www.instagram.com/majuu.fernandess?igsh=MWpjbnZ5NGJwbGN6dQ=="
                    >
                    </FotoPerfil>
                    
                    <FotoPerfil
                    urlImagem={gustavoFoto}
                    descricaoImagem="Foto de Gustavo"
                    nome="Gustavo Daniel"
                    cargo="COO /CFO"
                    linkInstagram="https://www.instagram.com/eudsantossilva?igsh=cGN0Y25nemV1bXBq"
                    >
                    </FotoPerfil>
                    
                    <FotoPerfil
                    urlImagem={ericFoto}
                    descricaoImagem="Foto de Eric"
                    nome="Eric Aleixo"
                    cargo="CTO / Desenvolvedor Full-Stack"
                    linkInstagram="https://www.instagram.com/eric.alxy/profilecard/?igsh=aXo2dnB0dGZ4Nzcw"
                    >
                    </FotoPerfil>
                    
                    <FotoPerfil
                    urlImagem={emmaellyFoto}
                    descricaoImagem="Foto de Emmaely"
                    nome="Emmaely Gomes"
                    cargo="CD / Estilista Chefe"
                    linkInstagram="https://www.instagram.com/_maely_gomes_?igsh=YTc2eTlubXhwdjI3"
                    >
                    </FotoPerfil>
                    
                    <FotoPerfil
                    urlImagem={yuriFoto}
                    descricaoImagem="Foto de Yuri"
                    nome="Yuri Martins"
                    cargo="Gerente de Marketing"
                    linkInstagram="https://www.instagram.com/yuri_martin._?igsh=YW1yMmV0YWRnZmdq"
                    >
                    </FotoPerfil>
                    
                    <FotoPerfil
                    urlImagem={ryanFoto}
                    descricaoImagem="Foto de Ryan"
                    nome="Ryan Gustavo"
                    cargo="Analista de E-commerce"
                    linkInstagram="https://www.instagram.com/ryann.xy2?igsh=c3d5bm13MzJxeWU="
                    >
                    </FotoPerfil>

                    <FotoPerfil
                    urlImagem={thaysllaFoto}
                    descricaoImagem="Foto de Thayslla"
                    nome="Thayslla Karla"
                    cargo="Designer de UX/UI"
                    linkInstagram="https://www.instagram.com/thaysllasotnas?igsh=MTg4ZHhucmV0NXp6MA=="
                    >
                    </FotoPerfil>

                    <FotoPerfil
                    urlImagem={gabrielFoto}
                    descricaoImagem="Foto de Gabriel"
                    nome="Gabriel Costa"
                    cargo="Engenheiro de software"
                    linkInstagram="https://www.instagram.com/eubelel?igsh=OTNhMnRnbGFrNnE="
                    >
                    </FotoPerfil>

                </div>
            </div>
        </div>
        )
}