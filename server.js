const express = require("express");

const app = express();
const PORT = 3000;

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 25000 },
  { id: 3, name: "Headphones", price: 3000 }
];

app.get("/", (req, res) => {
  res.send("Node Products API is running!");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});