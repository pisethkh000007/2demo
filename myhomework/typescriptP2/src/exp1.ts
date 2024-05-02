class Book {
  constructor(
    public title: string,
    public author: string,
    public genre: string,
    public available: boolean = true
  ) {}
}

class Library {
  private books: Book[] = [];

  constructor(public name: string) {}

  addBook(book: Book) {
    this.books.push(book);
  }

  removeBookByTitle(title: string) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  searchByTitle(title: string): Book[] {
    return this.books.filter((book) => book.title.includes(title));
  }

  searchByAuthor(author: string): Book[] {
    return this.books.filter((book) => book.author.includes(author));
  }

  searchByGenre(genre: string): Book[] {
    return this.books.filter((book) => book.genre.includes(genre));
  }

  displayAvailableBooks(): Book[] {
    return this.books.filter((book) => book.available);
  }

  borrowBook(title: string, user: User): void {
    const book = this.books.find(
      (book) => book.title === title && book.available
    );
    if (book) {
      book.available = false;
      user.borrowedBooks.push(book);
      console.log(`${user.name} borrowed "${book.title}"`);
    } else {
      console.log(`Sorry, "${title}" is not available for borrowing.`);
    }
  }

  returnBook(title: string, user: User): void {
    const index = user.borrowedBooks.findIndex((book) => book.title === title);
    if (index !== -1) {
      const book = user.borrowedBooks[index];
      book.available = true;
      user.borrowedBooks.splice(index, 1);
      console.log(`${user.name} returned "${book.title}"`);
    } else {
      console.log(`"${title}" is not borrowed by ${user.name}.`);
    }
  }
}

class User {
  borrowedBooks: Book[] = [];

  constructor(public name: string) {}

  borrowBook(library: Library, title: string): void {
    library.borrowBook(title, this);
  }

  viewBorrowedBooks(): void {
    if (this.borrowedBooks.length === 0) {
      console.log(`${this.name} hasn't borrowed any books.`);
    } else {
      console.log(`${this.name}'s borrowed books:`);
      this.borrowedBooks.forEach((book) => console.log(`- ${book.title}`));
    }
  }
}

// Testing the classes

const library = new Library("My Library");

const book1 = new Book("Title1", "Author1", "Genre1");
const book2 = new Book("Title2", "Author2", "Genre2");
const book3 = new Book("Title3", "Author1", "Genre3");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const user1 = new User("User1");
const user2 = new User("User2");

user1.borrowBook(library, "Title1");
user2.borrowBook(library, "Title2");

library.displayAvailableBooks().forEach((book) => console.log(book.title));

user1.viewBorrowedBooks();
user2.viewBorrowedBooks();

library.returnBook("Title1", user1);
library.returnBook("Title2", user2);

library.displayAvailableBooks().forEach((book) => console.log(book.title));
