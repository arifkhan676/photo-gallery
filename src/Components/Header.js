import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-dark mb-3">
                    <Container fluid>
                        <Navbar.Brand style={{ color: 'white' }} href="#">Photo Gallery</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton  >
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Gallery
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body  >
                                <Nav className="justify-content-end flex-grow-1 pe-3" >
                                    <Nav.Link style={{ color: 'green' }} href="#action1">Home</Nav.Link>
                                    <Nav.Link style={{ color: 'green' }} href="#action2">Link</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Header;