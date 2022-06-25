import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let impar = 0
    let par = 0
    let positivo = 0
    let negativo = 0

    let N1 = Number(input('Digite um número: '))
    let N2 = Number(input('Digite um número: '))
    
    let maior = N1
    let menor = N2

    if(N1 > N2){
        maior = N1
        menor = N2
    }else{
        maior = N2
        menor = N1
    }

    if(eh_par(N1)){
        par++
    }else{
        impar++
    }

    if(eh_positivo(N1)){
        positivo++
    }else{
        negativo++
    }
    
    if(eh_par(N2)){
        par++
    }else{
        impar++
    }

    if(eh_positivo(N2)){
        positivo++
    }else{
        negativo++
    }

    while(!eh_multiplo(maior, menor)){
        N1 = N2
        N2 = Number(input('Digite um número: '))

        if(N1 > N2){
            maior = N1
            menor = N2
        }else{
            maior = N2
            menor = N1
        }

        if(eh_par(N1)){
            par++
        }else{
            impar++
        }

        if(eh_positivo(N1)){
            positivo++
        }else{
            negativo++
        }

    }

    console.log(`${par} números pares`)
    console.log(`${impar} números ímpares`)
    console.log(`${positivo} números positivos`)
    console.log(`${negativo} números negativos`)
}

function eh_par(valor){
    return valor % 2 == 0
}

function eh_positivo(valor){
    return valor >= 0
}

function eh_multiplo(valor1, valor2){
    return valor1 % valor2 == 0
}

main()