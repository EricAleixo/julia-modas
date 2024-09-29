export const Email = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8">
                    <div className="mb-4 sm:mb-8">
                        <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-2xl lg:text-3xl">Fique por dentro das novidades</h2>
                        <p className="text-center text-gray-500">Cadastra-se já para os novos produtos chegarem diretamente no seu email</p>
                    </div>

                    <form className="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
                        <input placeholder="Email" className="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring" />

                        <button className="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Enviar</button>
                    </form>

                    <p className="text-center text-xs text-gray-400">Faça o login e acesse nossos termos para continuar <a href="#" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Termos do serviço</a> e <a href="#" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Políticas de privacidade</a>.</p>
                </div>
            </div>
        </div>
    )
}
