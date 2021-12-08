import React, {Component} from 'react'
import Button from './Button';
import axios from 'axios';
import { Box,SimpleGrid,Image,Text,Container,Flex } from '@chakra-ui/react'
const url = "http://localhost:3001";


class Items extends Component {
  state = {
      items: [],
      user: {}
    }

  componentDidMount() {
    axios.get(`${url}/categories/${window.location.pathname.split('/')[2]}/items`)
    .then(res => {
      this.setState({items: res.data});
    })
    
  }

  handleCreate = (event) => {
    event.preventDefault()
    const title = event.target.titleOfItem.value
    const imageUrl = event.target.imageOfItem.value
    const description = event.target.descriptionOfItem.value
    const price = event.target.priceOfItem.value
  
    axios.post(`${url}/items`,{
      title,
      imageUrl,
      description,
      price,
    })
    .then(res => {
        this.setState({items: [ ...this.state.items, res.data]});
      })  
    
  }

  getUser = async() => {
    const user = await axios.get(`${url}/user/${this.props.userEmail}`)
    this.setState({user: user.data})
  }

  render() {
    return (
      <>
      <div onClick={this.getUser()}>
      {this.state.user.isAdmin?
        <div>
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
                <h3>${item.price}</h3>
                <Button color="#22223b"/>
              </Flex>
            )
          })
        }
        </SimpleGrid>
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
        :
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
                <h3>${item.price}</h3>
                <Button color="#22223b"/>
              </Flex>
            )
          })
        }
        </SimpleGrid>
      }
      </div>
      </>
  
    )
  }
}

export default Items