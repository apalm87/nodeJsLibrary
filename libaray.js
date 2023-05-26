//libaray class. Two different counties will use the s
class Library {
    constructor(locationID, county, city) {
      this.locationID = locationID;
      this.county = county;
      this.city = city;
      this.books = new Map(); // Store library books in a Map
    }
  
    addBook(book, bookID) {
      book.availability = true; // Set initial book status to available
      this.books.set(bookID, book);
    }
  
    borrowBook(bookID) {
      const book = this.books.get(bookID);
      if (!book) {
        console.log("Book not found in the library.");
        return;
      }
  
      if (book.availability) {
        book.availability = false; // Mark the book as borrowed
        console.log("Book borrowed successfully.");
      } else {
        console.log("Book is already borrowed.");
      }
    }
  
    returnBook(bookID) {
      const book = this.books.get(bookID);
      if (!book) {
        console.log("Book not found in the library.");
        return;
      }
  
      if (!book.availability) {
        book.availability = true; // Mark the book as returned
        console.log("Book returned successfully.");
      } else {
        console.log("Book is already in the library.");
      }
    }
  }
  
  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
      this.availability = null;
    }
  }
  
  class User {
    constructor(userID, firstName, lastName) {
      this.userID = userID;
      this.firstName = firstName;
      this.lastName = lastName;
      this.status = true;
      this.borrowlist = [];
    }
  }

//Test cases

//Adding a book to a libaray
const library = new Library(1, "County A", "City X");
const book = new Book("Book 1", "Author 1");
library.addBook(book, 1);
console.log(library.books.size === 1); // Expected output: true

//borrowing a book from the libaray
library.addBook(book, 1);

library.borrowBook(1);
console.log(book.availability === false); // Expected output: true

library.borrowBook(2); // Book with ID 2 does not exist
// Expected output: "Book not found in the library."

//Test returning a book to the libaray

library.addBook(book, 1);

library.borrowBook(1);
library.returnBook(1);
console.log(book.availability === true); // Expected output: true

library.returnBook(2); // Book with ID 2 does not exist
// Expected output: "Book not found in the library."

//test creating a user abf borrowing a book

library.addBook(book, 1);

const user = new User(1, "John", "Doe");
user.borrowlist = new Map();

user.borrowlist.set(book, 1);
console.log(user.borrowlist.size === 1); // Expected output: true



