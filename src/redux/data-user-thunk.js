import axios from "axios";
export default function DataUserThunk(userId) {
  return async () => {
    const res = await axios.get(`/api/user/${userId}`).catch((err) => {
      const errorMsg = err.response.data.message;
      throw errorMsg || "something went wrong, pls try again";
    });
    console.log(res);
  };
}
