export const Notificacao = () => {
    return (
        <div id="marketing-banner" className="fixed z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6 ">
            <div className="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
                <a href="https://flowbite.com/" className="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600">
                <img width="64" height="64" src="https://img.icons8.com/sf-black-filled/64/6366f1/shopping-cart.png" alt="shopping-cart" />
                        <span className="self-center text-lg font-semibold whitespace-nowrap ">Júlia Modas</span>
                </a>
                <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">Ainda não se cadastrou? Faça um cadastro e aproveite!</p>
            </div>
            <div className="flex items-center flex-shrink-0">
                <a href="#" className="px-5 py-2 me-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">Sign up</a>
                <button data-dismiss-target="#marketing-banner" type="button" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Feche o banner</span>
                </button>
            </div>
        </div>
    )
}