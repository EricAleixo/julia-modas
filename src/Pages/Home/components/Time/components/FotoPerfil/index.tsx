import { FaGithubAlt } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

interface FotoPerfilPropos {
    urlImagem: string,
    descricaoImagem: string,
    nome: string,
    cargo: string,
    linkInstagram?: string
}

export const FotoPerfil: React.FC<FotoPerfilPropos> = ({ urlImagem, descricaoImagem, nome, cargo, linkInstagram }) => {
    return (
        <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
            <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                <img src={urlImagem} loading="lazy" alt={descricaoImagem} className="h-full w-full object-cover object-center" />
            </div>

            <div>
                <div className="text-center font-bold text-indigo-500 md:text-lg">{nome}</div>
                <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">{cargo}</p>

                <div className="flex justify-center">
                    <div className="flex gap-4">
                        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <FaLinkedin className="text-2xl" />
                        </a>

                        <a href={linkInstagram} target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <FaInstagram className="text-2xl" />
                        </a>

                        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <FaGithubAlt className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}