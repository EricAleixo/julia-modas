import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import imagemValter from "./assets/produtoValter.jpg";
import imagemIttalo from "./assets/produtosIttalo.png";
import imagemAnael from "./assets/produtosAnael.png";
import imagemRyertson from "./assets/produtoRyertsin.png";
import imagemAyrton from "./assets/produtosAyrton.jpg";

import { Card } from "./components/Card";

export const Produtos = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12" ref={sectionRef}>
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8" id="precos">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-10 md:mb-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl"
                    >
                        Veja mais
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg"
                    >
                        Descubra uma seleção completa de produtos pensada para atender a diferentes estilos e ocasiões. 
                        São opções variadas que vão desde peças clássicas até os lançamentos mais recentes, com combinações que trazem elegância e conforto. 
                        Explore novas tendências e aproveite ofertas especiais em um só lugar, com itens cuidadosamente selecionados para complementar seu guarda-roupa.
                    </motion.p>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {[
                        {
                            imagem: imagemValter,
                            nome: "Traje elegante",
                            preco: 50.0,
                            fornecedor: "Pela Valterlândia",
                        },
                        {
                            imagem: imagemAnael,
                            nome: "Visual Bonito",
                            preco: 37.99,
                            fornecedor: "Por Vasco da Gama",
                            desconto: 80,
                        },
                        {
                            imagem: imagemIttalo,
                            nome: "Elegante casual",
                            preco: 53.99,
                            fornecedor: "Por Voinha",
                        },
                        {
                            imagem: imagemRyertson,
                            nome: "Traje Luxuoso",
                            preco: 79.99,
                            fornecedor: "Por combate a bombas",
                        },
                        {
                            imagem: imagemAyrton,
                            nome: "Kit pai e filho",
                            preco: 29.99,
                            fornecedor: "Por Ramon Menezes",
                            desconto: 60,
                        },
                    ].map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: 0.1 * index,
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card {...card} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
