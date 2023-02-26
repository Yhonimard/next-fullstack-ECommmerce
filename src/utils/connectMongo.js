import mongoose, { connect } from "mongoose";

const connectMongo = async () => {
  mongoose.set("strictQuery", false);

  try {
    connect(process.env.DB_URL);
  } catch (error) {
    console.log("error from connect mongoose ", error);
  }
};

export default connectMongo;
