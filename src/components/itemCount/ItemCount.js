import { useState } from "react";
import { Container, Flex, Box, Button, Text } from '@chakra-ui/react';
import './itemCount.css';

const ItemCount = ({ stock, initial }) => {

    const [contador, setContador] = useState(initial);

    const sumarContador = () => {
        if (stock > contador) {
            setContador(contador + 1)
        } else {
            console.log('no hay mas stock')
        }
    }

    const restarContador = () => {
        if (contador === 0) {
            console.log('desactivar boton');
        } else {
            setContador(contador - 1)
        }
    }

    return (
        <Container maxW="container.xl" mt="5">
            <Text textAlign="center">Contador</Text>
            <Flex justifyContent="center" alignItems="center" mt="5">
                <Box>
                    <Button colorScheme="teal" variant="outline" onClick={restarContador}>
                        -
                    </Button>
                </Box>
                <Box ml="5" mr="5">
                    <Text>{contador}</Text>
                </Box>
                <Box>
                <Button colorScheme="teal" variant="outline" onClick={sumarContador}>
                        +
                    </Button>
                </Box>
            </Flex>
        </Container>
    )
}

export default ItemCount