

interface DadosClientesProps {

    id: string
    nome: string,
    email: string,
    senha: string,
    vip: boolean,
    totalCompras: number,
    data_criacao: string

}



export const DadosCliente: React.FC<DadosClientesProps> = ({id, nome, email, senha, vip, totalCompras, data_criacao }) => {


    return (
        <tr id={id}>
            <td className="size-px whitespace-nowrap">
                <div className="ps-6 py-3">
                    <label htmlFor="hs-at-with-checkboxes-12" className="flex">
                        <input type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-at-with-checkboxes-12" />
                        <span className="sr-only">Checkbox</span>
                    </label>
                </div>
            </td>
            <td className="size-px whitespace-nowrap">
                <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                    <div className="flex items-center gap-x-3">
                        <div className="grow">
                            <span className="block text-sm font-semibold text-gray-800">{nome}</span>
                            <span className="block text-sm text-gray-500">{email}</span>
                        </div>
                    </div>
                </div>
            </td>
            <td className="h-px w-72 whitespace-nowrap">
                <div className="px-6 py-3">
                    <span className="block text-sm font-semibold text-gray-800">{senha}</span>
                </div>
            </td>
            <td className="size-px whitespace-nowrap">
                <div className="px-6 py-3">
                    {vip ? <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                        <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        PRO
                    </span> : <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                        <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        Não ativado
                    </span>}
                </div>
            </td>
            <td className="size-px whitespace-nowrap">
                <div className="px-6 py-3">
                    <div className="flex items-center gap-x-3">
                        <span className="text-xs text-gray-900 font-bold">{totalCompras}</span>
                    </div>
                </div>
            </td>
            <td className="size-px whitespace-nowrap">
                <div className="px-6 py-3">
                    <span className="text-sm text-gray-500">{data_criacao}</span>
                </div>
            </td>
            <td className="size-px whitespace-nowrap">
                <div className="px-6 py-1.5">
                    <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium" href="#">
                        Editar
                    </a>
                </div>
            </td>
        </tr>
    )

}