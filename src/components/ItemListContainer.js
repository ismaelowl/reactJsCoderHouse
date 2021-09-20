import { useState, useEffect } from 'react';
import { Container, Box } from '@chakra-ui/react';
import ItemList from './ItemList'
import { useParams } from 'react-router';
import Slider from './layout/slider/Slider';

const ItemListContainer = () => {

    const [listadoProductos, setListadoProductos] = useState([]);
    const [productosNuevos, setProductosNuevos] = useState([]);
    const [productosDestacados, setProductosDestacados] = useState([]);
    const [existeID, setExisteID] = useState(false);
 
    const { id } = useParams()

    const promise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>
                resolve([
                    { id: 1, nombreProducto: 'Producto 1', precio: 1202, imageUrl: "https://bit.ly/2Z4KKcF", rating: 5, categoriaId: "nuevosProductos", stock: 20, destacado: false, nuevo: true },
                    { id: 2, nombreProducto: 'Producto 2', precio: 220, imageUrl: "https://bit.ly/2Z4KKcF", rating: 4, categoriaId: "nuevosProductos", stock: 30, destacado: false, nuevo: true },
                    { id: 3, nombreProducto: 'Producto 3', precio: 603, imageUrl: "https://bit.ly/2Z4KKcF", rating: 2, categoriaId: "nuevosProductos", stock: 10, destacado: false, nuevo: true },
                    { id: 4, nombreProducto: 'Producto 4', precio: 2360, imageUrl: "https://bit.ly/2Z4KKcF", rating: 1, categoriaId: "nuevosProductos", stock: 5, destacado: false, nuevo: true },
                    { id: 234, nombreProducto: 'Producto 3123', precio: 3132, imageUrl: "https://bit.ly/2Z4KKcF", rating: 1, categoriaId: "nuevosProductos", stock: 5, destacado: false, nuevo: true },
                    { id: 231, nombreProducto: 'Producto 213', precio: 322, imageUrl: "https://bit.ly/2Z4KKcF", rating: 1, categoriaId: "nuevosProductos", stock: 5, destacado: false, nuevo: true },
                    { id: 5, nombreProducto: 'Producto 5', precio: 1202, imageUrl: "https://bit.ly/2Z4KKcF", rating: 5, categoriaId: "productosDestacados", stock: 15, destacado: true, nuevo: false },
                    { id: 6, nombreProducto: 'Producto 6', precio: 220, imageUrl: "https://bit.ly/2Z4KKcF", rating: 4, categoriaId: "productosDestacados", stock: 16, destacado: true, nuevo: false },
                    { id: 7, nombreProducto: 'Producto 7', precio: 603, imageUrl: "https://bit.ly/2Z4KKcF", rating: 2, categoriaId: "productosDestacados", stock: 35, destacado: true, nuevo: false },
                    { id: 32, nombreProducto: 'Producto 8', precio: 2360, imageUrl: "https://bit.ly/2Z4KKcF", rating: 1, categoriaId: "productosDestacados", stock: 24, destacado: true, nuevo: false },
                    { id: 123, nombreProducto: 'Producto 123', precio: 254, imageUrl: "https://bit.ly/2Z4KKcF", rating: 1, categoriaId: "productosDestacados", stock: 24, destacado: true, nuevo: false },
                    { id: 143, nombreProducto: 'Producto 45', precio: 23420, imageUrl: "https://bit.ly/2Z4KKcF", rating: 1, categoriaId: "productosDestacados", stock: 24, destacado: true, nuevo: false }
                ]), 0
            )
        })
    }

    useEffect(() => {
        if (id) {
            promise().then((productos) => {
                const productosPorCategoria = productos.filter((producto) => producto.categoriaId === id)
                setListadoProductos(productosPorCategoria)
                setExisteID(true)
            })
        } else {
            promise().then((productos) => {
                const productosNuevos = productos.filter((producto) => producto.nuevo === true)
                setProductosNuevos(productosNuevos)
                const productosDestacados = productos.filter((producto) => producto.destacado === true)
                setProductosDestacados(productosDestacados)
                setExisteID(false)
            })
        }

    }, [id]);


    const LoadingItemList = () => {

        if (existeID) {
            return (
                <Box>
                    <ItemList data={listadoProductos} nombre="Categoria" />
                </Box>
            )
        } else {
            return (
                <Box>
                    <Slider/>
                    <ItemList data={productosNuevos} nombre="Nuevos Productos" />
                    <ItemList data={productosDestacados} nombre="Productos Destacados" />
                </Box>
            )
        }
    }

    return (
        <Container maxW="container.xl">
            <LoadingItemList />
        </Container>
    )
}

export default ItemListContainer