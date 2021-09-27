import { useState, useEffect } from 'react';
import { Container, Box, Spinner } from '@chakra-ui/react';
import ItemList from './ItemList'
import { useParams } from 'react-router';
import Slider from '../layout/slider/Slider';
import { firestore } from '../../firebase/firebase'

const ItemListContainer = () => {

    const [listadoProductos, setListadoProductos] = useState([]);
    const [productosNuevos, setProductosNuevos] = useState([]);
    const [productosDestacados, setProductosDestacados] = useState([]);
    const [existeID, setExisteID] = useState(false);
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const db = firestore
        const collection = db.collection('productos')
        const productosCategoria = collection.where('categoriaId', '==', `${id}`)

        const obtProductosCategoria = async () => {
            setLoading(true)
            const productosPorCategoria = []
    
            const { docs } = await productosCategoria.get()
    
            docs.forEach((doc) => {
                const docSnapshot = doc
                const productoId = { ...docSnapshot.data(), id: docSnapshot.id }
                productosPorCategoria.push(productoId)
            })
    
            setListadoProductos(productosPorCategoria)
            setLoading(false)
        }

        const obtProductosHome = async () => {
            setLoading(true)
    
            const productos = []
    
            const { docs } = await collection.get()
    
            docs.forEach((doc) => {
                const docSnapshot = doc
                const productoId = { ...docSnapshot.data(), id: docSnapshot.id }
                productos.push(productoId)
            })
    
            const productosNuevos = productos.filter((producto) => producto.nuevo === true)
            setProductosNuevos(productosNuevos)
    
            const productosDestacados = productos.filter((producto) => producto.destacado === true)
            setProductosDestacados(productosDestacados)
            setLoading(false)
        }

        if (id) {
            obtProductosCategoria()
            setExisteID(true)
        } else {
            obtProductosHome()
            setExisteID(false)
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
                    <Slider />
                    <ItemList data={productosNuevos} nombre="Nuevos Productos" />
                    <ItemList data={productosDestacados} nombre="Productos Destacados" />
                </Box>
            )
        }
    }

    return (
        <Container maxW="container.xl">
            {
                loading ? (
                    <Box w="100%" h="80vh" d="flex" alignItems="center" justifyContent="center">
                        <Spinner
                            thickness="4px"
                            speed="0.65s"
                            emptyColor="gray.500"
                            color="#a31cb2bd"
                            size="xl"
                        />
                    </Box>
                )
                    :
                    (
                        <LoadingItemList />
                    )
            }

        </Container>
    )
}

export default ItemListContainer