let book = {
    title: 'Pride and prejudiccte',
    author: 'Jane Austen',
    pc: 'Principis',
    year: 2018,
    rating: 'Livre',
    printInfo: function () {
        document.write('<br><br>Título: ', book.title)
        document.write('<br>Autora: ', book.author)
        document.write('<br>Editora: ', book.pc)
        document.write('<br>Ano de publicação: ', book.year)
    }
}
book.printInfo();
book.title = 'Pride and Prejudice'
book.printInfo();

ask_digital = prompt('O livro tem versão digital? [S/N]').toUpperCase()
if (ask_digital == 'S') {
    book.link = 'https://m.media-amazon.com/images/I/41c4LP5otfL.jpg';
}

ask_rating = prompt('O livro tem classificação etária? [S/N]').toUpperCase()
if (ask_rating == 'S') {
    book.rating = 12;
} else {
    delete book.rating
}

console.log(book)
