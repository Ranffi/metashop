import React, {Component} from 'react'
import Button from './Button';
import axios from 'axios';
import { Box,SimpleGrid,Image,Text,Container,Flex } from '@chakra-ui/react'
const url = "http://localhost:3001";


class Items extends Component {
    constructor(props) {
      super(props)
      this.state = {
        items: []
      }
    }
    componentDidMount(){
      axios.get(`${url}/categories/${window.location.pathname.split('/')[2]}/items`)
      .then(res => {
        this.setState({items: res.data});
      })
      
    }
    render() {
        return (
          <>
            <SimpleGrid columns={[1, null, 3]} spacing='40px'>
            {
                this.state.items.map(item =>{
                 return (
                  <Flex key={item.id} bg='#9A8C98' direction="column" borderRadius="0.5em" justify="space-around">
                  <Box marginBottom="3">
                  <Text color="black" as='em' justify="center">{item.title}</Text>
                  </Box>
                  <Image
                      flex="2"
                      alignSelf="center"
                      bg="green.500"
                      src={item.image}
                      boxSize="15em"
                      borderRadius="0.5em"
                      marginBottom="5"
                    />
                  <p>{item.description}</p>
                  <h3>${item.price}</h3>
                  <Button color="#22223b"/>
                  </Flex>
                 )
                }
                )
              }
            </SimpleGrid>
          {/* <Flex>
          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          {
                this.state.items.map(item =>{
                 return (
                   
                  <div key={item.id}>
                  <Box bg='pink' w='100%' p={4} color='white'>
                  <h1>{item.title}</h1>
                  <img src={item.image}/>
                  <p>{item.description}</p>
                  <h3>{item.price}</h3>
                  <Box as='button' borderRadius='md' bg='green' color='white' px={4} h={8}>
                  <Button />
                  </Box>
                  <Spacer />
                  </Box>
                  
                  </div>
                 )
                }
                )
                }
              
          </Box>
          </Flex> */}
          </>
            // <div>
            //   <h1> Categories... </h1>
            //   {
            //     this.state.items.map(item =>{
            //      return (
            //       <div key={item.id}>
            //       <h1>{item.title}</h1>
            //       <img src={item.image}/>
            //       <p>{item.description}</p>
            //       <h3>{item.price}</h3>
            //       <Button />
            //       </div>
            //      )
            //     }
            //     )
            //   }
            // </div>
        )
        }
}

export default Items