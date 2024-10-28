interface ModalProps{

    modalStatus: boolean
    setIsOpen: (modalStatus: boolean) => void

}

export const Modal: React.FC<ModalProps> = ({modalStatus, setIsOpen}) => {

    if(modalStatus){

        return (
            <div id="modal" className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6">
    
                    <div className="bg-white sm:p-7">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Novo cliente</h2>
                            <p className="text-sm text-gray-600">
                                Adicione um novo cliente e o configure diretamente
                            </p>
                        </div>
    
                        <form action="#">
                            <div className="mt-2 space-y-3">
                                <input
                                    type="text"
                                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Nome"
                                />
                                <input
                                    type="text"
                                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Email"
                                />
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="text"
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="Senha do usuário"
                                    />
                                    <input
                                        type="text"
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="Confirme a senha"
                                    />
                                    <select
                                        className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        <option selected>VIP</option>
                                        <option>Nenhum</option>
                                        <option>Básico</option>
                                        <option>Pro</option>
                                    </select>
                                </div>
                                <input
                                    type="number"
                                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Total de compras"
                                />
                            </div>
                        </form>
    
                        <div className="mt-5 flex justify-end gap-x-2">
                            <button
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                onClick={() => setIsOpen(!modalStatus)}
                            >
                                Cancelar
                            </button>
                            <button
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Salvar mudanças
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    
        )
    }
    return null
}