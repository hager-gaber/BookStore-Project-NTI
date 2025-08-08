const dbConnection = require("../../config/database");
const categoryData = require("./category-data.json");
const Category = require("../../models/Category")

const insert =async ()=>{
    try{
       await dbConnection();
       await Category.insertMany(categoryData);
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
        await Category.deleteMany();
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





