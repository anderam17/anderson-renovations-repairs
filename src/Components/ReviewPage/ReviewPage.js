import React from "react";
import Header from "../Header/Header";
import ReviewContainer from "../ReviewContainer/ReviewContainer";

function ReviewPage() {
  return (
    <>
        <Header title="Customer Reviews" body="We think Anderson Renovations and Repairs is the right choice for you, but don't just take our word for it. Below are reviews written by past customers where they comment on different aspects of their experience with us."/>
        <ReviewContainer />
    </>
  );
}

export default ReviewPage;