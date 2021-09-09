import { Flex, Skeleton } from '@chakra-ui/react';
import Item from './Item';

const ItemList = ({ data }) => {

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
                <Flex mt="10" flexWrap="wrap">
                    {data.map((e) => (
                        <Item data={e} key={e.id}></Item>
                    ))}
                </Flex>
            )
    )
}

export default ItemList