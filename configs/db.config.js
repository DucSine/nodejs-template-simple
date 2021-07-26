const mongoose = require('mongoose');

const db = process.env.DATABASE_LOCAL
    ? process.env.DATABASE_LOCAL
    : process.env.DATABASE_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected Database...');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};
module.exports = connectDB;
