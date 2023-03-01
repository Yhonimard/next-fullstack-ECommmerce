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

const LoginComponent = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <Container>
      <Box>
        <h1>login</h1>
        <hr />
        <Form onSubmit={handleSubmit}>
          <FormBox>
            <Input placeholder="username" />
            <ErrorMessage>password is required</ErrorMessage>
          </FormBox>
          <FormBox>
            <Input placeholder="username" />
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
