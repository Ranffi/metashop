import React from "react";

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";

import { FaSun, FaMoon, FaShoppingCart } from "react-icons/fa";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("#c9ada7", "#22223B")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>∞ Metashop</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {/* <Box>Logged in</Box> */}
              <Button>
                <FaShoppingCart />
              </Button>
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
