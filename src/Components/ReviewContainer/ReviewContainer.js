import React from "react";
import "./ReviewContainer.css";
import ReviewCard from "../ReviewCard/ReviewCard";
import reviews from "../../reviews.json";


function ReviewContainer() {
  return (
    <>
      <div className="columns">
        {reviews.map((review) => (
          <ReviewCard
            name={review.name}
            location={review.location}
            job_description={review.job_description}
            work_quality={review.work_quality}
            eric={review.eric}
          />
        ))}
      </div>
    </>
  );
}

export default ReviewContainer;

