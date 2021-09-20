import {  Heading, Text, Box, Image, Button } from '@chakra-ui/react';
import ItemCount from '../itemCount/ItemCount';
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { contexto } from '../../context/CartContext';
import './itemDetail.css'

const ItemDetail = ({ data }) => {

    const [cantidadItem, setCantidadItem] = useState(0);

    const { addProduct } = useContext(contexto)

    const onAdd = (cantidad) => {
        const productContext = { ...data, cantidad }
        setCantidadItem(cantidad)
        addProduct(productContext, cantidad)
    }

    return (
        <Box className="box-detail">
            <Box className="image-box">
                <Image src={data.imageUrl} width="100%" borderRadius="lg"/>
            </Box>
            <Box className="detail-box">
                <Heading size="lg" mb="5">{data.nombreProducto}</Heading>
                <Text mt="5">{data.detail}</Text>
                <Text mt="5">Precio: $ {data.precio} ARS</Text>
                {
                    cantidadItem === 0 ?
                        (
                            <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
                        )
                        :
                        (
                            <Link to="/cart">
                                <Button  mt="10" colorScheme="teal" variant="solid">
                                    Finalizar Compra
                                </Button>
                            </Link>
                        )
                }

            </Box>
        </Box>
    )
}

export default ItemDetail