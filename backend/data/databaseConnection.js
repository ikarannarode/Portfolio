import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI, {
    dbName: "Portfolio"
})
    .then(() => {
        console.log('Database connection successfull');
    })
    .catch((error) => {
        console.log('Error while connecting with DB:', error);
    });