import { Cabecalho } from "../../../shared/Cabecalho"
import { Rodape } from "../../../shared/Rodape";


export const FormularioSingUp = () => {
    return (
        <div>
            <Cabecalho></Cabecalho>
            <div className="relative overflow-hidden">
                <div className="mx-auto max-w-screen-md flex justify-center py-2 px-4 sm:px-6 md:max-w-screen-xl md:py-15 lg:py-20 md:px-8">
                    <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
                        <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
                            Faça login e descubra as novidades da <span className="text-indigo-700">Júlia Modas</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500">
                            Ainda não tem uma conta? Crie uma para aproveitar descontos especiais e acompanhar seus pedidos.
                        </p>


                        <div className="mt-8 grid">
                            <button
                                type="button"
                                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Crie uma conta
                            </button>
                        </div>


                        <div className="py-6 flex items-center text-sm text-gray-400 uppercase before:flex-1 before:border-t before:me-6 after:flex-1 after:border-t after:ms-6">
                            Faça login
                        </div>

                        <form>
                            <div className="mb-4">
                                <label htmlFor="hs-hero-email-2" className="block text-sm font-medium">
                                    <span className="sr-only">Email</span>
                                </label>
                                <input
                                    type="email"
                                    id="hs-hero-email-2"
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="hs-hero-password-2" className="block text-sm font-medium">
                                    <span className="sr-only">Senha</span>
                                </label>
                                <input
                                    type="password"
                                    id="hs-hero-password-2"
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Senha"
                                />
                            </div>

                            <div className="grid">
                                <button
                                    type="submit"
                                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-indigo-700 text-white hover:bg-indigo-800 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Entre
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Rodape></Rodape>
        </div>
    )
}