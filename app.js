const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Route to show the add product form
app.get('/add-product', (req, res) => {
  res.send(`
    <form method="POST" action="/product">
      <input type="text" name="name">
      <input type="text" name="size">
      <button type="submit">Add Product</button>
    </form>
  `);
});

// Route to handle the form submission
app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {

  res.send("<h1>Hello From Express!</h1>");
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});