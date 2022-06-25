import {input} from "./io_utils.js"

function main(){

    const objetivo = input('digite o objetivo: ')
    const necessita = Number(input("Digite o valor: "))
    const salario = Number(input("Digite o salario: "))
    const investimento = Number(input("Digite quanto você vai investir: "))
    const juros = Number(input("Digite os juros: "))

    const porc_investimento = investimento / 100
    const porc_juros = juros / 100

    const investido = salario * porc_investimento

    let meses = 1
    let dinheiro = investido

    while(dinheiro < necessita){
        dinheiro = dinheiro + (dinheiro * porc_juros) + investido
        meses++
        
        if(meses > 12){
            const anos = Math.trunc(meses / 12)
            const resto = meses % 12
            const mes = resto 

            console.log(`Ano ${anos}, mês ${mes}`)
            console.log(`Saldo: R$ ${dinheiro.toFixed(2)}`)
        }else{
        console.log(`mês ${meses}`)
        console.log(`Saldo: R$ ${dinheiro.toFixed(2)}`)
        }

        
    }

    console.log(`Serão necessários ${meses} meses.`)

}
main()