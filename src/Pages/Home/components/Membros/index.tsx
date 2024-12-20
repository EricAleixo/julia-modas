import { ItemLista } from "./components/ItemLista"

export const Membros = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                <div className="mb-10 md:mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Seja Membro e Vista-se com Exclusividade!</h2>

                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Ao se tornar membro da nossa loja, você desbloqueia um mundo de vantagens exclusivas. Imagine ter acesso antecipado às nossas coleções, descontos especiais e convites para eventos VIP! Como parte da nossa comunidade, você estará sempre um passo à frente nas tendências da moda.</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-0">
                    <div className="w-full rounded-lg bg-gray-800 p-6 sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3">
                        <div className="mb-4">
                            <h3 className="text-2xl font-semibold text-gray-100 sm:text-3xl">Vip Básico</h3>
                            <p className="text-gray-300">Atendimento exclusivo</p>
                        </div>

                        <div className="mb-4 space-x-2">
                            <span className="text-4xl font-bold text-gray-100">R$29</span>
                            <span className="text-2xl text-gray-300 line-through">R$49</span>
                        </div>

                        <ul className="mb-6 space-y-2 text-gray-300">

                            <ItemLista text="10% de desconto em todos os produtos"></ItemLista>
                            <ItemLista text="Convites para promoções exclusivas"></ItemLista>
                            <ItemLista text="Dicas de estilo"></ItemLista>

                        </ul>

                        <a href="#" className="block rounded-lg bg-gray-500 px-8 py-3 text-center text-sm font-semibold text-gray-100 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:text-gray-300 md:text-base">Adquira o Vip Básico</a>
                    </div>

                    <div className="w-full rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-400 p-6 shadow-xl sm:w-1/2 sm:p-8">
                        <div className="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row">
                            <div>
                                <h3 className="text-2xl font-semibold text-white sm:text-3xl">Vip pro</h3>
                                <p className="text-indigo-100">Atendimento exclusivo + Etiqueta</p>
                            </div>

                            <span className="order-first inline-block rounded-full bg-indigo-200 bg-opacity-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white lg:order-none">Melhor valor</span>
                        </div>

                        <div className="mb-4 space-x-2">
                            <span className="text-4xl font-bold text-white">R$99</span>
                            <span className="text-2xl text-indigo-100 line-through">R$199</span>
                        </div>

                        <ul className="mb-6 space-y-2 text-indigo-100">

                            <ItemLista text="15% de desconto em todas as compras"></ItemLista>

                            <ItemLista text="Acesso exclusivo a pré-vendas e coleções limitadas"></ItemLista>

                            <ItemLista text="Consultoria de estilo personalizada com um stylist dedicado"></ItemLista>

                            <ItemLista text="Convites para eventos VIP e desfiles de moda"></ItemLista>

                            <ItemLista text="Frete grátis em todas as compras"></ItemLista>
                        </ul>

                        <a href="#" className="block rounded-lg bg-indigo-200 bg-opacity-50 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-300 focus-visible:ring active:bg-indigo-400 md:text-base">Adquira o Vip Pro</a>
                    </div>
                </div>
            </div>
        </div>
    )
}