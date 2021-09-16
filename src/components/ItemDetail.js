import { Container, Heading, Text, Box, Image, Button, Center, Flex } from '@chakra-ui/react';
import ItemCount from './itemCount/ItemCount';
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { contexto } from './CartContext';

const ItemDetail = ({ data }) => {

    const [cantidadItem, setCantidadItem] = useState(0);

    const { addProduct } = useContext(contexto)

    const onAdd = (cantidad) => {
        const productContext = { ...data, cantidad }
        setCantidadItem(cantidad)
        addProduct(productContext, cantidad)
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
                {
                    cantidadItem === 0 ?
                        (
                            <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
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