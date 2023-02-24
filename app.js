const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes)

app.use((req, res, next)=>{
  res.status(404).send("<h1>Page Not Found</h1>")
})

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});