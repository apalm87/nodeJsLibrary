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

  //for running tests
  module.exports = {
    Library: Library,
    Book: Book,
    User: User
  };


//Test cases
const testModule = require('./test');
testModule.testFunction();






