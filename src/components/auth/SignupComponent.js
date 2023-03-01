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

const SignupComponent = () => {
  const router = useRouter();

  const { errors, handleSubmit, register } = SignupSchema();

  const signupHandler = (data) => {
    console.log(data);
    router.replace("/");
  };

  console.log(errors);

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
