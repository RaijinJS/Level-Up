import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Tasks");
    // TODO: DONE -  Delete commented console.log
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;

// TODO: DONE - Move to a lib folder
