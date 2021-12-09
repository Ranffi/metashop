import React from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Stack,
    Button,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';

const Form = (props) => {    
    return (
        <Box>
            <Flex minH={'25vh'} align={'center'} justify={'center'} bg={useColorModeValue('#F2E9E4', '#1A202C')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'3xl'} textAlign={'center'} color={useColorModeValue('#22223B', 'white')}>
                            {props.name}
                        </Heading>
                    </Stack>
                    <Box rounded={'lg'} bg={useColorModeValue("#c9ada7", "#22223B")} boxShadow={'lg'} p={8}>
                        <form onSubmit={props.submission} style={{color: "white"}}>
                            <Stack spacing={4}>
                                <HStack>
                                    <Box>
                                        <FormControl id="titleOfItem">
                                            <FormLabel>Title</FormLabel>
                                            <Input type="text" onChange={props.onChange}/>
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl id="priceOfItem">
                                            <FormLabel>Price</FormLabel>
                                            <Input type="text" onChange={props.onChange}/>
                                        </FormControl>
                                    </Box>
                                </HStack>
                                <FormControl id="imageOfItem">
                                    <FormLabel>Image URL</FormLabel>
                                    <Input type="text" onChange={props.onChange}/>
                                </FormControl>
                                <FormControl id="descriptionOfItem">
                                    <FormLabel>Description</FormLabel>
                                    <Input type="text" onChange={props.onChange}/>
                                </FormControl>
                                <Stack spacing={10} pt={2}>
                                    <Button type="submit" size="lg" bg={'green.500'} color={'white'} hover={{bg: 'blue.500'}}>
                                        {props.name}
                                    </Button>
                                </Stack>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            </Flex>
        </Box>
    );
}

export default Form;

// AFRAID TO COMPLETELY ERASE PREVIOUS FORM 👀👀👀
{/* <Flex p={50} w="full" alignItems="center" justifyContent="center">
    <Box>
        <h1>Update Item</h1>
        <form onSubmit={this.handleUpdate}>
            <label>
            Title of Item:
            <input
                style={{color: "red"}}
                type="text"
                name="titleOfItem"
                value={this.state.titleOfItem}
                onChange={this.handleChange}
                backgroundColor="red"
            />
            </label>
            <br />
            <label>
                Image of Item:
                <input
                    type="text"
                    name="imageOfItem"
                    value={this.state.imageOfItem}
                    onChange={this.handleChange}
                />
            </label>
            <br />
            <label>
                Price of Item:
                <input
                    type="text"
                    name="priceOfItem"
                    value={this.state.priceOfItem}
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
                    value={this.state.descriptionOfItem}
                    onChange={this.handleChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    </Box>
</Flex> */}
