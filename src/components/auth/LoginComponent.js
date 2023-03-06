import Link from "next/link";
import { useRouter } from "next/router";
import { LoginSchema } from "@//models/AuthSchema";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const LoginComponent = () => {
  const router = useRouter();
  const [error, setError] = useState();

  const { errors, handleSubmit, register } = LoginSchema();

  const submitHandler = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("/api/auth/login", data).catch((error) => {
        const err = error.response.data.message;
        throw err;
      });

      if (res.data.token) {
        Cookies.set("token", res.data.token);
      }
    } catch (error) {
      console.log(error);
      return;
    }

    router.push("/");
  };

  return (
    <div className="container mx-auto min-h-screen flex items-center">
      <div
        className="max-w-lg h-[500px]  mx-auto flex items-center justify-center shadow-lg rounded-md border-2
        flex-col gap-7"
      >
        <h6 className="text-4xl font-semibold justify-self-start">login</h6>

        <form
          className="flex justify-center flex-col gap-2 w-full px-10"
          onSubmit={handleSubmit(submitHandler)}
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

export default LoginComponent;
