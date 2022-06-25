import {input} from "./io_utils.js"

function main(){

    const salario = Number(input("Digite o salário: "))
    const inflacao = Number(input("Digite a inflação: ")) 

    const porcento = inflacao / 100

    const novo_salario = salario + (salario * porcento)

    let incremento = Number(input("Digite o incremento do salário: "))

    let sal = salario

    sal = salario + incremento

    while(sal < novo_salario){
        incremento = Number(input("Digite o incremento do salário: "))
        sal = sal + incremento
        console.log(`Novo salário: R$ ${sal}`)
    }
    
}
main()