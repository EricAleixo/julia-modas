import { Cabecalho } from "../../shared/Cabecalho";
import { Rodape } from "../../shared/Rodape";
import { DadosCliente } from "./Components/DadosCliente";
import { ModalCreate } from "./Components/Modal/ModalCreate";

import { FaPlus } from "react-icons/fa";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Client {
    id: number;
    nome: string;
    email: string;
    senha: string;
    vip: boolean;
    total_compras: number;
    data_criacao: string;
}

export const ContaPage = () => {
    const [clients, setClients] = useState<Client[]>([]);

    const getClients = async () => {
        const response = await api.get("/client/exibirclients");
        if (Array.isArray(response.data.query)) {
            setClients(response.data.query);
        }
    };

    useEffect(() => {
        getClients();
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Cabecalho />
            <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
                <div className="bg-white rounded-xl shadow p-4 sm:p-7">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 ">Profile</h2>
                        <p className="text-sm text-gray-600">
                        Gerencie seu perfil da melhor forma possível: Foto, nome, email e senha
                        </p>
                    </div>

                    <form>
                        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 ">
                                    Foto de perfil
                                </label>
                            </div>
                            <div className="sm:col-span-9">
                                <div className="flex items-center gap-5">
                                    <img
                                        className="inline-block size-16 rounded-full ring-2 ring-white"
                                        src="https://preline.co/assets/img/160x160/img1.jpg"
                                        alt="Avatar"
                                    />
                                    <div className="flex gap-x-2">
                                        <button
                                            type="button"
                                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-blue-600 focus:text-white"
                                        >
                                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>
                                            </svg>
                                            Envie a foto
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5 ">Nome completo</label>
                            </div>
                            <div className="sm:col-span-9">
                                <input
                                    id="af-account-full-name"
                                    type="text"
                                    className="py-2 px-3 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Eric"
                                />
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 ">Email</label>
                            </div>
                            <div className="sm:col-span-9">
                                <input
                                    id="af-account-email"
                                    type="email"
                                    className="py-2 px-3 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="ericaleixo66@gmail.com"
                                />
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5">Senha</label>
                            </div>
                            <div className="sm:col-span-9 grid gap-3">
                                <input
                                    id="af-account-password"
                                    type="text"
                                    className="py-2 px-3 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Coloque a senha atual"
                                />
                                <input
                                    type="text"
                                    className="py-2 px-3 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Coloque a nova senha"
                                />
                            </div>

                        </div>

                        <div className="mt-5 flex justify-end gap-x-2">
                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50">
                                Cancelar
                            </button>
                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700">
                                Salvar Mudanças    
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="max-w-[80rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
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
                                            <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700" onClick={() => setIsOpen(!isOpen)}>
                                                <FaPlus />
                                                Adicionar Usuário
                                            </button>
                                            <ModalCreate modalStatus={isOpen} setIsOpen={setIsOpen} />
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
                                                totalCompras={client.total_compras}
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
    );
};
