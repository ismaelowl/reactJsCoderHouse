import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Cart from "./components/cart/Cart";
import CartContext from "./context/CartContext";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/layout/nav/NavBar';
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <CartContext>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/category/:id" component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path="/cart" component={Cart} />
          </Switch>
          <Footer/>
        </CartContext>
      </ChakraProvider>
    </BrowserRouter>

  );
}

export default App;
