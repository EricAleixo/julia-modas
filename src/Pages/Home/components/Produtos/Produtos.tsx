import imagemValter from "./assets/produtoValter.jpg"
import imagemIttalo from "./assets/produtosIttalo.png"
import imagemAnael from "./assets/produtosAnael.png"
import imagemRyertson from "./assets/produtoRyertsin.png"
import imagemAyrton from "./assets/produtosAyrton.jpeg"

import { Link } from "react-router-dom"

export const Produtos = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8" id="precos">
                <div className="mb-10 md:mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Veja mais</h2>

                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Descubra uma seleção completa de produtos pensada para atender a diferentes estilos e ocasiões. São opções variadas que vão desde peças clássicas até os lançamentos mais recentes, com combinações que trazem elegância e conforto. Explore novas tendências e aproveite ofertas especiais em um só lugar, com itens cuidadosamente selecionados para complementar seu guarda-roupa.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div>
                        <Link to="/produto"
                            state={{
                                imagem: imagemValter,
                                preco: 19.99,
                                nome: "Traje elegante",
                                fornecedor: "Pela Valterlândia"
                            }
                            }>
                            <a href="#" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                                <img src={imagemValter} loading="lazy" alt="Foto de Valter" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                <span className="absolute left-0 top-3 rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-50%</span>
                            </a>
                        </Link>

                        <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                            <div className="flex flex-col">
                                <a href="#" className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">Traje Elegante</a>
                                <span className="text-sm text-gray-500 lg:text-base">Pela Valterlândia</span>
                            </div>

                            <div className="flex flex-col items-end">
                                <span className="font-bold text-gray-600 lg:text-lg">$19.99</span>
                                <span className="text-sm text-red-500 line-through">$39.99</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <a href="#" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                            <img src={imagemIttalo} loading="lazy" alt="Foto de Ittalo" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        </a>

                        <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                            <div className="flex flex-col">
                                <a href="#" className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">Visual descolado</a>
                                <span className="text-sm text-gray-500 lg:text-base">Por voinha</span>
                            </div>

                            <div className="flex flex-col items-end">
                                <span className="font-bold text-gray-600 lg:text-lg">$29.99</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <a href="#" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                            <img src={imagemAnael} loading="lazy" alt="Foto de Anael" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        </a>

                        <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                            <div className="flex flex-col">
                                <a href="#" className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">Visual bonito</a>
                                <span className="text-sm text-gray-500 lg:text-base">Por Vasco da gama</span>
                            </div>

                            <div className="flex flex-col items-end">
                                <span className="font-bold text-gray-600 lg:text-lg">$35.00</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <a href="#" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                            <img src={imagemRyertson} loading="lazy" alt="Foto de Ryertson" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        </a>

                        <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                            <div className="flex flex-col">
                                <a href="#" className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">Estilo luxuoso</a>
                                <span className="text-sm text-gray-500 lg:text-base">Por combate a bombas</span>
                            </div>

                            <div className="flex flex-col items-end">
                                <span className="font-bold text-gray-600 lg:text-lg">$49.99</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="#" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                            <img src={imagemAyrton} loading="lazy" alt="Foto de Ayrton" className="h-full w-full object-cover object-top transition duration-200 group-hover:scale-110" />

                            <span className="absolute left-0 top-3 rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-30%</span>
                        </a>

                        <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                            <div className="flex flex-col">
                                <a href="#" className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">Estilo pai e filho</a>
                                <span className="text-sm text-gray-500 lg:text-base">Pela Valterlândia</span>
                            </div>

                            <div className="flex flex-col items-end">
                                <span className="font-bold text-gray-600 lg:text-lg">$35.99</span>
                                <span className="text-sm text-red-500 line-through">$50.99</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}