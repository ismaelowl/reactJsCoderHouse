import { Container, Box, Image, Flex, Text, Button, useColorModeValue } from "@chakra-ui/react"
import { useContext, useState, useEffect } from "react";
import { contexto } from '../../context/CartContext';
import { Heading } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom"
import { FaEthereum } from 'react-icons/fa';
import './cart.css'

const Cart = () => {

    const [carritoCart, setcarritoCart] = useState([]);

    const { carrito, clear, removeProduct } = useContext(contexto)

    const bgBorder = useColorModeValue('#46154a36', '#7b4d805e')

    let total = 0

    useEffect(() => {
        setcarritoCart(carrito)
    }, [carrito, carritoCart]);

    carritoCart.forEach(element => {
        total += element.precio * element.cantidad
    });

    return (
        <Container maxW="container.xl" mt="10" minH="70vh">
            <Flex justifyContent="space-between">
                <Heading size="lg">Detalles del Carrito</Heading>
                {
                    carrito.length === 0 ? 
                    (
                        <Box/>
                    )
                    :
                    (  
                        <Button
                        fontSize=".8em"
                        colorScheme="pink"
                        variant="outline"
                        onClick={clear}>
                        Eliminar Todo
                    </Button>
                    )
                }
            </Flex>
            {
                carritoCart.length === 0 ?
                    (
                        <Box>
                            <Text
                                fontSize="2xl"
                                mt="10">
                                No hay NFTs en el carrito
                            </Text>
                            <Link to="/">
                                <Button
                                    colorScheme="purple"
                                    variant="outline"
                                    mt="10">
                                    Volver
                                </Button>
                            </Link>
                        </Box>
                    )
                    :
                    (
                        <Box mt="10" w="100%">
                            {carrito.map((e) => (
                                <Box
                                    key={e.id}
                                    mt="5"
                                    w="100%"
                                    p="6"
                                    borderRadius="lg"
                                    borderWidth="2px"
                                    borderColor={bgBorder}
                                    position="relative"
                                    className="fadeIn">
                                    <Box className="box-cart">
                                        <Image
                                            boxSize="150px"
                                            objectFit="cover"
                                            src={e.imageUrl}
                                            borderRadius="lg"
                                        />
                                        <Box>
                                            <Text fontSize="xl"><span className="font-bold">NFT:</span> {e.nombreProducto}</Text>
                                            <Text fontSize="xl"><span className="font-bold">Cantidad:</span> {e.cantidad}</Text>
                                        </Box>
                                        <Box>
                                            <Text fontSize="xl"><span className="font-bold">ETH:</span> ${e.precio}</Text>
                                        </Box>
                                        <Button onClick={removeProduct}>
                                            <CloseIcon w={4} h={4} color="red.500" />
                                        </Button>
                                    </Box>
                                </Box>
                            ))}
                            <Box
                                fontSize="1.5em"
                                mt="10"
                                display="flex"
                                gridGap="2"
                                alignItems="center">
                                <span className="font-bold">Total: </span>
                                <FaEthereum
                                    size={24}
                                    color="#035d91" />
                                {total} ETH
                            </Box>
                            <Flex alignItems="center" mt="10">
                                <Link to="/payment">
                                    <Button
                                        fontSize="1.6em"
                                        padding="6"
                                        colorScheme="purple"
                                        variant="solid">
                                        Verificar
                                    </Button>
                                </Link>
                            </Flex>
                        </Box>
                    )
            }
        </Container>
    )
}

export default Cart