import { FaCircleCheck } from "react-icons/fa6"

interface ItemListaProps{
    text: string
}

export const ItemLista: React.FC<ItemListaProps> = ({text}) => {
    return (
        <li className="flex items-center gap-1.5">
            <FaCircleCheck className="text-1xl"></FaCircleCheck>
            <span>{text}</span>
        </li>
    )
}