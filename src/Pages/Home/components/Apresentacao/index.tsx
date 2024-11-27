import { motion } from "framer-motion"

import imagemAnael from "./assets/anael.JPG"
import imagemValter from "./assets/valter.JPG"

import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaPinterestP } from "react-icons/fa"


export const Apresentacao = () => {

    return (
        <section className="mx-auto max-w-screen-2xl px-4 md:px-8" id="apresentacao">
            <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                <motion.div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48"
                initial = {{x: -1000, opacity: 0}}
                animate = {{x: 0, opacity:1}}
                transition={{
                    type:"spring",
                    damping: 20,
                    stiffness: 120,
                    ease: "easeInOut"
                }}>
                    <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Descubra o estilo<br />que é a sua Cara!</h1>

                    <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">Bem-vindo à Júlia Modas, onde a moda encontra a sua essência! Aqui, cada peça é cuidadosamente selecionada para refletir tendências contemporâneas e o seu estilo único.</p>
                </motion.div>

                <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                    <motion.div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0"
                    initial = {{x: 1000, opacity: 0}}
                    animate = {{x: 0, opacity:1}}
                    transition={{
                        type:"spring",
                        damping: 21,
                        stiffness: 65,
                        ease: "easeInOut",
                    }}>
                        <img src={imagemAnael} alt="Foto de Anael" className="h-full w-full object-cover object-center" />
                    </motion.div>

                    <motion.div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg"
                    initial = {{x: -1000, opacity: 0}}
                    animate = {{x: 0, opacity:1}}
                    transition={{
                        type:"spring",
                        damping: 21,
                        stiffness: 65,
                        ease: "easeInOut",
                    }}>
                        <img src={imagemValter} alt="Foto de Valter" className="h-full w-full object-cover object-center" />
                    </motion.div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="flex h-12 w-80 divide-x overflow-hidden rounded-lg border">
                    <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Homens</a>
                    <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Mulheres</a>
                    <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Adolescentes</a>
                </div>

                <div className="flex items-center justify-center gap-4 lg:justify-start">
                    <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">Redes sociais</span>
                    <span className="h-px w-12 bg-gray-200"></span>

                    <div className="flex gap-4">
                        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <FaInstagram className="text-2xl" />
                        </a>

                        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <FaXTwitter className="text-2xl"/>
                        </a>

                        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <FaPinterestP className="text-2xl"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )

}