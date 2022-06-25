import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const km_l_gasolina = Number(input('Qual rendimento do carro com gasolina: '))
    const km_l_alcool = Number(input('Qual rendimento do carro com alcool: '))
    const distancia = Number(input('Distância percorrida: '))
    
    const preco_gasolina = Number(input('Preço da gasolina: '))
    const preco_alcool = Number(input('Preço do álcool: '))

    console.log(`Preço se usar álcool: R$ ${((distancia / km_l_alcool) * preco_alcool).toFixed(2)}`)
    console.log(`Preço se usar gasolina: R$ ${((distancia / km_l_gasolina) * preco_gasolina).toFixed(2)}`)
    
}

main()