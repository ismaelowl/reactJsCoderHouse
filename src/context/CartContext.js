import { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto

const CartContext = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    const addProduct = (producto, cantidad) => {

        const productoID = producto.id
        
        if (isInCart(productoID)) {
            const productoCarrito = carrito.find(producto => producto.id === productoID)
            productoCarrito.cantidad = productoCarrito.cantidad + cantidad

            const indiceProductoCarrito = carrito.findIndex(producto => producto.id === productoID)

            const nuevoCarrito = [...carrito]
            nuevoCarrito.splice(indiceProductoCarrito, 1)

            setCarrito([...nuevoCarrito, productoCarrito])
        } else {
            setCarrito([...carrito, producto])
        }
    }

    const removeProduct = (id) => {
        const indiceProductoCarrito = carrito.findIndex(producto => producto.id === id)
        const nuevoCarrito = [...carrito]
        nuevoCarrito.splice(indiceProductoCarrito, 1)
        setCarrito([...nuevoCarrito])
    }

    const clear = () => {
        setCarrito([])
    }

    const isInCart = (id) => {
        return carrito.find(producto => producto.id === id)
    }

    const contexto = {
        setCarrito,
        carrito,
        addProduct,
        removeProduct,
        clear,
        isInCart
    }

    return (
        <Provider value={contexto}>
            {children}
        </Provider>
    )
}

export default CartContext