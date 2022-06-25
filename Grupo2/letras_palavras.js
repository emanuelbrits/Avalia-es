import {input} from "./io_utils.js"

function main(){

    let frase = input("Digite uma frase: ")

    let palavras = frase.split(" ")

    let tamanho = palavras.length
    
    let i = 0

    let par = 0
    let impar = 0

    let caracteres = 0

    let letras

    while(i < tamanho){

        letras = palavras[i++].length

        if(letras % 2 === 0){
            par++
            caracteres+= letras
        }else{
            impar++
            caracteres+= letras
        }

        letras = 0

    }

    console.log(`Palavras pares: ${par}, palavras ímpares: ${impar}`)
    console.log(`Quantidade de caracteres: ${caracteres}`)

}
main()