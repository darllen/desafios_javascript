const pulaLinha = () => document.write('<br>')

function questao1() {
    gabarito = new Array('A', 'C', 'E', 'B', 'D', 'B', 'B', 'C', 'A', 'E');
    answer = new Array();
    matriz = new Array();

    for (i = 0; i <= 9; i++) {
        answer.push(prompt('Digite a resposta: '));
    }

    for (i = 0; i <= 9; i++) {
        if (gabarito[i] == answer[i]){
            matriz.push([answer[i],1]);
        } else {
            matriz.push([answer[i],0]);
        }
    }
    console.log(matriz);
}

function questao2() {
    respostas = [], [];
    nota = 0
    somaIdadeOtimo = somaIdadeRegular = 0
    mediaIdadeRegular = mediaIdadeOtimo = 0
    qIdadeOtimo = qIdadeRegular = qPessoasBom = 0


    document.write('ÓTIMO --> 3<br> BOM --> 2<br>REGULAR --> 1<br>')
    document.write('**Digite 4 para encerrar <br><br>')

    while (nota != 4) {
        nota = parseInt(prompt('Informe a nota: '));
        idade = parseInt(prompt('Informe a idade: '));

        respostas.push([idade, nota])
        if (nota == 4) {
            respostas.pop()
        }
    }

    percorrer = respostas.map(function (resp) {
        if (resp[1] == 3) {
            somaIdadeOtimo += resp[0]
            qIdadeOtimo += 1
        } else if (resp[1] == 2) {
            qPessoasBom += 1
        } else if (resp[1] == 1) {
            somaIdadeRegular += resp[0]
            qIdadeRegular += 1
        }
    });

    mediaIdadeOtimo = somaIdadeOtimo / qIdadeOtimo
    mediaIdadeRegular = somaIdadeRegular / qIdadeRegular

    document.write('Média de idade, ÓTIMO: ', mediaIdadeOtimo.toFixed(1))
    pulaLinha()
    document.write('Quantidade de pessoas, BOM: ', qPessoasBom)
    pulaLinha()
    document.write('Média de idade, REGULAR: ', mediaIdadeRegular.toFixed(1))
}

function questao3() {
    clientes = new Array();
    ask = 'S'
    do {
        nome = prompt('Nome: ')
        vCompras = parseFloat(prompt('Valor das compras no último ano: R$'))

        clientes.push([nome, vCompras])

        ask = prompt('Novo cliente? [S/N] ').toUpperCase()

    } while (ask == 'S')

    percorrer = clientes.map(function (dado) {
        if (dado[1] < 1000) {
            bonus = (10 * dado[1]) / 100
            document.write('Olá, ', dado[0], '! Você recebeu R$', bonus.toFixed(2).replace('.', ','), ' de bônus!')
            pulaLinha();
        } else {
            bonus = (15 * dado[1]) / 100
            document.write('Olá, ', dado[0], '! Você recebeu R$', bonus.toFixed(2).replace('.', ','), ' de bônus!')
            pulaLinha();
        }
    });
}

function questao4() {
    pacientes = new Array()
    qFichas = parseInt(prompt('Quantas fichas? '))

    for (i = 0; i < qFichas; i++) {
        nomePaciente = prompt('Nome do paciente: ')
        idade = parseInt(prompt('Idade do paciente: '))
        espe = prompt('Especialidade desejada: ')

        if (idade < 18) {
            nomeRespon = prompt('Nome do acompanhante: ')
            pacientes.push([nomePaciente, idade, espe, nomeRespon])
        } else {
            pacientes.push([nomePaciente, idade, espe])
        }
    }

    percorrer = pacientes.map(function (iha) {
        document.write('Paciente: ', iha[0])
        pulaLinha();
        document.write('Idade: ', iha[1])
        pulaLinha();
        document.write('Especialidade: ', iha[2])
        pulaLinha();
        if (iha[1] < 18) {
            document.write('Responsável: ', iha[3])
        }
        pulaLinha(); pulaLinha(); pulaLinha(); pulaLinha();
    })
}

function questao5() {
    trem = new Array() /* COM 22 VAGÕES */
    vagao = new Array() /* COM 3 CAIXAS */
    caixa = 11

    for (i = 0; i < 3; i++) {
        vagao.push(caixa)
        caixa += 3
    }

    for (i = 1; i <= 22; i++) {
        trem.push(vagao)
        document.write('Vagão ', i)
        pulaLinha();
        document.write('Maçãs: ', vagao[0], ' unidades')
        pulaLinha();
        document.write('Uvas: ', vagao[1], ' unidades')
        pulaLinha();
        document.write('Bananas: ', vagao[2], ' unidades')
        pulaLinha(); pulaLinha(); pulaLinha();

    }

    console.log(trem)

}

function questao6() {
    listagem = new Array()

    do {
        nome = prompt('Nome: ')
        matricula = parseInt(prompt('Matrícula: '))

        listagem.push([nome, matricula])

        ask = prompt('Há mais alguém presente? [S/N]').toUpperCase()
    } while (ask == 'S')

    document.write('Total: ', listagem.length, ' presentes')
    pulaLinha(); pulaLinha();
    for (i = 0; i < listagem.length; i++) {
        document.write('Nome: ', listagem[i][0])
        pulaLinha();
        document.write('Matrícula: ', listagem[i][1])
        pulaLinha(); pulaLinha();
    }
    console.log(listagem)

}

function questao7() { /* FALTA VALDIAR OS VALORES -3 <= habilidades <= 3 */
    characters = new Array()

    do {
        character = prompt('Nome: ')
        force = parseInt(prompt('Força: '))
        dexterity = parseInt(prompt('Destreza: '))
        agility = parseInt(prompt('Agilidade: '))
        intelligence = parseInt(prompt('Inteligência: '))
        perception = parseInt(prompt('Percepção: '))

        characters.push([character, force, dexterity, agility, intelligence, perception])

        ask = prompt('Add character? [S/N]').toUpperCase()
    } while (ask == 'S')

    for (i = 0; i < characters.length; i++) {
        document.write('---> ', characters[i][0], ' <---')
        pulaLinha();
        document.write('Força: ', characters[i][1])
        pulaLinha();
        document.write('Destreza: ', characters[i][2])
        pulaLinha();
        document.write('Agilidade: ', characters[i][3])
        pulaLinha();
        document.write('Inteligência: ', characters[i][4])
        pulaLinha();
        document.write('Percepção: ', characters[i][5])
        pulaLinha(); pulaLinha();
    }
    console.log(characters)

}

function questao8() {
    matriz = new Array()

    for (i = 1; i <= 20; i++) {
        matriz.push([i, ''])
    }

    percorrer = matriz.map(function (lec) {
        if (lec[0] % 2 == 0) {
            lec[1] = lec[0] * 3
        }
    })

    console.log(matriz)
}

function questao9() {
    matriz = new Array()

    for (i = 1; i <= 15; i++) {
        matriz.push([i, 0])
    }
    percorrer = matriz.map(
        function (got) {
            got[1] = got[0] ** 2
        }
    );
    console.log(matriz)
}

function questao10() {
    compras = new Array()
    ask = 'S'
    newBuy = 'S'

    while (newBuy == 'S') {
        itens = new Array()
        while (ask == 'S') {
            item = prompt('Item: ')
            price = parseFloat(prompt('Preço: '))
            itens.push([item, price])
            ask = prompt('Novo item? [S/N]').toUpperCase()
        }
        compras.push(itens)
        newBuy = prompt('Nova compra? [S/N]').toUpperCase()
        if (newBuy == 'S') {
            ask = 'S'
        }
    }

    valorCompra = 0
    document.write('NOTA DO CAIXA')
    pulaLinha();
    for (i = 1; i < compras.length + 1; i++) {
        document.write('Compra ', i, ': ')
        pulaLinha();

        /* FALTA ACHAR UM JEITO DE EXIBIR */

        document.write('Valor Compra: R$ ', valorCompra)
        pulaLinha(); pulaLinha(); pulaLinha();
    }

    console.log(compras)

}

questao1();
