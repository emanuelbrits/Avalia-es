import { readFileSync } from 'fs'
import {input} from "./io_utils.js"

function main(){

    const alunos =  readFileSync('notas.txt', 'utf-8').split('\n')
    const aulas = 70
    
    let media = 0

    let aprovado = 0
    let reprovado = 0
    let prova_final = 0
    let reprovados_por_falta = 0

    let total_sala = 0

    for(let aluno of alunos){

        const dados = aluno.split(';')

        const nome = dados[0]
        const nota1 = Number(dados[1])
        const nota2 = Number(dados[2])
        const nota3 = Number(dados[3])
        
        const presenca = dados[4].split('/')
        const faltas = presenca[0]
        const presente = presenca[1]

        media = ((nota1 * 1) + (nota2 * 2) + (nota3 * 3)) / 6

        console.log(`Nome: ${nome}, Média: ${media.toFixed(1)}`)
       
    if(faltas <= (70 * (25/100))){
        if(media < 4){
            reprovado++
        }else if(media <= 6.9){
            prova_final++
        }else{
            aprovado++
        }
    }else{
        reprovados_por_falta++
    }

        total_sala+= media

    }

    const media_sala = total_sala / alunos.length
    console.log(`Média da sala: ${media_sala.toFixed(1)}`)
    console.log(`Aprovados: ${aprovado}`)
    console.log(`Prova final: ${prova_final}`)
    console.log(`Reprovados: ${reprovado}`)
    console.log(`Reprovados por falta: ${reprovados_por_falta}`)

}

main()