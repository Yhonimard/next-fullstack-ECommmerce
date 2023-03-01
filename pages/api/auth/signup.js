import userSchema from "@//models/UserModels";
import connectMongo from "@//utils/connectMongo";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 *
 *@param {import("next").NextApiRequest} req
 *@param {import("next").NextApiResponse} res
 * */

const signup = async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "method not allowed" });

  try {
    await connectMongo();
  } catch (error) {
    console.log("error from signup", error);
    return res
      .status(500)
      .json({ message: "signup failed, something went wrong" });
  }

  const { name, email, password, age, address } = req.body;

  let existingUsers;

  try {
    existingUsers = await userSchema.findOne({ email: email });
  } catch (error) {
    console.log("error from existingUsers", error);
    return res
      .status(500)
      .json({ message: "signup failed pls try again later" });
  }

  if (existingUsers)
    return res
      .status(422)
      .json({ message: "users already exists, please login instead" });

  let hashPassword;
  try {
    hashPassword = await bcrypt.hash(password, 10);
  } catch (error) {
    console.log("error from hash password", error);
    return res
      .status(500)
      .json({ message: "could not create user pls try again" });
  }

  const createdUser = new userSchema({
    name,
    email,
    password: hashPassword,
    age,
    address,
  });

  try {
    await createdUser.save();
  } catch (error) {
    return res.status(500).json({ message: "signup failed pls try again" });
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      process.env.JWT_KEY
    );
  } catch (error) {
    return res.status(500).json("sign up failed pls try again");
  }

  console.log("createdUser", createdUser);

  res.status(201).json({
    status: "success",
    message: "signup succeed",
    result: { email: createdUser.email, id: createdUser.id },
    token,
  });
};

export default signup;
