import Link from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  ErrorMessage,
  Form,
  FormBox,
  FormText,
  Input,
} from "./styled";
import { SignupSchema } from "@//models/AuthSchema";
import axios from "axios";
import Cookies from "js-cookie";

const SignupComponent = () => {
  const router = useRouter();

  const { errors, handleSubmit, register } = SignupSchema();

  const signupHandler = async (data) => {
    const { confirmPassword, username, email, age, address } = data;

    const signupData = {
      username,
      email,
      password: confirmPassword,
      age,
      address,
    };
    try {
      const res = await axios
        .post("/api/auth/signup", signupData)
        .catch((err) => {
          throw err.response.data.message || "something went wrong ";
        });
      if (res.data.token) {
        Cookies.set("token", res.data.token);
      }
    } catch (error) {
      console.log(error);
      return;
    }

    router.replace("/");
  };

  return (
    <div className="container mx-auto min-h-screen flex items-center">
      <div
        className="max-w-lg h-[530px]  mx-auto flex items-center justify-center shadow-lg rounded-md border-2
        flex-col gap-7"
      >
        <h6 className="text-4xl font-semibold justify-self-start">signup</h6>

        <form
          className="flex justify-center flex-col gap-2 w-full px-10"
          onSubmit={handleSubmit(signupHandler)}
        >
          <div className="w-full">
            <input
              type="text"
              className="block px-1 py-2 rounded-md border border-gray-400 w-full"
              {...register("email")}
            />
            <h6 className="text-sm ml-1 transition-all duration-500">
              {errors?.email?.message}
            </h6>
          </div>

          <div className="w-full">
            <input
              type="text"
              className="block px-1 py-2 rounded-md border border-gray-400 w-full"
              {...register("email")}
            />
            <h6 className="text-sm ml-1 transition-all duration-500">
              {errors?.email?.message}
            </h6>
          </div>

          <div className="w-full">
            <input
              type="text"
              className="block px-1 py-2 rounded-md border border-gray-400 w-full"
              {...register("email")}
            />
            <h6 className="text-sm ml-1 transition-all duration-500">
              {errors?.email?.message}
            </h6>
          </div>

          <div className="w-full">
            <input
              type="text"
              className="block px-1 py-2 rounded-md border border-gray-400 w-full"
              {...register("email")}
            />
            <h6 className="text-sm ml-1 transition-all duration-500">
              {errors?.email?.message}
            </h6>
          </div>

          <div className="w-full">
            <input
              type="password"
              className="block px-1 py-2 rounded-md border border-gray-400 w-full"
              {...register("password")}
            />
            <h6 className="text-sm ml-1">{errors?.password?.message}</h6>
          </div>

          <div className="flex flex-col">
            <button
              className="bg-gray-500 py-2 rounded-md text-white hover:opacity-70 transition-all text-lg"
              type="submit"
            >
              submit
            </button>
            <span className="">
              dont have an account?{" "}
              <Link href="/auth/signup" className="text-blue-600 underline">
                signup
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignupComponent;
