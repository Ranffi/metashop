import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Box, Badge, SimpleGrid } from '@chakra-ui/react'

class Homepage extends Component {

  constructor() {
    super()
    this.state = {
      categories: []
    }
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:3001/categories')
    this.setState({ categories: res.data })
  }

  render() {
    const { categories } = this.state
    return (
      <>
        <Box
          w='100%'
          h='500px'
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          bgImage="https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
        </Box>
        <SimpleGrid mt="20px" columns={[1, 2]} justifyItems='center'>
          {categories.map((category) => {
            return (
              <>

                <Box>
                  {/* <Link to={`/category/${category.id}/items`}> */}
                  <Link to={`/items`}>
                    <Box
                      borderWidth='1px'
                      borderRadius='lg'
                      w='350px'
                      p='50px'
                      m='25px'
                      overflow='hidden'
                      bgImage={category.image}
                      bgPosition="center"
                      bgSize="cover"
                      bgRepeat="no-repeat"
                      _hover={{
                        shadow: "2px 2px #9a8c98",
                        color: "teal.500",
                        cursor: "pointer"
                      }}>

                      <Box p='6'>
                        <Box display='flex' alignItems='baseline'>
                          <Badge borderRadius='full' px='2' colorScheme='teal'>
                            New
                          </Badge>
                        </Box>

                        <Box
                          mt='1'
                          color = 'white'
                          fontSize='1.3rem'
                          fontWeight='semibold'
                          as='h1'
                          lineHeight='tight'
                          isTruncated
                        >
                          {category.name}
                        </Box>

                      </Box>
                    </Box>
                  </Link>
                </Box>

              </>

            )
          })}
        </SimpleGrid>
      </>
    )
  }
}

export default Homepage