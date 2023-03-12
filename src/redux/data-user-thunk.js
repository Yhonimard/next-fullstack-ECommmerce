import axios from "axios";
export default function DataUserThunk(userId, url) {
  console.log(userId);
  return async () => {
    console.log(url);
    const res = await axios.get(`/api/user/${userId}`).catch((err) => {
      const errorMsg = err.response.data.message;
      console.log(err);
    });
    console.log(res);
  };
}
