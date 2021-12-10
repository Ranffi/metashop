import React, { Component } from "react";
import Item from "./Item"
import Form from "./Form"
import axios from "axios";
import {
  Box,
  SimpleGrid,
  Link,
  Divider
} from "@chakra-ui/react";

const url = "http://localhost:3001";



/**
 * Reusable component that display
 * all products that belong to a 
 * category.
 */

class Items extends Component {
  state = {
    items: [],
    user: {},
    CategoryId: window.location.pathname.split("/")[2],
  }

  componentDidMount() {
    axios
      .get(`${url}/categories/${window.location.pathname.split("/")[2]}/items`)
      .then((res) => {
        this.setState({ items: res.data });
      });

      axios.get(`${url}/user/${this.props.userEmail}`).then(res => {
        this.setState({user: res.data})
      })
  }

  /**
   * Enables the admin to add an item to
   * the category.
   */
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
        CategoryId: this.state.CategoryId
      })
      .then((res) => {
        this.setState({ items: [...this.state.items, res.data] });
      });
  };

  handleChange = (event) => {
    const value = event.target.value
    this.setState({
      ...this.state,
      [event.target.name]: value
    });
  };


  render() {
    return (
      <>
        {this.state.user.isAdmin ? (
          <Box>
            <Form submission={this.handleCreate} name={"Add Item"} onChange={this.handleChange}/> 
            <Divider borderTop="8px solid #bbb" borderRadius="5px" />
            <SimpleGrid p="5" columns={[1, null, 3]} spacing='40px'>
              {this.state.items.map(item =>{
                return (
                  <Item item={item} userEmail={this.props.userEmail} user={this.state.user} page={"ItemsPage"}/>
                );
              })}
            </SimpleGrid>
          </Box>     
        ) : (
          <Box>
            <SimpleGrid columns={[1, null, 3]} spacing="40px" margin="10">
              {this.state.items.map((item) => {
                return (
                    <Item item={item} userEmail={this.props.userEmail} user={this.state.user} page={"ItemsPage"}/>
                );
              })}
            </SimpleGrid>
          </Box>
        )
        }
      </>
    )
  }
}

export default Items;

