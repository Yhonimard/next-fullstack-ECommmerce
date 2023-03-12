import { getCookies, setCookie } from "cookies-next";
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 *
 */

const handler = (req, res) => {
  if (req.method === "POST") {
    setCookie("from cookie api routes", req.body, {
      req,
      res,
      httpOnly: true,
      sameSite: "strict",
      path: "/",
    });
    res.status(200).json({ message: "success" });
  }

  if (req.method === "GET") {
    const cookies = getCookies({ req, res });

    console.log(cookies);

    res.status(200).json({ cook: cookies });
  }
};
export default handler;
