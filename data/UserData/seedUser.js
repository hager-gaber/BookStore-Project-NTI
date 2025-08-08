const dbConnection = require("../../config/database");
const userData = require("./user-data.json");
const User = require("../../models/User");
const bcrypt = require("bcrypt");

const insert = async () => {
    try {
        await dbConnection();

        const hashedUsers = await Promise.all(
            userData.map(async (user) => ({
                ...user,
                password: await bcrypt.hash(user.password, 10),
            }))
        );

        await User.insertMany(hashedUsers);
        console.log("Insert success");
        process.exit();
    } catch (error) {
        console.log("Error in insert", error.message);
        process.exit(1);
    }
};

const remove = async () => {
    try {
        await dbConnection();
        await User.deleteMany();
        console.log("Delete success");
        process.exit();
    } catch (error) {
        console.log("Error in remove", error.message);
        process.exit(1);
    }
};

if (process.argv[2] === "--insert") {
    insert();
} else if (process.argv[2] === "--delete") {
    remove();
} else {
    console.log("Please use --insert or --delete");
    process.exit();
}
