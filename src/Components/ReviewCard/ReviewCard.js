import React from "react";
import "./ReviewCard.css";

function ReviewCard({ name, location, job_description, work_quality, eric }) {
  return (
    <>
      <div className="review-wrapper">
        <div className="review">
          <p className="work quote">{work_quality}</p>
          <br />
          <p className="eric quote">{eric}</p>
          <p className="attribution">
            -{name}, {location}
          </p>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;

