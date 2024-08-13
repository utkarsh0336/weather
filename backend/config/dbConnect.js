import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connected = await mongoose.connect("mongodb+srv://utkarshsahay674:mIQaKAe6QeDT1PY8@cluster0.kp2tnqs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`Mongodb connected ${connected.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnect;