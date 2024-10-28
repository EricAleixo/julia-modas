import { PerguntasRespostas } from "./components/PerguntasRespostas"

export const Sobre = () => {

    return (
        <div id="sobre" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800">
                    Perguntas Frequentes
                </h2>
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-6 md:gap-12">

                    <PerguntasRespostas
                    pergunta = "Posso cancelar a qualquer momento?"
                    resposta = "Sim, você pode cancelar a qualquer momento, sem perguntas. Porém, apreciaríamos muito se você pudesse nos dar um feedback."
                    ></PerguntasRespostas>
                    <PerguntasRespostas
                    pergunta = "Eu tenho créditos. Como posso usá-lo?"
                    resposta = "Uma vez que você se inscreva em um plano, os créditos automaticamente aumentarão a cada compra, são utilizados em forma de desconto nas outras compras."
                    ></PerguntasRespostas>
                    <PerguntasRespostas
                    pergunta = "Como funciona a precificação da loja?"
                    resposta = "Nossas assinaturas são escalonadas. Entender a necessidade e alinhar os detalhes é fundamental."
                    ></PerguntasRespostas>
                    <PerguntasRespostas
                    pergunta = "Quão seguro é comprar aqui?"
                    resposta = "Proteger os dados que você confia à nossa loja é nossa prioridade. Essa parte é crucial para garantir uma compra tranquila."
                    ></PerguntasRespostas>
                    <PerguntasRespostas
                    pergunta = "Qual é a política de reembolso?"
                    resposta = "Oferecemos reembolsos. Estamos focados em construir relacionamentos sólidos com nossos clientes e nossa comunidade."
                    ></PerguntasRespostas>
                    <PerguntasRespostas
                    pergunta = "Vocês oferecem descontos?"
                    resposta = "Oferecemos descontos em várias faixas de produtos. É hora de trazer suas ideias e planos para a realidade."
                    ></PerguntasRespostas>
                </div>
            </div>
        </div>

    )

}