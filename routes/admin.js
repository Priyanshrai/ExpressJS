const express = require("express");

const router = express.Router();

// Route to show the add product form
// /admin/add-product => GET
router.get("/add-product", (req, res) => {
  res.send(`
      <form method="POST" action="/admin/product">
        <input type="text" name="name">
        <input type="text" name="size">
        <button type="submit">Add Product</button>
      </form>
    `);
});

// Route to handle the form submission
// /admin/add-product => POST
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
