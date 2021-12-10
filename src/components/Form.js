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
