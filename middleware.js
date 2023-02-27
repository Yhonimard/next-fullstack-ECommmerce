const { NextRequest, NextResponse } = require("next/server");

/**
 * @param {NextRequest} req
 */

const middlerware = (req) => {
  const res = NextResponse;

  if (req.nextUrl.pathname.startsWith("/api/products")) {
    console.log("ini dari middleware folder");

    // res.json({ message: "is from middleware folder" });
  }

  return res.next();
};

export default middlerware;
