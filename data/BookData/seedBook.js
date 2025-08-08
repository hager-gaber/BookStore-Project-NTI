const dbConnection = require("../../config/database");
const bookData = require("./book-data.json");
const Book = require("../../models/Book")

const insert =async ()=>{
    try{
       await dbConnection();
       await Book.insertMany(bookData);
       console.log("Insert success");
       process.exit()
    
    }catch(error){
        console.log("Error in insert", error.message );
        process.exit(1)
    }
};

const remove = async ()=>{
    try{
        await dbConnection();
        await Book.deleteMany();
        console.log("delete success");
        process.exit()
    }catch(error){
          console.log("Error in remove", error.message );
          process.exit(1)
    }
};

    if(process.argv[2]==="--insert"){
        insert()
    }else if(process.argv[2]==="--delete"){
        remove()
    }





