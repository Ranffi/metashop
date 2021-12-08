import React, { Component } from "react";
import Button from "./Button";
import Item from "./Item"
import axios from "axios";
import { Flex, Box, Image, Center, Container } from "@chakra-ui/react";

const url = "http://localhost:3001";

class SingleItem extends Component {
  state = {
    item: {},
    user: {},
    value: "",
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
    this.setState({
      [event.target.name]: event.target.value,
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
        {this.state.user.isAdmin ? (
          <div>
              <Item item={item} userEmail={this.props.userEmail} onDelete={this.onDelete}/>
            <Flex p={50} w="full" alignItems="center" justifyContent="center">
              <Box>
                <h1>Update Item</h1>
                <form onSubmit={this.handleUpdate}>
                  <label>
                    Title of Item:
                    <input
                      type="text"
                      name="titleOfItem"
                      value={this.value}
                      onChange={this.handleChange}
                    />
                  </label>
                  <br />
                  <label>
                    Image of Item:
                    <input
                      type="text"
                      name="imageOfItem"
                      value={this.value}
                      onChange={this.handleChange}
                    />
                  </label>
                  <br />
                  <label>
                    Price of Item:
                    <input
                      type="text"
                      name="priceOfItem"
                      value={this.value}
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
                      value={this.value}
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
