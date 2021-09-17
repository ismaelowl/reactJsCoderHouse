import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Cart from "./components/Cart";
import CartContext from "./context/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/layout/nav/NavBar';

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
        </CartContext>
      </ChakraProvider>
    </BrowserRouter>

  );
}

export default App;
