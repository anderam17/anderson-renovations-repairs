import React, {useState} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import "./Navbar.css";
import{ useHistory, Link } from "react-router-dom";
import logo from "../../assets/Anderson-Logo-Simple.png";

function MyNavbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // const history = useHistory();
  // const toReviewPage = () => {
  //   history.push("/reviews")
  // };

  // const toHomePage = () => {
  //   history.push("/")
  // };

  return (
    <>
      <div>
      <Navbar style={{backgroundColor: '#e0dee0'}} id="my-nav" light expand="md">
        <img src={logo} alt="arr logo"/>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              {/* <NavLink href="#" onClick={toHomePage}>Home</NavLink> */}
              <Link to="/">Home </Link>
            </NavItem>
            <NavItem>
              <NavLink href="#">Services</NavLink>
              {/* <Link to="/services">Services </Link> */}
            </NavItem>
            <NavItem>
              {/* <NavLink href="#" onClick={toReviewPage}>Reviews</NavLink> */}
              <Link to="/reviews">Reviews </Link>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact Us</NavLink>
              {/* <Link to="/contact">Contact </Link */}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    </>
  );
}

export default MyNavbar;
