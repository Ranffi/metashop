import React, { Component } from "react";
import {
  Box,
  Heading,
  Text,
  Divider,
  Container,
  Image,
  Center,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { MdPayment } from "react-icons/md";
import axios from "axios";
const url = "http://localhost:3001";

class CartPage extends Component {
  state = {
    itemsInCart: [],
    totalPrice: 0,
  };

  async componentDidMount() {
    const cart = await axios.get(`${url}/user/${this.props.userEmail}/cart`);

    this.setState({ itemsInCart: [...cart.data.Items] });

    let total = this.state.totalPrice;

    this.state.itemsInCart.forEach((item) => (total += item.price));

    this.setState({ totalPrice: total });
  }

  render() {
    return (
      <Container maxW={"7xl"} p="12">
        <Divider marginTop="5" marginBottom="20" />

        <Heading size="lg" fontSize="60px">
          Your Cart
        </Heading>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box flex="4" marginRight="3" position="relative" alignItems="center">
            <Table>
              <Thead>
                <Tr>
                  <Th>
                    <Center>Product</Center>
                  </Th>
                  <Th>Description</Th>
                  <Th isNumeric>
                    <Center>Price</Center>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {this.state.itemsInCart.map((item) => {
                  return (
                    <Tr key={item.id}>
                      <Td>
                        <Image
                          src={item.image}
                          boxSize="10em"
                          borderRadius="0.5em"
                          marginBottom="5"
                        />
                      </Td>
                      <Td>
                        <Text flex="1">{item.title}</Text>
                      </Td>
                      <Td>
                        <Center>
                          <Text>{`$${item.price}`}</Text>
                        </Center>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </Box>
          <Box>
            <Divider
              borderTop="8px solid #bbb"
              borderRadius="5px"
              marginBottom="30"
            />
            <Center
              marginTop={{ base: "3", sm: "0" }}
              marginLeft="20"
              marginRight="20"
            >
              <Box>
                <Center>
                  <Text
                    fontSize="sm"
                    marginTop="1"
                    alignSelf="center"
                    casing="uppercase"
                  >
                    Cart Total
                  </Text>
                </Center>
                <Center>
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    marginBottom="40"
                  >{`$${this.state.totalPrice}`}</Text>
                </Center>
                <ChakraButton bg="#9A8C98" rightIcon={<MdPayment />}>
                  Checkout
                </ChakraButton>
              </Box>
            </Center>
          </Box>
        </Box>
      </Container>
    );
  }
}

export default CartPage;
