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

    const membrosEquipe = [
        {
            id: 1,
            urlImagem: juliaFoto,
            nome: "Maria Júlia",
            descricaoImagem: "Foto de Júlia" ,
            cargo: "Fundadora /CEO",
            linkInstagram: "https://www.instagram.com/majuu.fernandess?igsh=MWpjbnZ5NGJwbGN6dQ=="
        },
        {
            id: 2,
            urlImagem: gustavoFoto,
            nome: "Gustavo Daniel",
            descricaoImagem: "Foto de Gustavo",
            cargo: "COO /CFO",
            linkInstagram: "https://www.instagram.com/eudsantossilva?igsh=cGN0Y25nemV1bXBq"
        },
        {
            id: 3,
            urlImagem: ericFoto,
            nome: "Eric Aleixo",
            descricaoImagem: "Foto de Eric",
            cargo: "CTO / Desenvolvedor Full-Stack",
            linkInstagram: "https://www.instagram.com/eric.alxy/profilecard/?igsh=aXo2dnB0dGZ4Nzcw"
        },
        {
            id: 4,
            urlImagem: emmaellyFoto,
            nome: "Emmaely Gomes",
            descricaoImagem: "Foto de Emmaely",
            cargo: "CD / Estilista Chefe",
            linkInstagram: "https://www.instagram.com/_maely_gomes_?igsh=YTc2eTlubXhwdjI3"
        },
        {
            id: 5,
            urlImagem: yuriFoto,
            nome: "Yuri Martins",
            descricaoImagem: "Foto de Yuri",
            cargo: "Gerente de Marketing",
            linkInstagram: "https://www.instagram.com/yuri_martin._?igsh=YW1yMmV0YWRnZmdq"
        },
        {
            id: 6,
            urlImagem: ryanFoto,
            nome: "Ryan Gustavo",
            descricaoImagem: "Foto de Ryan",
            cargo: "Analista de E-commerce",
            linkInstagram: "https://www.instagram.com/ryann.xy2?igsh=c3d5bm13MzJxeWU="
        },
        {
            id: 7,
            urlImagem: thaysllaFoto,
            nome: "Thayslla Karla",
            descricaoImagem: "Foto de Thayslla",
            cargo: "Designer de UX/UI",
            linkInstagram: "https://www.instagram.com/thaysllasotnas?igsh=MTg4ZHhucmV0NXp6MA=="
        },
        {
            id: 8,
            urlImagem: gabrielFoto,
            nome: "Gabriel Costa",
            descricaoImagem: "Foto de Gabriel",
            cargo: "Engenheiro de software",
            linkInstagram: "https://www.instagram.com/eubelel?igsh=OTNhMnRnbGFrNnE="
        },
    ]

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">

                <div className="mb-10 md:mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Conheça nossa Equipe</h2>

                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Nós acreditamos que o sucesso está nas pessoas que trabalham com dedicação e paixão. Nossa equipe é formada por profissionais experientes e criativos, comprometidos em oferecer o melhor em qualidade e atendimento. Cada um de nós traz uma combinação única de habilidades, garantindo que você tenha uma experiência incrível com nossos produtos.</p>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">

                    
                    {
                        membrosEquipe.map(membro =>(
                            <FotoPerfil
                            urlImagem={membro.urlImagem}
                            descricaoImagem={membro.descricaoImagem}
                            nome={membro.nome}
                            cargo={membro.cargo}
                            linkInstagram={membro.linkInstagram}
                            >
                            </FotoPerfil>
                        ))
                    }

                </div>
            </div>
        </div>
        )
}