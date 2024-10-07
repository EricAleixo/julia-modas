export const calcularDesconto = (preco: number, desconto: number) => {
    const precoDescontado = preco - preco * (desconto / 100)
    return precoDescontado.toFixed(2)
}