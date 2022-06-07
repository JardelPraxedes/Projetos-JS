//se entrada divisivel por 3 == fizz
//se entrada divisivel por 5 == buz
//se ambas == fizzbuzz
function fizzbuzz(entrada){
    if(entrada % 3 === 0){
        return 'fizz'
    }
    else if (entrada % 5 ===0) {
        return 'buzz'
    }
    else if (entrada % 3 ===0 && entrada % 5 ==0) {
        return 'fizzbuzz'
    }
    else if (typeof entrada!= 'number'){
        return 'não é um número'
    }
    else 
    return 'valores não se encaixam no fizzbuzz'
}
console.log(fizzbuzz('2'))