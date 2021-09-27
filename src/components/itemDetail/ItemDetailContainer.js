import { useState, useEffect } from 'react';
import { Container, Heading } from '@chakra-ui/react';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router';
import { firestore } from '../../firebase/firebase'

const ItemDetailContainer = () => {

    const [data, setData] = useState([]);

    const { id } = useParams()
 
    useEffect(() => {
        const db = firestore
        const collection = db.collection('productos').doc(`${id}`)
        const promise = collection.get()
        promise
            .then((doc) => {
                const productoData = doc.data()
                const productoId = doc.id
                const productoFinal = {...productoData, id:productoId}
                setData(productoFinal)
            })
            .catch((e) => {
                console.log(e);
            })
    }, [id]);

    return (
        <Container maxW="container.xl" mt="10" minH="80vh">
            <Heading size="lg">Detalles - {data.nombreProducto}</Heading>
            <ItemDetail data={data} />
        </Container>
    )
}

export default ItemDetailContainer