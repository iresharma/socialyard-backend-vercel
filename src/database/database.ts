import { connect } from "mongoose";
let monURI = "mongodb+srv://socialyard:socialyard123@db-dev.pof2mrj.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await connect(monURI);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;