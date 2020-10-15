import React from "react";
import "./ReviewContainer.css";
import ReviewCard from "../ReviewCard/ReviewCard";
import reviews from "../../reviews.json";
import {CardColumns} from "reactstrap";

function ReviewContainer() {
  return (
    <>
      <div id="review-cards">
      <CardColumns>
        {reviews.map((review) => (
          <ReviewCard
            name={review.name}
            location={review.location}
            job_description={review.job_description}
            work_quality={review.work_quality}
            eric={review.eric}
          />
        ))}
        </CardColumns>
      </div>
    </>
  );
}

export default ReviewContainer;
