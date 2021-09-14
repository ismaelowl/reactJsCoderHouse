import { Container, Heading, Text, Box, Image, Button, Center, Flex } from '@chakra-ui/react';
import ItemCount from './itemCount/ItemCount';
import { useState } from "react";
import { Link } from 'react-router-dom';

const ItemDetail = ({ data }) => {

    const [itemCart, setItemCart] = useState(0);

    const onAdd = (product) => {
        if (itemCart === 0) {
            setItemCart(product)
        } else {
            const itemsCart = itemCart + product
            setItemCart(itemsCart)
        }
    }

    return (
        <Flex justifyContent="space-evenly">
            <Box boxSize="md" mt="10">
                <Heading size="lg" mb="5">{data.title}</Heading>
                <Image src={data.imageUrl} width="90%" mb="5" />
                <Text mt="1">{data.detail}</Text>
                <Text mt="1">$ {data.price} ARS</Text>
            </Box>
            <Box boxSize="md" mt="10">
                <ItemCount stock={10} initial={1} onAdd={onAdd} />

                {
                    itemCart === 0 ?
                        (
                            <Box />
                        )
                        :
                        (
                            <Container maxW="container.sm">
                                <Center>
                                    <Link to="/cart">
                                        <Button colorScheme="teal" variant="solid">
                                            Finalizar Compra
                                        </Button>
                                    </Link>
                                </Center>
                            </Container>
                        )
                }
            </Box>
        </Flex>
    )
}

export default ItemDetail