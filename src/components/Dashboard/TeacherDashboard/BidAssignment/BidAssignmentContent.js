import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fakeData } from '../../../../fakeData/fakeData';
import "./BidAssignmentContent.css";
import BidAssignmentCard from './BidAssignmentCard';
import { Row } from 'react-bootstrap';

const BidAssignmentContent = () => {
    const [bidAssignments, setbidAssignments] = useState(fakeData);
    console.log(fakeData);
    return (
<div className="bid_assignment_container">
    <div style={{ paddingTop: 30, paddingBottom: 30 }} className="container">
      <div className="row sectionHeader">
        <div className="ml-auto brand-text">
          <Link className="brand-link brand-text" to="/">
            See More <FontAwesomeIcon icon={faAngleRight} />
          </Link>{" "}
        </div>
      </div>
      
       <div className="row">
        {bidAssignments.map((assignment) => (
          <BidAssignmentCard
            key={assignment.id}
            assignment={assignment}
          ></BidAssignmentCard>
        ))}
        </div>
      </div>
    </div>
    );
};

export default BidAssignmentContent;