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

const LoginComponent = () => {
  const router = useRouter();

  const { errors, handleSubmit, register } = LoginSchema();

  const submitHandler = (data) => {
    console.log(data);
    // router.push("/");
  };

  console.log(errors);

  return (
    <Container>
      <Box>
        <h1>login</h1>
        <hr />
        <Form onSubmit={handleSubmit(submitHandler)}>
          <FormBox>
            <Input
              placeholder="email"
              {...register(
                "email                                                   "
              )}
            />
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
