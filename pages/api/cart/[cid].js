import userSchema from "@//models/UserModels";
import connectMongo from "@//utils/connectMongo";
import cartSchema from "@//models/CartModels";
import { getCookie } from "cookies-next";
import productSchema from "@//models/ProductsModels";
import mongoose from "mongoose";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 *
 */

const handler = async (req, res) => {
  const { method } = req;

  // if (method !== "POST" && method !== "GET")
  //   return res.status(405).json({ message: "method not allowed" });

  const userId = getCookie("userid", { req, res });

  const { productId, quantity, price } = req.body;

  try {
    await connectMongo();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "something went wrong , cant add product to cart" });
  }

  let existingUser;
  try {
    existingUser = await userSchema.findById(userId, "-password");
  } catch (error) {
    return res
      .status(500)
      .json({ message: "something went wrong, please try again" });
  }
  if (!existingUser)
    return res
      .status(404)
      .json({ message: "this user not found. could not add product to cart" });

  // let existingProduct;
  // try {
  //   existingProduct = await productSchema.findById(productId);
  // } catch (error) {
  //   return res
  //     .status(500)
  //     .json({ message: "something went wrong, please try again" });
  // }

  // if (!existingProduct)
  //   return res.status(404).json({ message: "this product doesn't exist" });

  let userWithCart;
  try {
    userWithCart = await userSchema.findById(userId).populate("cart");
  } catch (err) {
    return res
      .status(500)
      .json({ message: "cannot find this cart by this userId" });
  }
  if (!userWithCart.cart) {
    const createdCart = new cartSchema({
      user: userId,
      totalPrice: 0,
      cart: [],
    });
    try {
      await createdCart.save();
      userWithCart.cart = createdCart._id;
      await userWithCart.save();
    } catch (error) {
      return res
        .status(500)
        .json({ message: "something went wrong. cant add product to cart" });
    }
  }

  return res.status(200).json({ message: userWithCart });
};

export default handler;
