import axios from "axios";
import React, { Component } from "react";
import { Button as ChakraButton, Box } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const url = "http://localhost:3001";

class Button extends Component {
  state = {
    isAddedToCart: false,
  };

  notify = () => toast("Wow so easy !");

  async componentDidMount() {
    const cart = await axios.get(`${url}/user/${this.props.userEmail}/cart`);
    console.log(cart)
    if(cart.data.Items){
        cart.data.Items.forEach((item) => {
          if (item.id === parseInt(this.props.itemId)) {
            this.setState({ isAddedToCart: true });
          }
        });

    }
  }

  handleClick = async (e) => {
    !this.state.isAddedToCart
      ? await axios
          .put(
            `${url}/items/${this.props.itemId}/user/${this.props.userEmail}/cart`
          )
          .then(() =>
            toast.success("Item Added!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              draggable: true,
            })
          )
      : await axios
          .delete(
            `${url}/items/${this.props.itemId}/user/${this.props.userEmail}/cart`
          )
          .then(() =>
            toast.error("Removed from Cart", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              draggable: true,
            })
          );

    this.setState({
      isAddedToCart: !this.state.isAddedToCart,
    });
  };

  render() {
    return (
      <Box>
        <ChakraButton
          bg={this.state.isAddedToCart ? "red.400" : "green.500"}
          className={"button"}
          onClick={this.handleClick}
        >
          {this.state.isAddedToCart ? "Remove From Cart" : "Add To Cart"}
        </ChakraButton>
        <ToastContainer limit={2} theme="colored" />
      </Box>
    );
  }
}

export default Button;
