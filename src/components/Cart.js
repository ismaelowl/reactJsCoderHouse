import { Container, Box, Image, Flex, Text, Button } from "@chakra-ui/react"
import { useContext, useState, useEffect } from "react";
import { contexto } from '../context/CartContext';
import { Heading } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom"

const Cart = () => {

    const [carritoCart, setcarritoCart] = useState([]);

    const { carrito, clear, removeProduct } = useContext(contexto)

    let total = 0

    useEffect(() => {
        setcarritoCart(carrito)
    }, [carrito, carritoCart]);

    carritoCart.forEach(element => {
        total += element.price * element.cantidad
    });

    return (
        <Container maxW="container.xl" mt="10">
            <Heading size="lg">Detalles del Carrito</Heading>
            {
                carritoCart.length === 0 ?
                    (
                        <Box>
                            <Text fontSize="2xl" mt="10">No hay productos en el carrito</Text>
                            <Link  to="/">
                                <Button colorScheme="green" variant="outline" mt="10">
                                    Volver
                                </Button>
                            </Link>
                        </Box>
                    )
                    :
                    (
                        <Box mt="10">
                            {carrito.map((e) => (
                                <Box key={e.id} mt="5">
                                    <Flex alignItems="center" gridGap="20">
                                        <Image
                                            boxSize="150px"
                                            objectFit="cover"
                                            src={e.imageUrl}
                                        />
                                        <Box>
                                            <Text fontSize="xl">Producto: {e.title}</Text>
                                            <Text fontSize="xl">Cantidad: {e.cantidad}</Text>
                                        </Box>
                                        <Box>
                                            <Text fontSize="xl">Precio: ${e.price}</Text>
                                        </Box>
                                        <Button onClick={removeProduct}><CloseIcon w={4} h={4} color="red.500" /></Button>
                                    </Flex>
                                </Box>
                            ))}
                            <Text fontSize="xl" mt="10">Precio Total: ${total}</Text>
                            <Flex>
                                <Button colorScheme="green" variant="outline" mt="10" mr="5">
                                    Finalizar Compra
                                </Button>
                                <Button colorScheme="pink" variant="outline" mt="10" onClick={clear}>
                                    Limpiar Carrito
                                </Button>
                            </Flex>
                        </Box>

                    )
            }

        </Container>
    )
}

export default Cart