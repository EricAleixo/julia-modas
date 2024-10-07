import imagemValter from "./assets/produtoValter.jpg"
import imagemIttalo from "./assets/produtosIttalo.png"
import imagemAnael from "./assets/produtosAnael.png"
import imagemRyertson from "./assets/produtoRyertsin.png"
import imagemAyrton from "./assets/produtosAyrton.jpg"

import { Card } from "./components/Card"

export const Produtos = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8" id="precos">
                <div className="mb-10 md:mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Veja mais</h2>

                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Descubra uma seleção completa de produtos pensada para atender a diferentes estilos e ocasiões. São opções variadas que vão desde peças clássicas até os lançamentos mais recentes, com combinações que trazem elegância e conforto. Explore novas tendências e aproveite ofertas especiais em um só lugar, com itens cuidadosamente selecionados para complementar seu guarda-roupa.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    
                    <Card
                    imagem={imagemValter} 
                    nome="Traje elegante" 
                    preco={50.00} 
                    fornecedor="Pela Valterlândia"
                    desconto={50}>
                    </Card>

                    <Card
                    imagem={imagemAnael}
                    nome = "Visual Bonito"
                    preco={37.99}
                    fornecedor="Por Vasco da Gama">
                    </Card>

                    <Card
                    imagem={imagemIttalo}
                    nome = "Elegante casual"
                    preco={53.99}
                    fornecedor="Por Voinha">
                    </Card>

                    <Card
                    imagem={imagemRyertson}
                    nome = "Traje Luxuoso"
                    preco={79.99}
                    fornecedor="Por combate a bombas">
                    </Card>

                    <Card
                    imagem={imagemAyrton}
                    nome = "kit pai e filho"
                    preco={29.99}
                    fornecedor="Por Ramon Menezes"
                    desconto={60}>
                    </Card>
                    
                </div>
            </div>
        </div>
    )
}