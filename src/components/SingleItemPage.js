import React, {Component} from 'react'
import Button from './Button'
import axios from 'axios';
import {Flex, Box, Image,} from '@chakra-ui/react';

const url = "http://localhost:3001";

class SingleItem extends Component {
  state = {
    item: {},
    value: ""
  }

  componentDidMount() {
    axios.get(`${url}/items/${window.location.pathname.split('/')[2]}`)
    .then(res => {
      this.setState({item: res.data});
    })        
  }

  onDelete = () => {
    axios.delete(`${url}/items/${window.location.pathname.split('/')[2]}`)
    .then(res => {
      this.setState({item: res.data});
    }) 
  }

  handleUpdate = (event) => {
    const title = event.target.titleOfItem.value || this.state.item.title
    const imageUrl = event.target.imageOfItem.value || this.state.item.imageUrl
    const description = event.target.descriptionOfItem.value || this.state.item.description
    const price = event.target.priceOfItem.value || this.state.item.price
    console.log(title)
  
    axios.put(`${url}/items/${window.location.pathname.split('/')[2]}`,{
      title,
      imageUrl,
      description,
      price,
    })
    .then(res => {
      this.setState({item: res.data});
    })  
  }

  handleChange = (event) => {
    console.log(event.target.name)
      this.setState({
        [event.target.name]: event.target.value
      })
  }

  render() {
      const item = this.state.item
      return(
        <div>
            <Flex p={50} w="full" alignItems="center" justifyContent="center">
            <Box
              bg="#4A4E69"
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              position="relative">

              <Image
                src={item.image}
                alt={`Picture of ${item.image}`}
                roundedTop="lg"
                />

              <Box p="6">
                <Flex mt="1" justifyContent="space-between" alignContent="center">
                  <Box
                    fontSize="2xl"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    color="white">
                    {item.title}
                  </Box>
                </Flex>

                <Flex justifyContent="space-between" alignContent="center" color="white">
                  {item.description}
                </Flex>
                <br />
                  <Box fontSize="2xl" color="white">
                    ${item.price}
                  </Box>
                <br />
                  <Box color="white"><Button /></Box>
              </Box>
            </Box>
          </Flex>    
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
      )
    }
  }

  export default SingleItem
