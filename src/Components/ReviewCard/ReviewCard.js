import React from "react";
import "./ReviewCard.css";
import {
  Card,
  CardTitle,
  CardText
} from "reactstrap";

function ReviewCard({ name, location, job_description, work_quality, eric }) {
  return (
    <>
    <div className="review-card">
        <Card body outline color="secondary">
          <CardTitle>{name}, {location}</CardTitle>
          <CardText>
           <b>What project did Anderson Renovations and Repairs do for you? </b>
           <br/>
           {job_description}
           <br/>
           <br/>
           <b>How was the quality of the work done?</b>
           <br/>
           {work_quality}
           <br />
           <br/>
           <b>What was your experience working with Eric like?</b>
           <br />
           {eric}
          </CardText>
        </Card>
    </div>
    </>
  );
}

export default ReviewCard;
