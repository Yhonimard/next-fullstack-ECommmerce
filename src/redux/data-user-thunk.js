import axios from "axios";
export default function DataUserThunk(userId) {
  return async (dispatch) => {
    const res = await axios
      .get(`${process.env.HOST_URL}/api/user/${userId}`)
      .catch((err) => {
        const errorMsg = err.response.data.message;
        console.log(err);
      });
    console.log(res);
  };
}
