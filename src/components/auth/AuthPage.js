import { Box, Container, Page } from "./styled";
import AuthForm from "./AuthForm";

const AuthPage = () => {
  return (
    <Page>
      <Container>
        <Box>
          <AuthForm />
        </Box>
      </Container>
    </Page>
  );
};
export default AuthPage;
