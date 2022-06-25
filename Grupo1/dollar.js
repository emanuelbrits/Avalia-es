import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const cotacao = Number(input('Qual a cotação hoje do dólar: '))
    const qtd_dollar = Number(input('Quantos dólares você quer comprar: '))

    const iof = qtd_dollar * cotacao * (1.1 / 100)

    const valor_em_brl = qtd_dollar * cotacao + iof

    console.log(`Valor a pagar em R$: ${valor_em_brl.toFixed(2)}, IOF: R$ ${iof.toFixed(2)}`)
}

main()