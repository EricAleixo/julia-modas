import { Link } from "react-router-dom"

import { calcularDesconto } from "../../../../../shared/Funcoes/calcularDesconto"

interface CardProps {
    imagem: string,
    nome: string,
    preco: number,
    fornecedor: string,
    desconto?: number
}

export const Card: React.FC<CardProps> = ({ imagem, preco, nome, fornecedor, desconto = 0 }) => {

    return (
        <div>
            <Link to="/produto"
                state={{
                    imagem: imagem,
                    preco: preco,
                    nome: nome,
                    fornecedor: fornecedor,
                    desconto: desconto
                }
                }>
                <a href="#" className="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100">
                    <img src={imagem} loading="lazy" alt="Foto de Valter" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    {desconto > 0 &&
                        <span className="absolute left-0 top-3 rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-{desconto}%</span>}
                </a>
            </Link>

            <div className="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
                <div className="flex flex-col">
                    <a href="#" className="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">{nome}</a>
                    <span className="text-sm text-gray-500 lg:text-base">{fornecedor}</span>
                </div>

                <div className="flex flex-col items-end">
                    {desconto > 0 &&
                        <span className="font-bold text-gray-600 lg:text-lg">R${calcularDesconto(preco, desconto)}</span>}
                    {desconto > 0 ?
                        <span className="text-sm text-red-500 line-through">R${preco}</span>
                        : <span className="font-bold text-gray-600 lg:text-lg">R${preco}</span>}
                </div>
            </div>
        </div>
    )
}