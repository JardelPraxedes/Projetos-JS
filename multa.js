//velocidade maxima 70 km
//cada 5km acima do limite ganha +1 ponto carteira
//math.floor() -> arredonda numero
//caso pontos maior que 12 -> carteira suspendida 1
console.log(medidor_velocidade(135))
function medidor_velocidade(velocidade){
    carteira =0
    if (velocidade <=70) {
        return 'Em velocidade permitida!'
    }
    else {
        pontos_carteira = (velocidade - 70)/5
        carteira =+pontos_carteira
        carteira = Math.floor(carteira)
        console.log('Acima da velocidade, foi adcionado ' + carteira + ' ponto(s) na sua carteira')
        if (carteira >12){
            console.log('Sua carteira foi suspendida')
            }
    }
}
