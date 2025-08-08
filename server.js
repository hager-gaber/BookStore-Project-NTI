const express = require("express");
const dbConnection =require("./config/database")
const app = express();
require('dotenv').config();


 dbConnection();
app.use(express.json());

const bookRoutes = require("./Routes/bookRoutes");
app.use("/api/books", bookRoutes);

const authorRoutes = require("./Routes/AuthorRoutes");
app.use("/api/authors", authorRoutes);

const categoryRoutes = require("./Routes/CategoryRoutes");
app.use("/api/categories", categoryRoutes);

const contactRoutes = require("./Routes/ContactRoutes");
app.use("/api/contacts", contactRoutes);

const userRoutes = require("./Routes/UserRoutes");
app.use("/api/users", userRoutes);

const adminRoutes = require("./Routes/AdminRoutes");
app.use("/api/admins", adminRoutes);



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
