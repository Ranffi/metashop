import React from 'react';
import Button from "./Button"
import { Flex, Box, Image, Center, Container, useColorModeValue } from "@chakra-ui/react";

const Item = (props) => {
    return (
        <Box>
            <Flex p={50} w="full" alignItems="center" justifyContent="center">
                <Box
                    bg={useColorModeValue("#c9ada7", "#22223B")} // light mode, dark mode
                    maxW="sm"
                    borderWidth="1px"
                    rounded="lg"
                    shadow="lg"
                    position="relative"
                >
                    <Container>
                        <Box align="right" p={3}>
                            {/* IF ITEM COMPONENT ADDED TO ItemsPage, ADD CONDITIONAL STATEMENT FOR BUTTON TO CHECK IF ADMIN */}
                            <button onClick={props.onDelete} style={{color: "white"}}>X</button> 
                        </Box>
                        <Center>
                            <Image
                                src={props.item.image}
                                alt={`Picture of ${props.item.image}`}
                                roundedTop="lg"
                                boxSize="15em"
                                objectFit="fill"
                                borderRadius="0.5em"
                                marginBottom="5"
                                marginTop="5"
                                alignSelf="center"
                            />
                        </Center>
                    </Container>
                    <Box p="6">
                        <Flex
                            mt="1"
                            justifyContent="space-between"
                            alignContent="center"
                        >
                            <Box
                                fontSize="2xl"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"
                                isTruncated
                                color="white"
                            >
                                {props.item.title}
                            </Box>
                        </Flex>

                        <Flex
                            justifyContent="space-between"
                            alignContent="center"
                            color="white"
                        >
                            {props.item.description}
                        </Flex>

                        <br />

                        <Box fontSize="2xl" color="white">
                            {`$${props.item.price}`}
                        </Box>

                        <br />

                        <Box color="white">
                            <Button
                                itemId={props.item.id}
                                userEmail={props.userEmail}
                            />
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}

export default Item;
