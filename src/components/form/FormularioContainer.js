import { Container, Heading, Box, UnorderedList, ListItem, Button, FormControl, FormLabel, Input, useToast, Text } from "@chakra-ui/react"
import { useContext, useState, useEffect } from "react";
import { contexto } from "../../context/CartContext"
import firebase from 'firebase/app';
import { firestore } from '../../firebase/firebase'
import './formulario.css'
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEthereum } from 'react-icons/fa'

const FormularioContainer = () => {

    const { register, handleSubmit } = useForm();
    const [cart, setCart] = useState([])
    const [token, setToken] = useState(false)
    const [pedido, setPedido] = useState(false)
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const history = useHistory();

    const { carrito, setCarrito } = useContext(contexto)

    const db = firestore.collection('pedidos')

    useEffect(() => {

        const productosEnCarrito = []

        carrito.forEach((e) => {

            const producto = {
                nombre: e.nombreProducto,
                id: e.id,
                cantidad: e.cantidad,
                precio: e.precio
            }

            productosEnCarrito.push(producto)

        })

        setCart(productosEnCarrito)

    }, [carrito]);

    const calcularTotal = () => {
        let total = 0
        cart.forEach(element => {
            total += element.precio * element.cantidad
        });
        return total
    }

    const obtenerFecha = () => {
        let fecha = '2000-07-07 18:30:00'
        const firestoreFecha = firebase.firestore.Timestamp.fromDate(new Date())
        fecha = new Date(firestoreFecha.seconds * 1000)
        return fecha
    }

    const onSubmit = (data) => {
        setLoading(true)

        if (cart.length === 0) {
            toast({
                title: "NO PUEDE SER ! ! !",
                description: "No tienes productos en el carrito.",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
            history.push('/')
        } else {

            const usuario = {
                mail: data.mail,
                nombre: data.nombre,
                telefono: data.telefono
            }

            const nuevoPedido = {
                usuario: usuario,
                pedido: cart,
                total: calcularTotal(),
                fecha: obtenerFecha()
            }

            setPedido(nuevoPedido)

            db.add(nuevoPedido).then(({ id }) => {
                setToken(id)
                setCarrito([])
            }).catch(err => {
                console.log(err);
            })
        }
    }

    return (
        <Container maxW="container.xl" mt="10" minH="70vh">
            <Heading size="lg">{token ? ('Detalles de tu Pedido !') : ('Completa con tus datos')}</Heading>
            {
                token ?
                    (
                        <Box className="resumen" w="50%" mt="10">
                            <Heading size="md" mb="5">Pedido Token: {token}</Heading>
                            <UnorderedList>
                                <ListItem mb="2">Nombre: {pedido.usuario.nombre}</ListItem>
                                <ListItem mb="2">Total: {pedido.total} ETH</ListItem>
                                <ListItem >Fecha: {pedido.fecha.toString()}</ListItem>
                            </UnorderedList>
                            <Link to="/">
                                <Button
                                    mt="10"
                                    fontSize="1.6em"
                                    padding="4"
                                    colorScheme="purple"
                                    variant="solid">
                                    Volver a Home
                                </Button>
                            </Link>
                        </Box>
                    )
                    :
                    (
                        <Box className="formulario-container fadeIn" mt="10">
                            <Box className="form">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <FormControl isRequired>

                                        <FormLabel>Nombre</FormLabel>
                                        <Input
                                            type="text"
                                            name="nombre"
                                            {...register("nombre", { required: true, maxLength: 60 })}
                                            placeholder="Horacio"
                                            size="lg"
                                        />

                                        <FormLabel mt="5">Email</FormLabel>
                                        <Input
                                            type="email"
                                            name="mail"
                                            {...register("mail", { required: true, maxLength: 80 })}
                                            placeholder="mail@mail.com.ar"
                                            size="lg"
                                        />

                                        <FormLabel mt="5">Telefono</FormLabel>
                                        <Input
                                            type="number"
                                            name="telefono"
                                            {...register("telefono", { required: true, maxLength: 20 })}
                                            placeholder="3804623560"
                                            size="lg"
                                        />
                                    </FormControl>

                                    <Button
                                        mt={10}
                                        fontSize="1.2em"
                                        colorScheme="purple"
                                        padding="5"
                                        isLoading={loading}
                                        isDisabled={loading}
                                        loadingText="Procesando.."
                                        type="submit"
                                    >
                                        Enviar Pedido
                                    </Button>

                                </form>
                            </Box>
                            <Box className="ethe-container">
                                <FaEthereum size="140px" className="ethe" color="#035d91" />
                                <Text
                                    
                                    fontSize="2xl"
                                    fontWeight="bold"
                                    textAlign="center"
                                    mt="10"
                                >
                                    Ethereum Block Chain
                                </Text>
                            </Box>
                        </Box>
                    )
            }

        </Container>
    )
}

export default FormularioContainer