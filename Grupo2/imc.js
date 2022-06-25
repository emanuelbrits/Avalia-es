import {input} from "./io_utils.js"

function main(){

    const p = Number(input('Digite o seu peso: '))
    const a = Number(input('Digite a sua altura: '))

    function imc(){
        return (p / (a * a))
    }

    console.log(`IMC: ${imc().toFixed(1)}`)

    peso()

    function peso(){
        if(imc() < 19.8){
            console.log('Você deve ganhar peso para entrar na faixa de IMC normal')
    
            const ganhar_imc = 19.8 - imc()
    
            const kg = ganhar_imc * a * a
    
            console.log(`Você precisa ganhar ${kg.toFixed(3)} kg`)

            const consumo = Number(input('Digite quantas calorias você irá ingerir por dia: '))

            const cal_necessaria = kg * 7000

            const gasto_90_dias = cal_necessaria - consumo

            const gasto_diario = gasto_90_dias / 65

            console.log(`Você deverá gastar ${gasto_diario.toFixed(2)} calorias por dia`)
        }else if(imc() > 24.9){
            console.log('Você deve perder peso para entrar na faixa de IMC normal')
    
            const perder_imc = imc() - 24.9
    
            const kg = perder_imc * a * a
    
            console.log(`Você precisa perder ${kg.toFixed(3)} kg`)

            const consumo = Number(input('Digite quantas calorias você irá ingerir por dia: '))

            const cal_necessaria = kg * 7000

            const gasto_90_dias = cal_necessaria + consumo

            const gasto_diario = gasto_90_dias / 65 + consumo

            console.log(`Você deverá gastar ${gasto_diario.toFixed(2)} calorias por dia`)
        }
    }
    
}
main()