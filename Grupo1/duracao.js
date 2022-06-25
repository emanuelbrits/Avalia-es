import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const momento_inicial = input('Digite um horário: (hh:mm)').split(':').map(Number)
    const momento_final = input('Digite um horário: (hh:mm)').split(':').map(Number)

    const h1 = momento_inicial[0]
    const m1 = momento_inicial[1]
    
    const h2 = momento_final[0]
    const m2 = momento_final[1]
    
    let h_final = h2 - h1
    let m_final = m2 - m1

    if(m_final < 0){
        m_final += 60
        h_final -= 1
    }

    console.log(`${h_final} horas e ${m_final} minutos`)
}

main()