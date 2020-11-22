import React from 'react';
import TeacherNavbar from '../TeacherNavbar/TeacherNavbar';
import TeacherSidebar from '../TeacherSidebar/TeacherSidebar';
import "./CurrentBid.css";
import CurrentBidContent from './CurrentBidContent';

const CurrentBid = () => {
    return (
        <div>
            <TeacherNavbar/>
            <div className="current_bid_content" style={{display:"flex"}}>
             <TeacherSidebar></TeacherSidebar>
             <CurrentBidContent></CurrentBidContent> 
            </div>
        </div>
    );
};

export default CurrentBid;