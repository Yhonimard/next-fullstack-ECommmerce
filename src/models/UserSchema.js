import { model, models, Schema } from "mongoose";

const user = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  address: { type: String, required: true },
});

const userSchema = models.Users || model("Users", user);

export default userSchema;
