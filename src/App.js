import { ChakraProvider } from "@chakra-ui/react"
import './App.css';
import ItemCount from './components/itemCount/ItemCount';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/layout/nav/NavBar';

function App() {
  return (
    <ChakraProvider>
      <NavBar/>
      <ItemListContainer nombre="Item List Container"/>
      <ItemCount stock={10} initial={3}/>
      <ItemDetailContainer/>
    </ChakraProvider>
  );
}

export default App;
