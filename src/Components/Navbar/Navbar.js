import React, {useState} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import "./Navbar.css";
import{ Link } from "react-router-dom";
import logo from "../../assets/Anderson-Logo-Simple.png";

function MyNavbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
      <Navbar style={{backgroundColor: '#e0dee0'}} id="my-nav" light expand="md">
        <img src={logo} alt="arr logo"/>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Home </Link>
            </NavItem>
            <NavItem>
              <Link to="/services">Services </Link>
            </NavItem>
            <NavItem>
              <Link to="/reviews">Reviews </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact Us</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    </>
  );
}

export default MyNavbar;
