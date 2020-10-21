import React from "react";
import "./Header.css";
import { Jumbotron, Container } from 'reactstrap';

function Header({title, body}) {
  return (
    <>
      <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">{title}</h1>
          <p className="lead">{body}</p>
        </Container>
      </Jumbotron>
    </div>
    </>
  );
}

export default Header;