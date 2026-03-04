const mongoose = require("mongoose");

const mongoString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.danovcp.mongodb.net/smartanalyzer?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoString, {
        tls: true,
        tlsAllowInvalidCertificates: false,
        });
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;