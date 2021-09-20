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
                    { id: '1', nombreProducto: 'Producto 1', precio: 1202, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit", imageUrl: "https://bit.ly/2Z4KKcF", rating: 5, categoriaId: "nuevosProductos", stock: 20, destacado: false, nuevo: true },
                    { id: '2', nombreProducto: 'Producto 2', precio: 220, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit", imageUrl: "https://bit.ly/2Z4KKcF", rating: 4, categoriaId: "nuevosProductos", stock: 30, destacado: false, nuevo: true },
                    { id: '3', nombreProducto: 'Producto 3', precio: 603, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit", imageUrl: "https://bit.ly/2Z4KKcF", rating: 2, categoriaId: "nuevosProductos", stock: 10, destacado: false, nuevo: true },
                    { id: '4', nombreProducto: 'Producto 4', precio: 2360, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit", imageUrl: "https://bit.ly/2Z4KKcF", rating: 1, categoriaId: "nuevosProductos", stock: 5, destacado: false, nuevo: true },
                    { id: '234', nombreProducto: 'Producto 3123', precio: 3132, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit", imageUrl: "https://bit.ly/2Z4KKcF", rating: 1, categoriaId: "nuevosProductos", stock: 5, destacado: false, nuevo: true },
                    { id: '231', nombreProducto: 'Producto 213', precio: 322, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit", imageUrl: "https://bit.ly/2Z4KKcF", rating: 1, categoriaId: "nuevosProductos", stock: 5, destacado: false, nuevo: true },
                    { id: '5', nombreProducto: 'Producto 5', precio: 1202, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit", imageUrl: "https://bit.ly/2Z4KKcF", rating: 5, categoriaId: "productosDestacados", stock: 15, destacado: true, nuevo: false },
                    { id: '6', nombreProducto: 'Producto 6', precio: 220, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit", imageUrl: "https://bit.ly/2Z4KKcF", rating: 4, categoriaId: "productosDestacados", stock: 16, destacado: true, nuevo: false },
                    { id: '7', nombreProducto: 'Producto 7', precio: 603, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit", imageUrl: "https://bit.ly/2Z4KKcF", rating: 2, categoriaId: "productosDestacados", stock: 35, destacado: true, nuevo: false },
                    { id: '32', nombreProducto: 'Producto 8', precio: 2360, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit", imageUrl: "https://bit.ly/2Z4KKcF", rating: 1, categoriaId: "productosDestacados", stock: 24, destacado: true, nuevo: false },
                    { id: '123', nombreProducto: 'Producto 123', precio: 254, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit", imageUrl: "https://bit.ly/2Z4KKcF", rating: 1, categoriaId: "productosDestacados", stock: 24, destacado: true, nuevo: false },
                    { id: '143', nombreProducto: 'Producto 45', precio: 23420, detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit", imageUrl: "https://bit.ly/2Z4KKcF", rating: 1, categoriaId: "productosDestacados", stock: 24, destacado: true, nuevo: false }
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
        <Container maxW="container.xl" mt="10" minH="80vh">
            <Heading size="lg">Detalles del Producto</Heading>
            <ItemDetail data={data} />
        </Container>
    )
}

export default ItemDetailContainer