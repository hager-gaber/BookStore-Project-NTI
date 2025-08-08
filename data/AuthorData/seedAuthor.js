const dbConnection = require("../../config/database");
const authorData = require("./author-data.json");
const Author = require("../../models/Author")

const insert =async ()=>{
    try{
       await dbConnection();
       await Author.insertMany(authorData);
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
        await Author.deleteMany();
        console.log("delete success");
        process.exit()
    }catch(error){
          console.log("Error in remove", error.message );
          process.exit(1)
    }
}

if(process.argv[2]==="--insert"){
        insert()
    }else if(process.argv[2]==="--delete"){
        remove()
    }



