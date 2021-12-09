import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import fire from "../../fire.js";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      const auth = fire.auth()
      auth.signInWithEmailAndPassword(email, password)
      navigate('/homepage');
    }
      catch( error ) {
        console.error("Incorrect username or password");
      };
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login into Metashop</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our our sister in law's products ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form spacing={4} onSubmit={handleSubmit}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={({ target }) => setEmail(target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={({ target }) => setPassword(target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"#C9ADA7"}>Forgot password?</Link>
              </Stack>
              <Button
                type="submit"
                bg={"#C9ADA7"}
                color={"white"}
                _hover={{
                  bg: "#9a8c98",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};
export default Login;
