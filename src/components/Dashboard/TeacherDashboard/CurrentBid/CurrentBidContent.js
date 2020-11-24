import React from 'react';
import PieRechartSection from '../TeacherContent/PieRechartSection';
import CurrentBidAssignment from './CurrentBidAssignment';
import "./CurrentBidContent.css";

const CurrentBidContent = () => {
    return (
        <div className="Current_bid_assignment_content">
            <PieRechartSection/>
            <CurrentBidAssignment/>
        </div>
    );
};

export default CurrentBidContent;