function questao1(x, y) {
    if (y == 0) {
        document.write('Valor inválido')
        y = parseInt(prompt('Número 2: '))
    }

    return x / y
}

function questao2(a, b, c) {
    if (a == b && a == c && c == b) {
        triangulo = 'EQUILÁTERO'
    } else if (a != b && a != c && b == c) {
        triangulo = 'ISÓSCELES'
    } else {
        triangulo = 'ESCALENO'
    }

    return triangulo;
}

function questao3(x) {
    if (x <= 500.0) {
        p = 10
        discount = (10 * x) / 100
    } else {
        p = 15
        discount = (15 * x) / 100
    }

    value = x - discount

    document.write('Percentual do desconto: ', p)
    document.write('<br>Valor do desconto: ', discount)
    document.write('<br>Valor total da compra: ', value)

}

function questao4(x, opt) {

    switch (opt) {
        case 1:
            out = 'a vista com 10% de desconto';
            total = x - ((10 * x) / 100)
            break;
        case 2:
            out = 'em duas vezes (preço da etiqueta)';
            total = x
            break;
        case 3:
            out = 'de 3 a 10 vezes'
            total = x
            if (x > 100) {
                out = 'de 3 a 10 vezes com 3% de juros ao mês'
                total = x + ((3 * x) / 100)
            }
            break;
    }

    document.write('Opção: ', opt)
    document.write('<br>', out)
    document.write('<br>Total a pagar: ', total)
}

function questao5(b, n) {
    return b ** n
}

function questao6(values, value) {

    search = values.indexOf(value)
    if (search != -1){
        out = 'Valor existe e está na posição: ' + search;
    } else{
        out = 'Valor desejado não existe'
    }

    return out
}

function questao7(vFinal, t, a){

    vInitial = vFinal - (t * a)
    
    d = (vInitial * t) + (a * (t ** 2))

    return d
}

//QUESTÃO3 
//lado1 = parseInt(prompt('Lado 1: '))
//lado2 = parseInt(prompt('Lado 2: '))
//lado3 = parseInt(prompt('Lado 3: ')) 


/* ============================
document.write(questao1(348, 2));
document.write(questao2(lado1, lado2, lado3)); 
questao3(500);
questao4(120, 1);
document.write(questao5(5,2)); 
document.write(questao6([1, 2, 3, 4, 5], 3));*/
document.write(questao7(80, 5, 10),' Km')


