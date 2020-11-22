import { Button } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import "./AssignmentCard.css";
import { Link } from "react-router-dom";

const AssignmentCard = (props) => {
  const { name, description, image, time, rating, price } = props.assignment;

  return (
    <div className="col-md-4 new-card">
      <Card className="shadow bg-white rounded">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <div style={{ padding: 10 }} className="row">
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </div>
          <div>
            <Card.Text style={{ marginTop: 35 }}>
              <div className="card-footer-titles">
                <span className="card-subtitle">Rating:</span> {rating}
              </div>
              <div className="card-footer-titles">
                <span className="card-subtitle">Time:</span> {time} Hours
              </div>
              <div
                className=" row card-footer-titles"
                style={{ marginLeft: 4, marginRight: 4 }}
              >
                <div className="card-subtitle"> {price} $</div>
                <div className=" ml-auto">
                <Link to="/bidDetails" style={{textDecoration: "none"}}>
                  <Button
                    variant="warning"
                    className="brand-btn"
                    style={{ color: "white", fontSize: 16 }}
                  >
                    Bid Now!
                  </Button>
                </Link>
                </div>
              </div>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AssignmentCard;
