import { MdDelete } from "react-icons/md"

import { useRef } from "react"
import { api } from "../../../../services/api"

interface ModalProps {

    modalStatus: boolean
    setIsOpen: (modalStatus: boolean) => void
    id: string
    nome: string
    email: string
    senha: string
    totalCompras: number

}

export const ModalUpdate: React.FC<ModalProps> = ({ modalStatus, setIsOpen, id}) => {

    
    const updateClient = async () => {
        await api.put(`/client/${id}`, {
            "nome": clientName.current?.value,
            "email": clientEmail.current?.value,
            "senha": clientPassword.current?.value,
            "vip": true,
            "totalCompras": clientTotalCompras.current?.value
        })

        setIsOpen(!modalStatus)
        window.location.reload()
    }

    const clientName = useRef<HTMLInputElement>(null)
    const clientEmail = useRef<HTMLInputElement>(null)
    const clientPassword = useRef<HTMLInputElement>(null)
    // const clientVip = useRef<HTMLInputElement>(null)
    const clientTotalCompras = useRef<HTMLInputElement>(null)

    const deleteClient = async () =>{
        await api.delete(`/client/${id}`)
        window.location.reload()
    }

    if (modalStatus) {

        return (
            <div id="modal" className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6">

                    <div className="bg-white sm:p-7">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Edite o cliente</h2>
                            <p className="text-sm text-gray-600">
                                Opções de edição de clientes
                            </p>
                        </div>

                        <form action="#">
                            <div className="mt-2 space-y-3">
                                <input
                                    type="text"
                                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Nome"
                                    ref={clientName}
                                />
                                <input
                                    type="text"
                                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Email"
                                    ref={clientEmail}
                                />
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="text"
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="Senha do usuário"
                                        ref={clientPassword}
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
                                    ref={clientTotalCompras}
                                />
                            </div>
                        </form>

                        <div className="mt-5 flex justify-between gap-x-2">

                            <button>
                                <MdDelete className="text-gray-800 text-3xl hover:text-red-600"
                                onClick={deleteClient}></MdDelete>
                            </button>

                            <div className="flex gap-4">
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
                                    onClick = {updateClient}
                                >
                                    Salvar mudanças
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    return null
}