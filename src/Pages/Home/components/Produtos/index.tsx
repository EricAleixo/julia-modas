import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import { api } from "../../../../services/api";

import { Card } from "./components/Card";

interface Produtos {
    imagemURL: string,
    nome: string,
    preco: number,
    fornecedor: string,
    desconto?: number
}

export const Produtos = () => {

    const [produtos, setProdutos] = useState<Object | any>([])

    const getProdutos = async () => {
        const produtosResposta = await (await api.get("/produtos/exibirprodutos")).data.query

        setProdutos(produtosResposta)
        console.log(produtosResposta)
        
    }

    useEffect(() => {
        getProdutos()
    }, [])

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
                    {produtos.map((produto: Produtos, index: number) => (
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
                            <Card imagem={produto.imagemURL} nome={produto.nome} preco={produto.preco} fornecedor={produto.fornecedor} desconto={produto.desconto}/>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
