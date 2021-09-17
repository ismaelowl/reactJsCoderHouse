import { useState, useEffect } from 'react';
import { Container, Heading } from '@chakra-ui/react';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router';

const ItemDetailContainer = () => {

    const [data, setData] = useState([]);

    const { id } = useParams()

    const promise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>
                resolve([
                    { id: '1', title: 'Producto 1', price: 1202, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", rating: 5, imageUrl: "https://bit.ly/2Z4KKcF", stock: 7 },
                    { id: '2', title: 'Producto 2', price: 220, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", rating: 4, imageUrl: "https://bit.ly/2Z4KKcF", stock: 14 },
                    { id: '3', title: 'Producto 3', price: 603, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", rating: 2, imageUrl: "https://bit.ly/2Z4KKcF", stock: 34 },
                    { id: '4', title: 'Producto 4', price: 2360, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", rating: 1, imageUrl: "https://bit.ly/2Z4KKcF", stock: 6 },
                    { id: '5', title: 'Producto 5', price: 2360, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", rating: 1, imageUrl: "https://bit.ly/2Z4KKcF", stock: 23 },
                    { id: '6', title: 'Producto 6', price: 2360, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", rating: 1, imageUrl: "https://bit.ly/2Z4KKcF", stock: 15 },
                    { id: '7', title: 'Producto 7', price: 2360, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", rating: 1, imageUrl: "https://bit.ly/2Z4KKcF", stock: 10 },
                    { id: '8', title: 'Producto 8', price: 2360, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", rating: 1, imageUrl: "https://bit.ly/2Z4KKcF", stock: 3 }
                ]), 0
            )
        })
    }

    useEffect(() => {
        promise().then((data) => {
            const detail = data.find((element) => element.id === id)
            setData(detail)
        })
    }, [id]);

    return (
        <Container maxW="container.xl" mt="10" >
            <Heading size="lg">Detalles del Producto</Heading>
            <ItemDetail data={data} />
        </Container>
    )
}

export default ItemDetailContainer