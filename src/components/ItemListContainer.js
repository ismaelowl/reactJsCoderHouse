import { useState, useEffect } from 'react';
import { Container, Center, Heading } from '@chakra-ui/react';
import ItemList from './ItemList'

const ItemListContainer = ({ nombre }) => {

    const [data, setData] = useState([]);

    const promise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>
                resolve([
                    { id: 1, title: 'Producto 1', price: 1202, imageUrl: "https://bit.ly/2Z4KKcF", rating: 5 },
                    { id: 2, title: 'Producto 2', price: 220, imageUrl: "https://bit.ly/2Z4KKcF", rating: 4 },
                    { id: 3, title: 'Producto 3', price: 603, imageUrl: "https://bit.ly/2Z4KKcF", rating: 2 },
                    { id: 4, title: 'Producto 4', price: 2360, imageUrl: "https://bit.ly/2Z4KKcF", rating: 1 }
                ]), 3000
            )
        })
    }

    useEffect(() => {
        promise().then((data) => {
            setData(data)
        })
    }, []);

    return (
        <Container maxW="container.xl" mt="10" >
            <Center>
                <Heading size="lg">{nombre}</Heading>
            </Center>
            <ItemList data={data} />
        </Container>
    )
}

export default ItemListContainer