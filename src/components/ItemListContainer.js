import { Container } from 'react-bootstrap';

const ItemListContainer = (prop) => {

    const nombre = prop.nombre
    const apellido = prop.apellido

    return (
        <Container className="text-center mt-5">
            <h1>{nombre + " " + apellido}</h1>
        </Container>
    )
}

export default ItemListContainer