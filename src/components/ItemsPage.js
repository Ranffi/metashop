import React, { Component } from "react";
import Button from "./Button";
import axios from "axios";
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Flex,
  Container,
  Center,
  Link,
} from "@chakra-ui/react";

const url = "http://localhost:3001";

class Items extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    axios
      .get(`${url}/categories/${window.location.pathname.split("/")[2]}/items`)
      .then((res) => {
        this.setState({ items: res.data });
      });
  }

  handleCreate = (event) => {
    event.preventDefault();
    const title = event.target.titleOfItem.value;
    const imageUrl = event.target.imageOfItem.value;
    const description = event.target.descriptionOfItem.value;
    const price = event.target.priceOfItem.value;

    axios
      .post(`${url}/items`, {
        title,
        imageUrl,
        description,
        price,
      })
      .then((res) => {
        this.setState({ items: [...this.state.items, res.data] });
      });
  };

  render() {
    return (
      <>
        <SimpleGrid columns={[1, null, 3]} spacing="40px" margin="10">
          {this.state.items.map((item) => {
            console.log(item.id);
            return (
              <Flex
                key={item.id}
                bg="#9A8C98"
                direction="column"
                borderRadius="0.5em"
                justify="space-around"
              >
                <Container>
                  <Center>
                    <Link href={`/items/${item.id}`}>
                      <Image
                        flex="2"
                        alignSelf="center"
                        src={item.image}
                        boxSize="15em"
                        float="left"
                        objectFit="fill"
                        borderRadius="0.5em"
                        marginBottom="5"
                        marginTop="5"
                      />
                    </Link>
                  </Center>
                </Container>
                <Flex margin="5" justify="space-between" align="center">
                  <Flex direction="column">
                    <Box>
                      <Text color="black" as="em" justify="center">
                        {item.title}
                      </Text>
                    </Box>
                    <Text fontSize="20px">{`$${item.price}`}</Text>
                  </Flex>
                  <Button
                    color="#22223b"
                    itemId={item.id}
                    userEmail={this.props.userEmail}
                  />
                </Flex>
              </Flex>
            );
          })}
        </SimpleGrid>
        <div>
          <h1>Add Item</h1>
          <form onSubmit={this.handleCreate}>
            <label>
              Title of Item:
              <input
                type="text"
                name="titleOfItem"
                onChange={this.handleChange}
              />
            </label>

            <label>
              Image of Item:
              <input
                type="text"
                name="imageOfItem"
                onChange={this.handleChange}
              />
            </label>

            <label>
              Description of Item:
              <input
                type="text"
                name="descriptionOfItem"
                onChange={this.handleChange}
              />
            </label>

            <label>
              Price of Item:
              <input
                type="text"
                name="priceOfItem"
                onChange={this.handleChange}
              />
            </label>

            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default Items;
