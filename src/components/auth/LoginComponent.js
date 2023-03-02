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

import { LoginSchema } from "@//models/AuthSchema";
import axios from "axios";
import { useState } from "react";

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
      console.log(res);
    } catch (error) {
      console.log(error);
      return;
    }

    console.log("run after error");

    router.push("/");
  };

  return (
    <Container>
      <Box>
        <h1>{error}</h1>
        <h1>Login</h1>
        <hr />
        <Form onSubmit={handleSubmit(submitHandler)}>
          <FormBox>
            <Input type="email" placeholder="email" {...register("email")} />
            <ErrorMessage>password is required</ErrorMessage>
          </FormBox>
          <FormBox>
            <Input
              type="password"
              placeholder="password"
              {...register("password")}
            />
            <ErrorMessage>testing</ErrorMessage>
          </FormBox>
          <Button type="submit">login</Button>
          <FormText>
            dont have an account? <Link href="/auth/signup">signup</Link>
          </FormText>
        </Form>
      </Box>
    </Container>
  );
};
export default LoginComponent;
