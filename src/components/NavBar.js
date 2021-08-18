import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';
import CartWidget from './CartWidget';

export default function NavBar() {

    return (
            <Navbar expand="lg" className="bg-custom">
                <div className="container">
                <Navbar.Brand>React Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Categorias</Nav.Link>
                        <Nav.Link href="#action3">Ofertas</Nav.Link>
                        <Nav.Link href="#action4">Ingresar</Nav.Link>
                        <Nav.Link id="cart"><CartWidget/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
    )
}