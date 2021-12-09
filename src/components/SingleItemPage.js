import React, { Component } from "react";
import Item from "./Item"
import Form from "./Form"
import axios from "axios";

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
        {this.state.user.isAdmin ? (
          <div>
            <Item item={item} userEmail={this.props.userEmail} onDelete={this.onDelete}/>
            <Form submission={this.handleUpdate} purpose={"update"} onChange={this.handleChange}/>          
          </div>
        ) : (
          <Item item={item} userEmail={this.props.userEmail} onDelete={this.onDelete}/>
        )}
      </div>
    );
  }
}
export default SingleItem;

