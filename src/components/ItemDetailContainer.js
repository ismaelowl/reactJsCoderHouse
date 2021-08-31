import { useState, useEffect } from 'react';
import { Container, Center, Heading } from '@chakra-ui/react';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [data, setData] = useState([]);

    const promise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>
                resolve([
                    { id: 1, title: 'Producto 1', price: 1202, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", rating: 5, imageUrl: "https://bit.ly/2Z4KKcF" },
                    { id: 2, title: 'Producto 2', price: 220, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", rating: 4, imageUrl: "https://bit.ly/2Z4KKcF" },
                    { id: 3, title: 'Producto 3', price: 603, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", rating: 2, imageUrl: "https://bit.ly/2Z4KKcF" },
                    { id: 4, title: 'Producto 4', price: 2360, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", rating: 1, imageUrl: "https://bit.ly/2Z4KKcF" }
                ]), 2000
            )
        })
    }

    useEffect(() => {
        promise().then((data) => {
            const detail = data.find((element => element.id === 3))
            setData(detail)
        })
    }, []);

    return (
        <Container maxW="container.xl" mt="10" >
            <Center>
                <Heading size="lg">Item Detail Container</Heading>
            </Center>
            <ItemDetail data={data}/>
        </Container>
    )
}

export default ItemDetailContainer