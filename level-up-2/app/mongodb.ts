import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Tasks");
    // console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;

// TODO: Move to a lib folder
