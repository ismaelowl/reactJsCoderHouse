import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer nombre="Ismael" apellido="Peralta"/>
      <ItemCount stock="10" initial="3"/>
    </>
  );
}

export default App;
