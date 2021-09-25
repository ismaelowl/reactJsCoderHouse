import { useState } from "react";
import { Flex, Box, Button, Text, useColorModeValue, useToast } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi'
import './itemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial);

    const toast = useToast()

    const backgroundButton = useColorModeValue('linear-gradient(to left, #7928caa6, #ff0080b8)', 'linear(to-l, #7928CA, #FF0080)')

    const sumarContador = () => {
        if (stock > contador) {
            setContador(contador + 1)
        } else {
            return
        }
    }

    const restarContador = () => {
        if (contador === 1) {
            return
        } else {
            setContador(contador - 1)
        }
    }

    const handlerOnAdd = () => {
        onAdd(contador)
        toast({
            title: "NFT Agregado.",
            description: "Sigue agregando!",
            status: "success",
            duration: 2000,
            isClosable: true,
          })
    }

    return (
        <Box mt="5">
            <Text>Comprar Ahora</Text>
            <Flex alignItems="center" mt="5">
                <Box>
                    <Button
                        colorScheme="teal"
                        variant="outline"
                        border="none"
                        onClick={restarContador}>
                        <Text fontSize="25px">-</Text>
                    </Button>
                </Box>
                <Box ml="5" mr="5">
                    <Text fontSize="13px" fontWeight="bold">{contador}</Text>
                </Box>
                <Box>
                    <Button
                        colorScheme="teal"
                        variant="outline"
                        border="none"
                        onClick={sumarContador}>
                        <Text fontSize="25px">+</Text>
                    </Button>
                </Box>
            </Flex>
            <Box
                onClick={handlerOnAdd}
                p="2"
                cursor="pointer"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="lg"
                mt="5"
                maxW="250px"
                bgGradient={backgroundButton}
                className="fadeIn shadow-button"
                >
                <FiShoppingCart size={20} strokeWidth={3} color="white" />
                <Text
                    marginLeft="3"
                    fontSize="20px"
                    fontWeight="bold"
                    color="white">Comprar NFT</Text>
            </Box>
        </Box>
    )
}

export default ItemCount