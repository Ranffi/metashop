import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Text
} from "@chakra-ui/react";

import { FaSun, FaMoon, FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

export default function Nav(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("#c9ada7", "#22223B")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to={"/"}>
            <Box><Text fontSize={["xl", "3xl"]}>∞ Metashop</Text></Box>
          </Link>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {!props.isLoggedin ? (
                <div></div>
              ) : (
                <Link to={"/#"}>
                  <Button onClick={props.signOut}>
                    <FiLogOut />
                  </Button>
                </Link>
              )}

              <Link to={"/cart"}>
                <Button>
                  <FaShoppingCart />
                </Button>
              </Link>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <FaSun /> : <FaMoon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
