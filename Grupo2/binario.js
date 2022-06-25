import {input} from "./io_utils.js"

function main(){

    const frase = input("Digite uma frase: ")

    const esta_valido = mensagem_valida(frase)

    if(esta_valido){
        console.log('sequência de Bits OK')
    }else{
        console.log('"Mensagem corrompida: Sequência de bits inválida')
    }

}

function mensagem_valida(frase){
    const octals = frase.split("-")
    let valor_letra

    for(let octal of octals ){
            valor_letra = binario_para_decimal(octal)
            if(!digito_valido(valor_letra)){
                return false
            }
        }

        return true
    }



function binario_para_decimal(valor){
    let i = 0
    let soma = 0
    let valor_digito

    while(i < valor.lenght){
        valor_digito = Number(valor[i]) * ((7 - i) ** 2)

        soma+= valor_digito
        i++
    }


    return soma
}

function digito_valido(valor_letra){
    return eh_letra(valor_letra) || eh_numero(valor_letra) || eh_espaco(valor_letra)
}

function eh_letra(valor){
    return valor >= 97 && valor <= 122
}

function eh_numero(valor){
    return valor >= 48 && valor <= 57
}

function eh_espaco(valor){
    return valor === 32
}

main()