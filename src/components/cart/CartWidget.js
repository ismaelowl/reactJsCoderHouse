import { FiShoppingCart } from 'react-icons/fi';
import { Text, Box } from '@chakra-ui/react'
import { useState, useEffect, useContext } from 'react';
import { contexto } from '../../context/CartContext';

const CartWidget = () => {

    const [productCart, setproductCart] = useState(0);

    const { carrito } = useContext(contexto)

    useEffect(() => {

        setproductCart(carrito.length)

    }, [carrito]);

    return (
        <Box padding="4">
            {
                productCart === 0 ?
                    (
                        <FiShoppingCart size={24}></FiShoppingCart>
                    )
                    :
                    (
                        <Box position="relative">
                            <Box position="absolute" top="15" left="20px" borderRadius="50%" padding="3px 7px 3px 7px" background="green.500">
                                <Text fontSize="13px">
                                    {productCart}
                                </Text>
                            </Box>
                            <FiShoppingCart size={24}></FiShoppingCart>
                        </Box>
                    )
            }
        </Box>

    )
}

export default CartWidget