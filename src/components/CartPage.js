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
  Flex,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { MdPayment } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  async handleRemoveFromCart(itemId) {
    await axios
      .delete(`${url}/items/${itemId}/user/${this.props.userEmail}/cart`)
      .then(() =>
        toast.error("Removed from Cart", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          draggable: true,
        })
      );

    const cart = await axios.get(`${url}/user/${this.props.userEmail}/cart`);
    this.setState({ itemsInCart: [...cart.data.Items] });

    let total = 0;

    this.state.itemsInCart.forEach((item) => (total += item.price));
    this.setState({ totalPrice: total });
  }

  handleCheckoutButtonClick() {
    toast.info(
      "Checkout does not work, but you can give us money if they want 🤡",
      {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: true,
        draggable: true,
      }
    );
  }

  render() {
    return (
      <Container maxW={"7xl"}>
        <Divider paddingTop="5" paddingBottom="20" />

        <Heading size="lg" fontSize="60px">
          Your Cart
        </Heading>
        <Box
          paddingTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box
            flex="4"
            paddingRight="3"
            position="relative"
            alignItems="center"
          >
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
                        <Center>
                          <Image
                            src={item.image}
                            boxSize="4em"
                            borderRadius="0.5em"
                            marginBottom="5"
                          />
                        </Center>
                      </Td>
                      <Td>
                        <Text flex="1">{item.title}</Text>
                      </Td>
                      <Td>
                        <Center>
                          <Flex direction="row" align="center">
                            <Text>{`$${item.price} `}</Text>
                            <ChakraButton
                              bg="none"
                              onClick={() => this.handleRemoveFromCart(item.id)}
                            >
                              <FaTrash />
                            </ChakraButton>
                          </Flex>
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
                <ChakraButton
                  onClick={this.handleCheckoutButtonClick}
                  bg="#9A8C98"
                  rightIcon={<MdPayment />}
                >
                  Checkout
                </ChakraButton>
              </Box>
            </Center>
          </Box>
        </Box>
        <ToastContainer limit={2} theme="colored" />
      </Container>
    );
  }
}

export default CartPage;
