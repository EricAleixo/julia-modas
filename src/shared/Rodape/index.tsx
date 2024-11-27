import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

import logo from "../../icon/logo-julia-modas.jpeg"

export const Rodape = () => {
    return (
        <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
            <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
                    <div className="col-span-full lg:col-span-2">
                        <div className="mb-4 lg:-mt-2">
                            <a href="/" className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
                            <img width="64" height="64" src={logo} alt="shopping-cart" />

                                Júlia Modas
                            </a>
                        </div>

                        <p className="mb-6 text-gray-500 sm:pr-8">30% dos lucros obtidos pela Júlia Modas, é direcionado a institutos necessitados</p>

                        <div className="flex gap-4">
                            <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                <FaInstagram className="text-1xl"/>
                            </a>

                            <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                <FaXTwitter className="text-1xl"></FaXTwitter>
                            </a>

                            <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                <FaLinkedin className="text-1xl"></FaLinkedin>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Produtos</div>

                        <nav className="flex flex-col gap-4">
                            <div>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Veja mais</a>
                            </div>

                            <div>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Soluções</a>
                            </div>

                            <div>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Preços</a>
                            </div>

                            <div>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Personalização</a>
                            </div>
                        </nav>
                    </div>

                    <div>
                        <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Companhia</div>

                        <nav className="flex flex-col gap-4">
                            <div>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Sobre</a>
                            </div>

                            <div>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Parcerias</a>
                            </div>

                            <div>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Trabalho</a>
                            </div>

                            <div>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Pressione</a>
                            </div>

                            <div>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
                            </div>
                        </nav>
                    </div>

                    <div>
                        <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Suporte</div>

                        <nav className="flex flex-col gap-4">
                            <div>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contato</a>
                            </div>

                            <div>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentação</a>
                            </div>

                            <div>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</a>
                            </div>

                            <div>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
                            </div>
                        </nav>
                    </div>

                    <div>
                        <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Outros</div>

                        <nav className="flex flex-col gap-4">
                            <div>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Serviços e termos</a>
                            </div>

                            <div>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Política Privada</a>
                            </div>

                            <div>
                                <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Configuração de cookies</a>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="border-t py-8 text-center text-sm text-gray-400">© 2024 - Julia Modas. Todos os direitos reservados.</div>
            </footer>
        </div>
    )
}