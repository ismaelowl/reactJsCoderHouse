import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Cart from "./components/cart/Cart";
import CartContext from "./context/CartContext";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";
import ItemListContainer from './components/itemList/ItemListContainer';
import NavBar from './components/layout/nav/NavBar';
import Footer from "./components/layout/footer/Footer";
import FormularioContainer from './components/form/FormularioContainer';
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <ScrollToTop/>
        <CartContext>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/category/:id" component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path="/cart" component={Cart} />
            <Route path="/payment" component={FormularioContainer} />
          </Switch>
          <Footer/>
        </CartContext>
      </ChakraProvider>
    </BrowserRouter>

  );
}

export default App;
