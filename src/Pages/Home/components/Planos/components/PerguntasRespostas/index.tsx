interface PerguntasRespostasProps{
    pergunta: string,
    resposta: string
}

export const PerguntasRespostas:React.FC<PerguntasRespostasProps> = ({pergunta, resposta}) => {
    return (
        <div>
            <h3 className="text-lg font-semibold text-gray-800">
                {pergunta}
            </h3>
            <p className="mt-2 text-gray-600">
                {resposta}
            </p>
        </div>
    )
}