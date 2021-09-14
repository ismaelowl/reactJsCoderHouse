import { Flex, Skeleton, Box, Heading } from '@chakra-ui/react';
import Item from './Item';

const ItemList = ({ data, nombre }) => {

    return (
        data.length === 0 ?
            (
                <Flex mt="10">
                    <Skeleton height="200px" width="30%" mr="4" borderRadius="lg" />
                    <Skeleton height="200px" width="30%" mr="4" borderRadius="lg" />
                    <Skeleton height="200px" width="30%" mr="4" borderRadius="lg" />
                </Flex>
            )
            :
            (
                <Box>
                    <Heading size="lg">{nombre}</Heading>
                    <Flex mt="5" flexWrap="wrap" alignContent="center" justifyContent="space-between">
                        {data.map((e) => (
                            <Item data={e} key={e.id}></Item>
                        ))}
                    </Flex>
                </Box>
            )
    )
}

export default ItemList