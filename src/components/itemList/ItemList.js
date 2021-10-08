import { Flex, Box, Heading } from '@chakra-ui/react';
import Item from '../item/Item';
import './itemList.css'
const ItemList = ({ data, nombre }) => {

    return (
        <Box maxW="container.xl" mt="10">
            <Heading size="lg">{nombre}</Heading>
            <Flex
                className="item-container"
                mt="5"
                flexWrap="wrap"
                alignContent="center">
                {data.map((e) => (
                    <Item data={e} key={e.id}></Item>
                ))}
            </Flex>
        </Box>
    )
}

export default ItemList