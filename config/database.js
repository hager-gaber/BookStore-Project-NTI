const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin5:AuF984NjEMHsSRjx@cluster0.uhtwmgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", 
      {dbName: "BookStore"},
    );
    console.log(" Database connected successfully");
  } catch (error) {
    console.error( `Database connection failed ${error}`);
    process.exit(1);
  }
};

module.exports = dbConnection;
