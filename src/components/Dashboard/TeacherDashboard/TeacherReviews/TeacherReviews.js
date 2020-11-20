import React, { useState } from "react";
import { fakeReviews } from "../../../../fakeData/fakeReviews";
import TeacherReviewCard from "../TeacherReviewCard/TeacherReviewCard";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ProgressBar } from "react-bootstrap";
import TeacherNavbar from "../../Shared/TeacherNavbar/TeacherNavbar";
import TeacherSidebar from "../TeacherSidebar/TeacherSidebar";
import img from "../../../../resources/Ellipse 89.png";
import Footer from "../../../Shared/Footer/Footer";

const TeacherReviews = () => {
  const [reviews, setReviews] = useState(fakeReviews);
  const [value, setValue] = useState(4);

  return (
    <div id="reviews">
      <TeacherNavbar></TeacherNavbar>
      <div className="container-fluid row">
        <TeacherSidebar></TeacherSidebar>
        <div
          className="col-md-10  ml-auto shadow-sm ml-auto"
          style={{ padding: 60 }}
        >
          <h1>Ratings & Reviews</h1>
          <div className="pt-5 pb-5">
            <div className="row">
              <div style={{ paddingLeft: 50 }} className="">
                <img className="mr-auto" src={img} alt="" />
              </div>
              <div className="col-md-6">
                <h3>Jason Doe</h3>
                <Rating name="read-only" value={value} readOnly />
                <Typography component="legend">4.00 (35 Reviews)</Typography>
              </div>
            </div>
          </div>

          <div style={{ marginLeft: 100 }} className="row  align-items-center">
            <div className="col-md-2">
              <h1 style={{ fontSize: 60, fontWeight: "700" }}>4.00</h1>
              <p>23 Ratings</p>
            </div>
            <div className="col-md-10">
              <Rating name="read-only" value={5} readOnly />
              <ProgressBar
                className="bg-transparent"
                variant="warning"
                now={70}
              />
              <br />
              <Rating name="read-only" value={4} readOnly />
              <ProgressBar
                className="bg-transparent"
                variant="warning"
                now={15}
              />{" "}
              <br />
              <Rating name="read-only" value={3} readOnly />
              <ProgressBar
                className="bg-transparent"
                variant="warning"
                now={10}
              />{" "}
              <br />
              <Rating name="read-only" value={2} readOnly />
              <ProgressBar
                className="bg-transparent"
                variant="warning"
                now={3}
              />{" "}
              <br />
              <Rating name="read-only" value={1} readOnly />
              <ProgressBar
                className="bg-transparent"
                variant="warning"
                now={2}
              />{" "}
              <br />
            </div>
          </div>
          <div className="row justify-content-around">
            {reviews.map((rvw) => (
              <TeacherReviewCard key={rvw.id} review={rvw}>
                {rvw.name}
              </TeacherReviewCard>
            ))}
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#212121" }}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default TeacherReviews;
