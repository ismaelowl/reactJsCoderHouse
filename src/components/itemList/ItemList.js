import { Flex, Box, Heading } from '@chakra-ui/react';
import Item from '../item/Item';

const ItemList = ({ data, nombre }) => {

    return (
        <Box maxW="container.xl" mt="10">
            <Heading size="lg">{nombre}</Heading>
            <Flex
                mt="5" flexWrap="wrap"
                alignContent="center"
                justifyContent="space-between">
                {data.map((e) => (
                    <Item data={e} key={e.id}></Item>
                ))}
            </Flex>
        </Box>
    )
}

export default ItemList