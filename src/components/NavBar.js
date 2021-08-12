import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';



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
                        <Nav.Link href="#action2">Link 1</Nav.Link>
                        <Nav.Link href="#action2">Link 2</Nav.Link>
                        <Nav.Link href="#action2">Link 3</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
    )
}