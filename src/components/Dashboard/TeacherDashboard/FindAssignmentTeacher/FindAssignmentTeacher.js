import React from 'react';
import HighValueAssignment from '../../../Home/HighValueAssignment/HighValueAssignment';
import LongTimeAssignment from '../../../Home/LongTimeAssignment/LongTimeAssignment';
import LowValueAssignment from '../../../Home/LowValueAssignment/LowValueAssignment';
import ShortTimeAssignment from '../../../Home/ShortTimeAssignment/ShortTimeAssignment';
import Footer from '../../../Shared/Footer/Footer';
import TeacherNavbar from '../TeacherNavbar/TeacherNavbar';
import TeacherSidebar from '../TeacherSidebar/TeacherSidebar';
import MidAssignmentBid from './MidAssignmentBid';
import RecommendedAssignment from './RecommendedAssignment';
import SearchAssignment from './SearchAssignment';
import "./FindAssignmentTeacher.css";
import Copyright from '../../../Home/Copyright/Copyright';

const FindAssignmentTeacher = () => {
    return (
        <div className="find-assignment-teacher">
            <TeacherNavbar/>
                <div style={{ display: "flex", alignItems: "space-around" }}>
                <TeacherSidebar/>
                    <div className="find-assignment-content">
                        <SearchAssignment/>
                        <RecommendedAssignment/>
                        <HighValueAssignment/>
                        <MidAssignmentBid/>
                        <LowValueAssignment/>
                        <LongTimeAssignment/>
                        <ShortTimeAssignment/>
                    </div>
                </div>
            <div style={{ backgroundColor: "#212121" }}>
            <Footer></Footer>
            </div>
            <div style={{ backgroundColor: "#000000" }}>
            <Copyright/>
            </div>
        </div>
         
    );
};

export default FindAssignmentTeacher;