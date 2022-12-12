import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './Header.css';

function Header() {
    const openButton=()=>{
        
    }
  return (
    <>
      <Navbar bg="light" expand="lg" varient = "light">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          
          {/* <Navbar.Collapse id="basic-navbar-nav" ></Navbar.Collapse> */}
          <div className="Links">
            <Nav className="me-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/vehicles">Vehicles</Nav.Link>
              <Nav.Link href="/customise">Customise</Nav.Link>
              <Nav.Link href="/repair">Repair</Nav.Link>
              <Nav.Link href="/articles">Articles</Nav.Link>
              <Nav.Link href="/contact">Contacts</Nav.Link>
              <Nav.Link href="/logout">Logout</Nav.Link>
            </Nav>
            </div>
            <div className="btn" onClick={openButton}>
                <span className="span"></span><br/>
                <span className="span"></span><br/>
                <span className="span"></span><br/>
          </div>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
