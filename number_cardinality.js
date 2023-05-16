function number_cardinality(num) {
    let resultado
    let ultimoNum = num.toString()[num.toString().length - 1]
    if (num%2 == 0) {
        (ultimoNum == "0")? resultado = "zero": resultado = "even"
    }else{
        (ultimoNum == "5")? resultado = "five": resultado = "odd"
    }
    return resultado
}

