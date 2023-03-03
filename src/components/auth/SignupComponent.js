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
    <Container>
      <Box RowGap="20px">
        <h1>Signup</h1>
        <Form onSubmit={handleSubmit(signupHandler)}>
          <FormBox>
            <Input placeholder="username" {...register("username")} />
            <ErrorMessage>testin</ErrorMessage>
          </FormBox>
          <FormBox>
            <Input type="email" placeholder="email" {...register("email")} />
          </FormBox>
          <FormBox>
            <Input placeholder="age" {...register("age")} />
          </FormBox>
          <FormBox>
            <Input placeholder="address" {...register("address")} />
          </FormBox>
          <FormBox>
            <Input
              type="password"
              placeholder="password"
              {...register("password")}
            />
          </FormBox>
          <FormBox>
            <Input
              type="password"
              placeholder="confirm password"
              {...register("confirmPassword")}
            />
            <ErrorMessage>testing</ErrorMessage>
          </FormBox>
          <Button type="submit">signup</Button>
          <FormText paddingtop="2px">
            have an account? <Link href="/auth/login">Login</Link>
          </FormText>
        </Form>
      </Box>
    </Container>
  );
};
export default SignupComponent;
