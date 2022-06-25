import { readFileSync } from 'fs'
import {input} from "./io_utils.js"

function main(){

    const contas =  readFileSync('vendasmensais.txt', 'utf-8').split('\n')
    let total_cashback = 0
    let total_vendas = 0
    let maior = -1
    let menor = -1

    for(let compras of contas){
        
        const dados = compras.split(' ')
        const nome = dados[0]
        const gasto = Number(dados[1])

        const cashback = gerar_cashback(gasto)

        if(maior === -1){
            maior = cashback
            menor = cashback
        }else{
            if(cashback > maior){
                maior = cashback
            }else if(cashback < menor){
                menor = cashback
            }
        }

        total_cashback += cashback
        total_vendas += gasto

        console.log(`Cliente: ${nome}, Gasto: R$ ${gasto.toFixed(2)}, Cashback: R$ ${cashback.toFixed(2)}`)
    }

    const porcentagem_cashback = total_cashback / total_vendas * 100
    const media_cashback = total_cashback / contas.length

    console.log(`Faturamento: R$ ${total_vendas.toFixed(2)}`)
    console.log(`Cashback(total): R$ ${total_cashback.toFixed(2)}`)
    console.log(`Cashback: ${porcentagem_cashback.toFixed(1)}%`)
    console.log(`Maior Cashback: R$ ${maior.toFixed(2)}`)
    console.log(`Menor Cashback: R$ ${menor.toFixed(2)}`)
    console.log(`Cashback Médio: R$ ${media_cashback.toFixed(2)}`)
}

function gerar_cashback(gasto){
    let cashback_cliente

    if(gasto < 250){
        cashback_cliente = gasto * (5/100)
    }else if(gasto < 500){
        cashback_cliente = gasto * (7/100)
    }else if(gasto < 750){
        cashback_cliente = gasto * (8/100)
    }else{
        cashback_cliente = (250 * (5/100)) + (500 * (7/100)) + (750 * (8/100)) + ((gasto - 750) * (25/100))
    }

    return cashback_cliente
}

main()