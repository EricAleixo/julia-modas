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
                            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>

                        <a href={linkInstagram} target="_blank" className="text-gray-900 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="currentColor" >
                                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}