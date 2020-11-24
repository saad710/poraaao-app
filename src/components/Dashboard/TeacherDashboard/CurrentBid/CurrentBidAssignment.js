import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@material-ui/icons';
import React, { useState } from 'react';
import { fakeData } from '../../../../fakeData/fakeData';
import AssignmentCard from '../../../Home/AssignmentCard/AssignmentCard';
import "./CurrentBidAssignment.css";

const CurrentBidAssignment = () => {
    const [assignments, setAssignments] = useState(fakeData);
    console.log(fakeData);
  return (
<div className="current_bid_assignment">
    <div style={{ paddingTop: 30, paddingBottom: 30 }} className="container">
      <div className="row sectionHeader">
        <div className="ml-auto brand-text">
          <Link className="brand-link brand-text" to="/">
            See More <FontAwesomeIcon icon={faAngleRight} />
          </Link>{" "}
        </div>
      </div>
      <div className="row">
        {assignments.map((asgnmnt) => (
          <AssignmentCard
            key={asgnmnt.id}
            assignment={asgnmnt}
          ></AssignmentCard>
        ))}
      </div>
    </div>
</div>
  );
};

export default CurrentBidAssignment;