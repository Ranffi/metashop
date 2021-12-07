import React, {Component} from 'react'
import Button from './Button'
import axios from 'axios';
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  Icon,
  chakra,
  Tooltip,
} from '@chakra-ui/react';

const url = "http://localhost:3001";

class SingleItem extends Component {
  state = {
    item: {}
  }  

  componentDidMount(){
      axios.get(`${url}/items/${window.location.pathname.split('/')[2]}`)
      .then(res => {
        this.setState({item: res.data});
      })
      
  }

  render(){
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
                  <Box fontSize="2xl" color="#4A4E69">
                    <Box as="span" color={'gray.600'} fontSize="lg">
                      £ 
                    </Box>
                    {item.price}
                  </Box>
                <br />
                  <Box><Button /></Box>
              </Box>
            </Box>
          </Flex>
          </div>
      )
    }
  }
  
  export default SingleItem
  
  {/* <h1>{item.title}</h1>
  <img src={item.image}/>
  <p>{item.description}</p>
  <h2>{item.price}</h2> */}