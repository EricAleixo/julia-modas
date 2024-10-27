import { Cabecalho } from "../../shared/Cabecalho"
import { Rodape } from "../../shared/Rodape"
import { DadosCliente } from "./Components/DadosCliente"
import { Modal } from "./Components/Modal"

import { useEffect, useState } from "react"

import { api } from "../../services/api"


interface Client {

    id: number;
    nome: string;
    email: string;
    senha: string;
    vip: boolean;
    totalCompras: number;
    data_criacao: string;

}

export const ContaPage = () => {

    const [clients, setClients] = useState<Client[]>([])

    const getClients = async () => {
        const response = await api.get("/client");
        if (Array.isArray(response.data.query)) {
            setClients(response.data.query);
        } 
    }
    

    useEffect(() => {
        getClients()
    }, [])

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <Cabecalho />
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800">Usuários</h2>
                                        <p className="text-sm text-gray-600">Adicione usuários, edite e mais</p>
                                    </div>
                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50" href="#">
                                                Veja todos
                                            </a>
                                            <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
onClick={() => setIsOpen(!isOpen)}                                            >
                                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14" /><path d="M12 5v14" />
                                                </svg>
                                                Adicionar Usuário
                                            </button>

                                            <Modal modalStatus = {isOpen} setIsOpen = {setIsOpen}></Modal>

                                        </div>
                                    </div>
                                </div>
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="ps-6 py-3 text-start">
                                                <label htmlFor="hs-at-with-checkboxes-main" className="flex">
                                                    <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600" id="hs-at-with-checkboxes-main" />
                                                    <span className="sr-only">Checkbox</span>
                                                </label>
                                            </th>
                                            <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Nome</span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Senha</span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Vip</span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Total de compras</span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Data de criação</span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-end"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {clients.map(client => (
                                            <DadosCliente
                                                key={client.id}
                                                id={String(client.id)}
                                                nome={client.nome}
                                                email={client.email}
                                                senha={client.senha}
                                                vip={client.vip}
                                                totalCompras={client.totalCompras}
                                                data_criacao={client.data_criacao}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200">
                                    <div>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold text-gray-800">{clients.length}</span> resultados
                                        </p>
                                    </div>
                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50">
                                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="m15 18-6-6 6-6" />
                                                </svg>
                                                Anterior
                                            </button>
                                            <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50">
                                                Próximo
                                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="m9 18 6-6-6-6" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape />
        </div>
    )
}