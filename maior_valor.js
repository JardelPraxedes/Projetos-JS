//escreve uma função que usa 2 numeros e retorna o maior entre eles
function numberMaior (entrada1, entrada2){
    if (entrada1 > entrada2) {
        return entrada1
    }
    else if (entrada1==entrada2 ) {
        return 'valores iguais'
    }
    else 
        return entrada2
}
console.log(numberMaior(2,2))