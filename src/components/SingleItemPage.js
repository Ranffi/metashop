import React, { Component } from "react";
import Button from "./Button";
import Item from "./Item"
import axios from "axios";
import { Flex, Box, FormControl, FormLabel, Input, InputGroup, HStack, InputRightElement, Stack, Heading, Text, Link } from "@chakra-ui/react";


const url = "http://localhost:3001";

class SingleItem extends Component {
  state = {
    item: {},
    user: {},
    titleOfItem: "",
    imageOfItem: "",
    priceOfItem: "",
    descriptionOfItem: ""
  };

  componentDidMount() {
    axios
      .get(`${url}/items/${window.location.pathname.split("/")[2]}`)
      .then((res) => {
        this.setState({ item: res.data });
      });

      axios.get(`${url}/user/${this.props.userEmail}`).then(res => {
        this.setState({user: res.data})
      } )
  }

  onDelete = () => {
    axios
      .delete(`${url}/items/${window.location.pathname.split("/")[2]}`)
      .then((res) => {
        this.setState({ item: res.data });
      });
  };

  handleUpdate = (event) => {
    const title = event.target.titleOfItem.value || this.state.item.title;
    const imageUrl = event.target.imageOfItem.value || this.state.item.imageUrl;
    const description =
      event.target.descriptionOfItem.value || this.state.item.description;
    const price = event.target.priceOfItem.value || this.state.item.price;
    console.log(title);

    axios
      .put(`${url}/items/${window.location.pathname.split("/")[2]}`, {
        title,
        imageUrl,
        description,
        price,
      })
      .then((res) => {
        this.setState({ item: res.data });
      });
  };

  handleChange = (event) => {
    const value = event.target.value
    this.setState({
      ...this.state,
      [event.target.name]: value
    });
  };

  getUser = async () => {
    const user = await axios.get(`${url}/user/${this.props.userEmail}`);
    this.setState({ user: user.data });
  };

  render() {
    const item = this.state.item;
    return (
      <div>
        <Flex minH={'50vh'} align={'center'} justify={'center'}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} textAlign={'center'}>
                Update Item
              </Heading>
            </Stack>
            <Box rounded={'lg'} bg={"black"} boxShadow={'lg'} p={8}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <InputRightElement h={'full'}>
                      "Hello"
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}>
                    Sign up
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>


        {this.state.user.isAdmin ? (
          <div>
            <Item item={item} userEmail={this.props.userEmail} onDelete={this.onDelete}/>
            {/* FORM STARTS HERE */}
            <Flex p={50} w="full" alignItems="center" justifyContent="center">
              <Box>
                <h1>Update Item</h1>
                <form onSubmit={this.handleUpdate}>
                  <label>
                    Title of Item:
                    <input
                      style={{color: "red"}}
                      type="text"
                      name="titleOfItem"
                      value={this.state.titleOfItem}
                      onChange={this.handleChange}
                      backgroundColor="red"
                    />
                  </label>
                  <br />
                  <label>
                    Image of Item:
                    <input
                      type="text"
                      name="imageOfItem"
                      value={this.state.imageOfItem}
                      onChange={this.handleChange}
                    />
                  </label>
                  <br />
                  <label>
                    Price of Item:
                    <input
                      type="text"
                      name="priceOfItem"
                      value={this.state.priceOfItem}
                      onChange={this.handleChange}
                    />
                  </label>
                  <br />
                  <label>
                    Description of Item:
                    <br />
                    <textarea
                      type="text"
                      rows="4"
                      cols="70"
                      name="descriptionOfItem"
                      value={this.state.descriptionOfItem}
                      onChange={this.handleChange}
                    />
                  </label>
                  <br />
                  <button type="submit">Submit</button>
                </form>
              </Box>
            </Flex>
          </div>
        ) : (
          <Item item={item} userEmail={this.props.userEmail} onDelete={this.onDelete}/>
        )}
      </div>
    );
  }
}
export default SingleItem;

