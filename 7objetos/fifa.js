class Jogador {

    constructor(name, equipe, age) {
        this.nome = name
        this.time = equipe
        this.idade = age

    }
    chutar = () => document.write("<img src='7objetos/chute.png'><br>", this.nome, " está chutando...")
    correr = () => document.write("<img src='7objetos/corre.png'><br>", this.nome, " está correndo...")
}

player1 = new Jogador('Suárez', 'Rare Gold', 35)
player2 = new Jogador('Pogba', 'Oro Rari', 29)
player3 = new Jogador('Jamilly', 'Opaaa', 21)
players = new Array(player1, player2, player3)

console.log(players)










