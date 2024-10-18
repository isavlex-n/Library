import './style.css'

class Book {
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
    this.status = 'доступна'
  }

  getInfo() {
    return `${this.title} - ${this.author} (ISBN: ${this.isbn}) - ${this.status}`
  }
}

class Library {
  constructor() {
    this.books = {}
  }

  addBook(book) {
    if (this.books[book.isbn]) {
      console.log(`Книга с ISBN ${book.isbn} уже существует в библиотеке.`)
      return
    }

    this.books[book.isbn] = book
    console.log(`Книга ${book.title} - добавлена в библиотеку.`)
  }

  borrowBook(isbn) {
    const book = this.books[isbn]
    if (!book) {
      console.log(`Книга с ISBN ${isbn} не найдена в библиотеке.`)
      return
    }

    if (book.status === 'взята') {
      console.log(`Книга '${book.title}' уже взята.`)
      return
    }

    book.status = 'взята'
    console.log(`Вы взяли книгу '${book.title}'.`)
  }

  returnBook(isbn) {
    const book = this.books[isbn]
    if (!book) {
      console.log(`Книга с ISBN ${isbn} не найдена в библиотеке.`)
      return
    }

    if (book.status === 'доступна') {
      console.log(`Книга '${book.title}' уже доступна.`)
      return
    }

    book.status = 'доступна'
    console.log(`Книга '${book.title}' возвращена в библиотеку.`)
  }

  listAvailableBooks() {
    Object.keys(this.books).forEach(key => {
      const book = this.books[key]
      if(book.status === 'доступна') {
        console.log(book.getInfo())
      }
    })
  }
}

const library = new Library()
const book1 = new Book('Война и мир', 'Лев Толстой', '12345')
const book2 = new Book('Преступление и наказание', 'Федор Достаевский', '678910')

library.addBook(book1)
library.addBook(book2)

library.listAvailableBooks()

library.borrowBook('12345')

library.listAvailableBooks()

library.returnBook('12345')

library.listAvailableBooks()