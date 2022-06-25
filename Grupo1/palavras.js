import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const frase = input('Frase: ').split(' ')

    const palavras = frase.length

    console.log(`${palavras} palavras`)
}

main()