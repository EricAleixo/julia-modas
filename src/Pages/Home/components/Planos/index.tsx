import { PerguntasRespostas } from "./components/PerguntasRespostas";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Sobre = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true }); // Detecta quando a seção entra na tela

    return (
        <div id="sobre" ref={sectionRef} className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800"
                >
                    Perguntas Frequentes
                </motion.h2>
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
                    {/* Animando as perguntas e respostas */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <PerguntasRespostas
                            pergunta="Posso cancelar a qualquer momento?"
                            resposta="Sim, você pode cancelar a qualquer momento, sem perguntas. Porém, apreciaríamos muito se você pudesse nos dar um feedback."
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <PerguntasRespostas
                            pergunta="Eu tenho créditos. Como posso usá-lo?"
                            resposta="Uma vez que você se inscreva em um plano, os créditos automaticamente aumentarão a cada compra, são utilizados em forma de desconto nas outras compras."
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <PerguntasRespostas
                            pergunta="Como funciona a precificação da loja?"
                            resposta="Nossas assinaturas são escalonadas. Entender a necessidade e alinhar os detalhes é fundamental."
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <PerguntasRespostas
                            pergunta="Quão seguro é comprar aqui?"
                            resposta="Proteger os dados que você confia à nossa loja é nossa prioridade. Essa parte é crucial para garantir uma compra tranquila."
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <PerguntasRespostas
                            pergunta="Qual é a política de reembolso?"
                            resposta="Oferecemos reembolsos. Estamos focados em construir relacionamentos sólidos com nossos clientes e nossa comunidade."
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <PerguntasRespostas
                            pergunta="Vocês oferecem descontos?"
                            resposta="Oferecemos descontos em várias faixas de produtos. É hora de trazer suas ideias e planos para a realidade."
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
