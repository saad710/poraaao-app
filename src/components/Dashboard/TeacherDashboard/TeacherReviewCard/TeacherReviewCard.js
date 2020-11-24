import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const TeacherReviewCard = ({ review }) => {
  const [value, setValue] = useState(4);

  return (
    <div style={{ paddingRight: 60, paddingLeft: 60 }} className="mt-3 ">
      <div
        style={{ margin: 30, padding: 20, border: "none" }}
        className="row card shadow-sm"
      >
        <div className="row d-flex ">
          <div className="flex mr-3 ml-3">
            <img style={{ borderRadius: 200 }} src={review.image} alt="" />
          </div>
          <div className="">
            <h5 style={{ fontWeight: 600 }} className="">
              {review.name}
            </h5>
            <p>
              <small>
                {" "}
                <Rating name="read-only" value={value} readOnly />
              </small>
            </p>
          </div>
        </div>
        <div className=" card-body text-center">
          <p className="card-text">{review.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherReviewCard;
