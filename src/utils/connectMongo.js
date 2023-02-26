import { connect } from "mongoose";

const connectMongo = async () => connect(process.env.DB_URL);

export default connectMongo;
