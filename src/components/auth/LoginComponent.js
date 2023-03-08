import Link from "next/link";
import { useRouter } from "next/router";
import { LoginSchema } from "@//models/AuthSchema";
import axios from "axios";
import Cookies from "js-cookie";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

const LoginComponent = () => {
  const router = useRouter();

  const { errors, handleSubmit, register } = LoginSchema();

  const submitHandler = async (data) => {
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
    <Container minH="100vh" display="flex" alignItems="center">
      <Box
        w="full"
        border="lightgray 1px solid"
        py={4}
        px={5}
        shadow="md"
        borderRadius="md"
      >
        <Heading textAlign="center" lineHeight="short" mb={2}>
          LOGIN
        </Heading>
        <Divider bgColor="blackAlpha.900" mb={7} />

        <form onSubmit={handleSubmit(submitHandler)}>
          <Stack spacing={3}>
            <FormControl isInvalid={errors?.email}>
              <Input
                type="email"
                shadow="sm"
                {...register("email")}
                placeholder="email"
              />
              {errors.email && (
                <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors?.password}>
              <Input
                type="password"
                shadow="sm"
                {...register("password")}
                placeholder="password"
              />
              {errors.email && (
                <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
              )}
            </FormControl>
            <Button type="submit">LOGIN</Button>
            <Text>
              dont have an account?{" "}
              <Button
                as={Link}
                href="/auth/signup"
                variant="link"
                color="blue.600"
              >
                signup
              </Button>
            </Text>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default LoginComponent;
