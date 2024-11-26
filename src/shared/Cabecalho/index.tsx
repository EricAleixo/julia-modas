import { Link } from "react-router-dom"

import { FaRegHeart } from "react-icons/fa"
import { BsBag } from "react-icons/bs"
import { IoPersonOutline } from "react-icons/io5"
import { IoMenu } from "react-icons/io5"

import logo from "../../icon/logo-julia-modas.jpeg"

interface LinksProps{
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void 
}

export const Cabecalho:React.FC<LinksProps> = ({onClick}) => {
    return (
        <header className="mb-8 border-b">
            <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">

                <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                    <img width="64" height="64" src={logo} alt="shopping-cart" />

                    Júlia Modas
                </a>


                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                    <Link to="/"><a href="#apresentacao" className="text-lg font-semibold text-indigo-500">Início</a></Link>
                    <a href="#colecoes" onClick={onClick} className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Coleções</a>
                    <a href="#precos" onClick={onClick} className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Preço</a>
                    <a href="#sobre" onClick={onClick} className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Sobre</a>
                </nav>

                <div className="flex">
                    <a href="#" onClick={onClick} className="hidden h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:flex sm:h-20 sm:w-20 md:h-24 md:w-24">
                        <FaRegHeart className="text-2xl"></FaRegHeart>

                        <span className="hidden text-xs font-semibold text-gray-500 sm:block">Lista de desejos</span>
                    </a>

                    <Link to="/conta">
                        <a href="#" onClick={onClick} className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
                            <IoPersonOutline className="text-2xl"></IoPersonOutline>
                            <span className="hidden text-xs font-semibold text-gray-500 sm:block">Conta</span>
                        </a>
                    </Link>

                    <a href="#" onClick={onClick} className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
                        <BsBag className="text-2xl"></BsBag>
                        <span className="hidden text-xs font-semibold text-gray-500 sm:block">Sacola</span>
                    </a>

                    <button type="button" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden">
                        <IoMenu className="text-2xl"></IoMenu>

                        <span className="hidden text-xs font-semibold text-gray-500 sm:block">Menu</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

