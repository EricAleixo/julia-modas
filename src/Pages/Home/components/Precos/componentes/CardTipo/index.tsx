interface CardTipoProps{
    imagem: string,
    genero: string,
    tipo: string,
    descricao: string
}

export const CardTipo:React.FC<CardTipoProps> = ({ imagem , genero , tipo , descricao }) => {
    return (
        <div>
            <a href="#" className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                <img src={imagem} alt={descricao} className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>

            <div className="flex flex-col">
                <span className="text-gray-500">{genero}</span>
                <a href="#" className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">{tipo}</a>
            </div>
        </div>
    )
}