import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ofertasValter from "./assets/ofertasValter.png";

export const Anuncios = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div
                    className="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80"
                    ref={sectionRef}
                >
                    <motion.div
                        className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5"
                        initial={{ opacity: 0, x: -100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.h2
                            className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl"
                            initial={{ opacity: 0, y: -30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Oferta de verão<br />Tudo por 70% off.
                        </motion.h2>

                        <motion.p
                            className="mb-8 max-w-md text-gray-400"
                            initial={{ opacity: 0, y: -20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Deu a louca na Júlia modas! Aproveite esse verão com o outfit mais legal que podemos oferecer. Junto com aquele desconto pra lá de irresistível!
                        </motion.p>

                        <div className="mt-auto">
                            <a
                                href="#"
                                className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                            >
                                Aproveite agora
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}} 
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <img
                            src={ofertasValter}
                            loading="lazy"
                            alt="Oferta de Verão"
                            className="h-full w-full object-cover object-top-center"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
