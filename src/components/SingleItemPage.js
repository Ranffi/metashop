import React, { Component } from "react";
import Item from "./Item";
import Form from "./Form";
import axios from "axios";
import { Box, SimpleGrid } from "@chakra-ui/react";

const url = "http://localhost:3001";

class SingleItem extends Component {
  state = {
    item: {},
    user: {},
  };

  componentDidMount() {
    axios
      .get(`${url}/items/${window.location.pathname.split("/")[2]}`)
      .then((res) => {
        this.setState({ item: res.data });
      });

    axios.get(`${url}/user/${this.props.userEmail}`).then((res) => {
      this.setState({ user: res.data });
    });
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
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  };

  render() {
    const item = this.state.item;
    return (
      <Box>
        {this.state.user.isAdmin ? (
          <Box>
            <SimpleGrid columns={[1, null, 2]}>
              <Item
                item={item}
                userEmail={this.props.userEmail}
                user={this.state.user}
                onDelete={this.onDelete}
                page={"Single Item Page"}
              />
              <Form
                submission={this.handleUpdate}
                name={"Update Item"}
                onChange={this.handleChange}
              />
            </SimpleGrid>
          </Box>
        ) : (
          <Item
            item={item}
            userEmail={this.props.userEmail}
            user={this.state.user}
            onDelete={this.onDelete}
            page={"Single Item Page"}
          />
        )}
      </Box>
    );
  }
}
export default SingleItem;
