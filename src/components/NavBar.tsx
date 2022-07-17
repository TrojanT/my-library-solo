import React from "react";
import {Nav, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavBar: React.FC = () => {
    return (
        <Row>
            <div>

                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto"
                            style={{maxHeight: '100px'}}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        </Row>
    );
}

export default NavBar;