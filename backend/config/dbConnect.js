import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connected = await mongoose.connect("mongodb+srv://rswaref:2nCMiXeWZZexoCQe@cluster0.ofujaok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`Mongodb connected ${connected.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnect;