import { useState, useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import ItemList from './ItemList'
import { useParams } from 'react-router';

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    
    const { id } = useParams()

    const promise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>
                resolve([
                    { id: 1, title: 'Producto 1', price: 1202, imageUrl: "https://bit.ly/2Z4KKcF", rating: 5, categoriaId: "1", stock: 20},
                    { id: 2, title: 'Producto 2', price: 220, imageUrl: "https://bit.ly/2Z4KKcF", rating: 4, categoriaId: "1", stock: 30},
                    { id: 3, title: 'Producto 3', price: 603, imageUrl: "https://bit.ly/2Z4KKcF", rating: 2, categoriaId: "1", stock: 10},
                    { id: 4, title: 'Producto 4', price: 2360, imageUrl: "https://bit.ly/2Z4KKcF", rating: 1, categoriaId: "1", stock: 5},
                    { id: 5, title: 'Producto 5', price: 1202, imageUrl: "https://bit.ly/2Z4KKcF", rating: 5, categoriaId: "2", stock: 15},
                    { id: 6, title: 'Producto 6', price: 220, imageUrl: "https://bit.ly/2Z4KKcF", rating: 4, categoriaId: "2", stock: 16},
                    { id: 7, title: 'Producto 7', price: 603, imageUrl: "https://bit.ly/2Z4KKcF", rating: 2, categoriaId: "2", stock: 35},
                    { id: 8, title: 'Producto 8', price: 2360, imageUrl: "https://bit.ly/2Z4KKcF", rating: 1, categoriaId: "2", stock: 24}
                ]), 0
            )
        })
    }

    useEffect(() => {
        if(id) {
            promise().then((data) => {
                const detail = data.filter((element) => element.categoriaId === id)
                setData(detail)
            })
        } else {
            promise().then((data) => {
                setData(data)
            })
        }
        
    }, [id]);

    return (
        <Container maxW="container.xl" mt="10">
            <ItemList data={data} nombre="Nuevos Productos" />
        </Container>
    )
}

export default ItemListContainer