import { Container, Heading, Text, Box, Image } from '@chakra-ui/react';
import ItemCount from './itemCount/ItemCount';

const ItemDetail = ({ data }) => {
    return (
        <Container maxW="container.sm" mt="10">
            <Box boxSize="sm" margin="auto">
                <Heading size="lg" mb="5">{data.title}</Heading>
                <Image src={data.imageUrl} width="90%" mb="5"/>
                <Text mt="1">{data.detail}</Text>
                <Text mt="1">$ {data.price} ARS</Text>
                <ItemCount stock={10} initial={3}/>
            </Box>
        </Container>
    )
}

export default ItemDetail