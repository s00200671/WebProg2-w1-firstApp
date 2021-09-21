const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));



let books = [];

app.post("/book", (req, res) => {
    const book = req.body;
    console.log(book);
    books.push(book);

    res.send("Book has been added to the database");
    console.log(`Book name is ${book.name}, number of book is ${book.length}`)
})

app.get("/books", (req,res) => res.send(books));
app.get("/books/:id", (req, res) => {
    let id = req.params.id;
    res.json(books[id]);
});

app.delete("/books/:id", (req, res) => {
    let id = req.params.id;
    console.log(`Removing book ${books[id].name}`);
    books.splice(req.params.id, 1);
    res.send(books);
});

app.get("/", (req, res) => res.send("Hello world from Ronnie!"));
app.get("/bananas", (req, res) => res.send("Hello world this is bananas"));

app.listen(port, () => console.log(`Example app listening on port${port}!`));

