import React, {Component} from 'react'
import Button from './Button'
import axios from 'axios';
import {Flex, Box, Image,} from '@chakra-ui/react';

const url = "http://localhost:3001";

class SingleItem extends Component {
  state = {
    item: {},
    user: {}
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
    event.preventDefault()
    const title = event.target.titleOfItem.value
    const imageUrl = event.target.imageOfItem.value
    const description = event.target.descriptionOfItem.value
    const price = event.target.priceOfItem.value
  
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
      this.setState({
        [event.target.name]: event.target.value
      })
  }

  getUser = async() => {
    const user = await axios.get(`${url}/user/${this.props.userEmail}`)
    this.setState({user: user.data})
  }

  render() {
      const item = this.state.item
      return(
          <div onClick={this.getUser()}>
        {this.state.user.isAdmin?
        <div> 
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
       </div>
       <div>
         <h1>Update Item</h1>
         <form onSubmit={this.handleUpdate}>
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
       </div>
          :
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
          </div>
          
  }
        </div>
      )
    }
  }

  export default SingleItem
