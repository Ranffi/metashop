import React, { Component } from 'react'
import axios from 'axios'
import { Box, Badge, Flex } from '@chakra-ui/react'

class Homepage extends Component {

    constructor() {
        super()
        this.state = {
            categories: []
        }
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:3001/categories')
        console.log(res)
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
                bgSize ="cover" 
                bgRepeat="no-repeat" 
                bgImage ="https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
                </Box>
                <Flex ml = '15%' wrap = 'wrap'>
                {categories.map((category) => {
                    return (
                        <>
                        <Box w = '50%' >
                        <Box 
                        maxW='sm' 
                        borderWidth='1px' 
                        borderRadius='lg' 
                        p = '50px'
                        m = '25px' 
                        overflow='hidden'  
                        bgImage={category.image}
                        bgPosition="center"
                        bgSize ="cover"
                        bgRepeat="no-repeat"
                        _hover={{
                            shadow: "2px 2px #9a8c98",
                            color: "teal.500",
                          }}>
                    
                          <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                              <Badge borderRadius='full' px='2' colorScheme='teal'>
                                New
                              </Badge>
                            </Box>
                    
                            <Box
                              mt='1'
                              fontWeight='semibold'
                              as='h4'
                              lineHeight='tight'
                              isTruncated
                            >
                              {category.name}
                            </Box>
                    
                            </Box>
                          </Box>
                          </Box>
                          </>

                      )
                })}
                </Flex>
            </>
        )
    }
}

export default Homepage