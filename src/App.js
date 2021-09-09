import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/layout/nav/NavBar';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route path="/category/:id" component={ItemListContainer} />
          <Route path="/item/:id" component={ItemDetailContainer} />
        </Switch>
      </ChakraProvider>
    </BrowserRouter>

  );
}

export default App;
