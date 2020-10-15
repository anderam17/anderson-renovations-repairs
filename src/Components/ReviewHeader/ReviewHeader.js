import React from "react";
import "./ReviewHeader.css";
import { Jumbotron, Container } from 'reactstrap';

function ReviewHeader() {
  return (
    <>
      <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Customer Reviews</h1>
          <p className="lead">We think Anderson Renovations and Repairs is the right choice for you, but don't just take our word for it. Below are reviews written by past customers where they comment on different aspects of their experience with us.</p>
        </Container>
      </Jumbotron>
    </div>
    </>
  );
}

export default ReviewHeader;