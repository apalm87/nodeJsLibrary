const { Library, Book, User } = require('./library.js');

function testFunction() {
    console.log('This is a test function.');

    // Adding a book to a library
    const library = new Library(1, "County A", "City X");
    const book = new Book("Book 1", "Author 1");
    library.addBook(book, 1);
    console.log(library.books.size === 1); // Expected output: true

    // Borrowing a book from the library
    library.borrowBook(1);
    console.log(book.availability === false); // Expected output: true

    library.borrowBook(2); // Book with ID 2 does not exist
    // Expected output: "Book not found in the library."

    // Test returning a book to the library
    library.returnBook(1);
    console.log(book.availability === true); // Expected output: true

    library.returnBook(2); // Book with ID 2 does not exist
    // Expected output: "Book not found in the library."

    // Test creating a user and borrowing a book
    const user = new User(1, "John", "Doe");
    user.borrowlist = new Map();
    user.borrowlist.set(book, 1);
    console.log(user.borrowlist.size === 1); // Expected output: true
}

module.exports = {
    testFunction: testFunction
};
