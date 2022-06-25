import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const a = Number(input("Digite um número: "))
    const b = Number(input("Digite outro número: "))
    
    let mmc = 1
    
    while(!(multiplo(mmc, a) && multiplo(mmc, b))){
        mmc++
    }
    
    console.log(`O MMC de ${a} e ${b} é ${mmc}`)
}
    
function multiplo(valor1, valor2){
    return valor1 % valor2 === 0
}

main()