const express = require("express");
const app = express();

app.use(express.json());

const productRoutes = require("../routes/productRoutes");
const userRoutes = require("../routes/userRoutes");

app.use("/products", productRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
