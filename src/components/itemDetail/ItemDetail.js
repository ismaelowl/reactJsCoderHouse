import { Heading, Text, Box, Image, useColorModeValue } from '@chakra-ui/react';
import ItemCount from '../itemCount/ItemCount';
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { contexto } from '../../context/CartContext';
import ItemPropertis from './ItemPropertis';
import './itemDetail.css'
import { FaEthereum } from 'react-icons/fa';

const ItemDetail = ({ data }) => {

    const [cantidadItem, setCantidadItem] = useState(0);

    const { addProduct } = useContext(contexto)

    const gray200 = useColorModeValue('gray.600', 'gray.300')
    const gray300 = useColorModeValue('gray.800', 'gray.200')
    const backgroundButton = useColorModeValue('linear-gradient(to left, #7928caa6, #ff0080b8)', 'linear(to-l, #7928CA, #FF0080)')

    const onAdd = (cantidad) => {
        const productContext = { ...data, cantidad }
        setCantidadItem(cantidad)
        addProduct(productContext, cantidad)
    }

    return (
        <Box className="box-detail">
            <Box className="image-box">
                <Image
                    src={data.imageUrl}
                    width="100%"
                    borderRadius="lg"
                    className="fadeIn" />
                <Box mt="10">
                    <Heading size="lg" mb="10">Propiedades</Heading>
                    <Box className="item-propertis">
                        <ItemPropertis props="Blockchain" value={data.blockchain} />
                        <ItemPropertis props="Token ID" value={data.tokenid} />
                        <ItemPropertis props="Token Standard" value={data.tokenstandar} />
                        <ItemPropertis props="Metadata" value={data.metadata} />
                    </Box>
                </Box>
            </Box>
            <Box className="detail-box">
                <Heading
                    fontSize="3em"
                    letterSpacing="1.3px"
                    fontWeight="extrabold"
                    mb="5"
                    bgGradient="linear(to-r, #7928ca, #ff0080)"
                    bgClip="text"
                    className="fadeIn"
                >
                    {data.nombreProducto}
                </Heading>
                <Box
                    d="flex"
                    mt="1.5"
                    alignItems="center"
                    gridGap="3"
                    className="fadeIn">
                    <Image
                        borderRadius="full"
                        boxSize="40px"
                        src={data.userImg}
                        alt="Segun Adebayo"
                    />
                    <Text fontWeight="500" color={gray200}>{data.user}</Text>
                </Box>
                <Text
                    mt="5"
                    color={gray300}
                    className="fadeIn">
                    {data.detail}
                </Text>
                <Box
                    mt="5"
                    display="flex"
                    alignItems="center"
                    gridGap="2"
                    className="fadeIn">
                    <FaEthereum size={40} color="#035d91" />
                    <Text fontSize="30px"> {data.precio} ETH</Text>
                </Box>
                {
                    cantidadItem === 0 ?
                        (
                            <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
                        )
                        :
                        (
                            <Link to="/cart">
                                <Box
                                    p="2"
                                    cursor="pointer"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    borderRadius="lg"
                                    mt="5"
                                    maxW="250px"
                                    bgGradient={backgroundButton}
                                    className="fadeIn shadow-button"
                                >
                                    <Text
                                        marginLeft="3"
                                        fontSize="20px"
                                        fontWeight="bold"
                                        color="white">Finalizar</Text>
                                </Box>
                            </Link>
                        )
                }
            </Box>
        </Box>
    )
}

export default ItemDetail