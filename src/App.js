import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer nombre="Ismael" apellido="Peralta"/>
    </>
  );
}

export default App;
