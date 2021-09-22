import { useState, useEffect } from 'react';
import { Container, Box, Spinner, Center } from '@chakra-ui/react';
import ItemList from './ItemList'
import { useParams } from 'react-router';
import Slider from './layout/slider/Slider';
import { firestore } from '../firebase/firebase'

const ItemListContainer = () => {

    const [listadoProductos, setListadoProductos] = useState([]);
    const [productosNuevos, setProductosNuevos] = useState([]);
    const [productosDestacados, setProductosDestacados] = useState([]);
    const [existeID, setExisteID] = useState(false);
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    const db = firestore
    const collection = db.collection('productos')
    const productosCategoria = collection.where('categoriaId', '==', `${id}`)

    useEffect(() => {
        if (id) {
            setLoading(true)
            const promise = productosCategoria.get()
            promise
                .then((querySnapshot) => {
                    const docs = querySnapshot.docs
                    const productosPorCategoria = []

                    docs.forEach((doc) => {
                        const docSnapshot = doc
                        const productoId = {...docSnapshot.data(), id: docSnapshot.id}
                        productosPorCategoria.push(productoId)
                    })

                    setListadoProductos(productosPorCategoria)
                    setExisteID(true)
                    
                })
                .catch((e) => {
                    console.log(e);
                })
                .finally(()=>{
                    setLoading(false)
                })
        } else {
            setLoading(true)
            const promise = collection.get()
            promise
                .then((snapshot) => {

                    const docs = snapshot.docs
                    const productos = []

                    docs.forEach((doc) => {
                        const docSnapshot = doc
                        const productoId = { ...docSnapshot.data(), id: docSnapshot.id }
                        productos.push(productoId)
                    })

                    const productosNuevos = productos.filter((producto) => producto.nuevo === true)
                    setProductosNuevos(productosNuevos)

                    const productosDestacados = productos.filter((producto) => producto.destacado === true)
                    setProductosDestacados(productosDestacados)
                    setExisteID(false)
                    setLoading(false)
                })
                .catch((e) => {
                    console.log(e);
                })
                .finally(()=>{
                    setLoading(false)
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
                    <Center mt="10">
                        <Spinner
                            thickness="4px"
                            speed="0.65s"
                            emptyColor="gray.200"
                            color="blue.500"
                            size="xl"
                        />
                    </Center>
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