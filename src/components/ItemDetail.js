import { Container, Heading, Text, Box, Image } from '@chakra-ui/react';

const ItemDetail = ({ data }) => {

    return (
        <Container maxW="container.sm" mt="10" >
            <Box boxSize="sm">
                <Heading size="lg">{data.title}</Heading>
                <Image src={data.imageUrl} width="90%"/>
                <Text mt="1">{data.detail}</Text>
                <Text mt="1">$ {data.price} ARS</Text>
            </Box>
        </Container>
    )
}

export default ItemDetail