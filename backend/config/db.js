const moongoose = require('mongoose');
const connectDB = async () => {
  try {
    await moongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
}

module.exports = connectDB;
