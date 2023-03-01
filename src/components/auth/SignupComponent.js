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

const SignupComponent = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    router.replace("/");
  };

  return (
    <Container>
      <Box RowGap="20px">
        <h1>Signup</h1>
        <Form onSubmit={handleSubmit}>
          <FormBox>
            <Input placeholder="username" />
            <ErrorMessage>testin</ErrorMessage>
          </FormBox>
          <FormBox>
            <Input placeholder="email" />
          </FormBox>
          <FormBox>
            <Input placeholder="age" />
          </FormBox>
          <FormBox>
            <Input placeholder="address" />
          </FormBox>
          <FormBox>
            <Input placeholder="password" />
          </FormBox>
          <FormBox>
            <Input placeholder="confirm password" />
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
