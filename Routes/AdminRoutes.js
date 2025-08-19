const express = require("express");
const router = express.Router();
const adminController = require("../Controller/AdminController");
const { protectRoutes } = require("../Controller/UserController");
const { restrictTo } = require("../authMiddleware");


router.use(protectRoutes);
router.use(restrictTo("admin"));


router.post("/", adminController.createAdmin)
router.get("/", adminController.getAllAdmins)

router.get("/users", adminController.getAllUsers)
router.delete("/user/:id", adminController.deleteUser)

router.get("/books", adminController.getAllBooks);   
router.post("/books", adminController.addBook);      
router.put("/books/:id", adminController.updateBook); 
router.delete("/books/:id", adminController.deleteBook); 


module.exports = router;