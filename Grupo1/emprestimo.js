import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const renda_mensal = Number(input('Renda mensal:'))
    const valor_emprestimo = Number(input('Valor do empréstimo: '))
    const prazo = Number(input('Parcelas: '))

    const parcela = valor_emprestimo / prazo
    const iof = (valor_emprestimo * (0.38 / 100)) + ((0.0082 / 100) * (30 * prazo))
    const juros = calcular_juros(prazo)
    const valor_juros = (valor_emprestimo + iof) * juros
    const valor_total = valor_emprestimo + valor_juros
    const parcela_total = valor_total / prazo

    if((prazo >= 2 && prazo <= 24) && (parcela_total <= (renda_mensal * 40 / 100))){
        console.log(`IOF: R$ ${iof.toFixed(2)}`)
        console.log(`Juros a pagar: R$ ${valor_juros.toFixed(2)}`)
        console.log(`Valor total a pagar: R$ ${valor_total.toFixed(2)}`)
        console.log(`Valor da parcela mensal: R$ ${parcela_total.toFixed(2)}`)
        console.log(`Empréstimo aprovado`)
    }else{
        console.log(`Empréstimo negado`)
    }
}

function calcular_juros(prazo){
    let juros = 0

    if(prazo <= 6){
        juros = 0.5
    }else if(prazo <= 12){
        juros = 0.75
    }else if(prazo <= 18){
        juros = 1
    }else{
        juros = 1.30
    }

    return juros
}

main()