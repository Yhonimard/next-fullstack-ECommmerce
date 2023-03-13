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

  const { productId, quantity, price } = req.body;

  const userId = getCookie("userid", { req, res });
  const userIdFromParam = req.query.uid;

  if (userIdFromParam !== userId)
    return res
      .status(400)
      .json({ message: "you not allowed to change this cart" });

  try {
    await connectMongo();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "something went wrong , cant add product to cart" });
  }

  let existingUserWithCart;
  try {
    existingUserWithCart = await userSchema
      .findById(userId, "-password")
      .populate("cart");
  } catch (error) {
    return res
      .status(500)
      .json({ message: "something went wrong, please try again" });
  }
  if (!existingUserWithCart)
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

  let existingCart;
  try {
    existingCart = await cartSchema.findById(existingUserWithCart.cart);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "something went wrong pls try again" });
  }

  if (!existingCart) {
    let newCart;
    try {
      newCart = await cartSchema.create({
        user: userId,
        totalPrice: 0,
        cartList: [{ product: productId, quantity, price }],
      });
      existingUserWithCart.cart = newCart.id;
      await existingUserWithCart.save();
    } catch (error) {
      return res
        .status(500)
        .json({ message: "something went wrong pls try again" });
    }

    return res.status(201).json({
      status: "success",
      message: "product have been added",
      result: newCart,
    });
  }

  const findCart = existingCart.cartList.find(
    (item) => item.product == productId
  );

  const cartIndex = existingCart.cartList.findIndex(
    (item) => item.product == productId
  );

  if (findCart) {
    let productItem = existingCart.cartList[0];

    productItem.quantity = quantity;
    productItem.price += price;
    console.log(productItem);

    return res.json({ message: "hello" });
  }

  return res.status(200).json({ message: "lewat" });
};

export default handler;

// const createdCart = new cartSchema({
//   user: userId,
//   totalPrice: 0,
//   cartList: [],
// });

// try {
//   await createdCart.save();
//   existingUserWithCart.cart = createdCart.id;
//   await existingUserWithCart.save();
// } catch (error) {
//   return res
//     .status(500)
//     .json({ message: "something went wrong. cant add product to cart" });
// }

// let userWithCart;
// try {
//   userWithCart = await userSchema.findById(userId).populate("cart");
// } catch (err) {
//   return res
//     .status(500)
//     .json({ message: "something went wrong pls try again" });
// }

// if (!userWithCart)
//   return res
//     .status(404)
//     .json({ message: "cannot find this cart by this userId" });

// if (!userWithCart.cart) {
//   const createdCart = new cartSchema({
//     user: userId,
//     totalPrice: 0,
//     cart: [],
//   });
//   try {
//     await createdCart.save();
//     userWithCart.cart = createdCart._id;
//     await userWithCart.save();
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ message: "something went wrong. cant add product to cart" });
//   }
// }

// const findItem = userWithCart.cart.cartlist.find(
//   (item) => item.product === productId
// );

// if (findItem) {
// }
