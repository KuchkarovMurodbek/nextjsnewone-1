import mongoose from "mongoose";

const url: any = process.env.MONGO_URI;

async function connectToDatabase() {
  try {
    const connect=await mongoose.connect(url)
    console.log(`Connected this mongoDb url ${connect.connection.host}`);
} catch (error) {
    console.log(error);
   
}
}
export default connectToDatabase;
