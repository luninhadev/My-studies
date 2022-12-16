/* 
    - Buscando e contando  dados em Arrays -

    Baseado no Array de livros por Categoria abaixo, faça os seguintes desafios
        * Contar o número de categorias e o número de livros em cada categoria
        * Contar o número de autores
        * Mostrar livros do autor Augusto Cury
        * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                tittle: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                tittle: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                tittle: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                tittle: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                tittle: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {   
                tittle: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
]

function bookSearchAndCouting(nameAuthor){
    let totalCategory = 0
    let booksCategory = 0
    let totalBooks = 0
    let totalAuthor = 0
    let authorsName = [[],[]]

    for (i = 0; i < booksByCategory.length; i++){
       totalCategory += 1
        // Busca todas as categorias, todos os livros e preenche o array com os nomes dos autores
       for (x = 0; x < booksByCategory[i].books.length; x++){
            booksCategory += 1
            totalBooks += 1
            authorsName[i][x] = booksByCategory[i].books[x].author  
       }

       console.log(`Total of books category ${booksByCategory[i].category}: ${booksCategory}`)
       booksCategory = 0
    }
    // Ordenando os elementos array
    authorsName.sort()
    
    for(i = 0; i < booksByCategory.length; i++){
        for (x = 0; x <= booksByCategory[i].books.length; x++){
            //Verificando duplicidade dos autores e contando-os
            if (authorsName[i][x] =! authorsName[i][x+1]){
                totalAuthor += 0
            } else {
                totalAuthor += 1
            }
        }
    }
    console.log(`Amount of categories: ${totalCategory}`)
    console.log(`Amount of the books in all categories: ${totalBooks}`)
    console.log(`Number of authors: ${totalAuthor}`)
    
    //Mostrando os livro por pesquisa de autor
    switch (nameAuthor){
        case 'Augusto Cury':
            console.log(`All books of author ${nameAuthor}:`)
            console.log(booksByCategory[1].books[0].tittle)
            console.log(booksByCategory[1].books[1].tittle)
            break;
        case 'Stephen R. Covey':
            console.log(`All books of author ${nameAuthor}:`)
            console.log(booksByCategory[1].books[2].tittle)
            break;
        case 'Robert T. Kiyosaki e Sharon L. Lechter':
            console.log(`All books of author ${nameAuthor}:`)
            console.log(booksByCategory[0].books[2].tittle)
            break;
        case 'George S. Clason':
            console.log(`All books of author ${nameAuthor}:`)
            console.log(booksByCategory[0].books[1].tittle)
            break;
        case 'T. Harv Eker':
            console.log(`All books of author ${nameAuthor}:`)
            console.log(booksByCategory[0].books[0].tittle)
            break;
    }
    return nameAuthor
}

bookSearchAndCouting('Augusto Cury')


//   RESOLUÇÃO PROFESSOR

const totalCategories = booksByCategory.length

console.log(totalCategories)
for (let category of booksByCategory){
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = []

    for (let category of booksByCategory){
        for (let book of category.books){
            if (authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores: ", authors.length)
}

countAuthors()

function booksOfAuthor(author){
    let books = []

    for (let category of booksByCategory){
        for (let book of category.books){
            if (book.author === author){
                books.push(book.tittle)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('T. Harv Eker')