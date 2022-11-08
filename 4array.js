
const pulaLinha = () => document.write('<br>')

function questao1() {
    let vetor = [1, 2, 3, 4, 5]
    document.write(vetor)
}

function questao2() {
    let nomes = new Array();
    let alturas = new Array();
    for (i = 0; i <= 2; i++) {
        let nome = prompt('Nome aluno: ');
        nomes.push(nome);
        let altura = parseFloat(prompt('Altura aluno: ')).toFixed(2).replace('.', ',');
        alturas.push(altura);
    }

    for (i = 0; i <= 2; i++) {
        document.write('Aluno(a): ', nomes[i]);
        pulaLinha();
        document.write('Altura: ', alturas[i]);
        pulaLinha();
        pulaLinha();
        pulaLinha();
    }
}

function questao3() {
    let numeros = new Array()
    for (i = 1; i <= 20; i++) {
        if (i % 2 != 0) {
            quadrado = Math.pow(i, 2)
            numeros.push(quadrado)
        }
    }
    document.write(numeros)
}
var a = new Array(25, 6, -9, 22, 34)
var b = new Array(56, 12, 0, -89, 4)
function questao4e5() {
    var c = new Array()

    for (i = 0; i <= a.length - 1; i++) {
        soma = a[i] + b[i]
        c.push(soma)
    }
    document.write(c)
}

function questao6() {
    var v = new Array(2, 6, 8, 3, 10, 9, 1, 21, 33, 14)
    var x = 2
    var y = 4

    document.write(v[v[x + y]])
}

var nomes = new Array('Rafaela', 'Joana', 'Letícia', 'Isaac', 'Brenda', 'Maria', 'Luiz', 'Isabelly')
var sobrenomes = new Array('Ribeiro', 'Castro', 'Nogueira', 'Rocha', 'Cruz', 'Gomes', 'Pinto', 'Carvalho')
function questao7() {
    var nome_completo = new Array()

    for (i = 0; i <= 7; i++) {
        nome_completo.push(nomes[i] + ' ' + sobrenomes[i])
    }
    document.write(nome_completo)
}

function questao8() {
    var c = new Array(a.concat(b))
    document.write(c)
}

function questao9() {
    buscaNome = prompt('Procurar nome: ')
    busca = nomes.indexOf(buscaNome)

    if (busca != -1) {
        document.write('Nome encontrado: ', nomes[busca])
    } else {
        document.write('Nome não encontrado')
    }
}

var n = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20)
function questao10() {
    for (i = 0; i <= 19; i++) {
        document.write(n[i], ' ')
    }
    pulaLinha()

    aux = n[0]
    n[0] = n[19]
    n[19] = aux

    aux = n[1]
    n[1] = n[18]
    n[18] = aux

    /* FALTA TROCAR O 10 COM O 11 */
    for (i = 2; i <= 10; i++) {
        apoio = n[i]
        n[i] = n[19 - i]
        n[19 - i] = apoio
    }

    pulaLinha()
    for (i = 0; i <= 19; i++) {
        document.write(n[i], ' ')
    }

}

function questao11() {
    menor = Math.min(...n)
    maior = Math.max(...n)
    document.write('Menor valor: ', menor)
    pulaLinha()
    document.write('Maior valor: ', maior)
}

function questao12() {
    idades = new Array()

    for (i = 0; i <= 11; i++) {
        idades.push(parseInt(prompt('Idade: ')))
    }
    document.write(idades)

}

function questao13() {
    for (i = 0; i <= nomes.length - 1; i++) {
        document.write(nomes[i])
        pulaLinha()
    }
}

function questao14() {
    for (i = 0; i <= nomes.length - 1; i++) {
        document.write(nomes[i], ' ', sobrenomes[i])
        pulaLinha()
    }
}


questao14();

