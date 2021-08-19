import { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import './itemCount.css';

const ItemCount = (prop) => {

    const [contador, setContador] = useState(0);

    const stock = parseInt(prop.stock)
    const initial = parseInt(prop.initial)

    useEffect(() => {
       setContador(initial) 
    }, [initial]);

    const sumarContador = () => {
        if (stock > contador) {
            setContador(contador + 1)
        } else {
            console.log('no hay mas stock')
        }
    }

    const restarContador = () => {
        if (contador === 0) {
            console.log('desactivar boton');
        } else {
            setContador(contador - 1)
        }
    }

    return (
        <Container className="mt-5 itemCountContainer">
            <Row className="justify-content-md-center rowCount" >
                <Col xs lg="2" className="text-aling-end">
                    <Button variant="outline-danger" onClick={restarContador}>-</Button>
                </Col>
                <Col xs lg="2" className="text-aling-center">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Contador</Form.Label>
                            <p>{contador}</p>
                        </Form.Group>
                </Col>
                <Col xs lg="2" className="text-aling-start">
                    <Button variant="outline-primary" onClick={sumarContador}>+</Button>
                </Col>
            </Row>
        </Container>

    )
}

export default ItemCount