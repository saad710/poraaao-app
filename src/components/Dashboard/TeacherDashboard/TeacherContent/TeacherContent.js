import React from 'react';
import BarRechartSection from './BarRechartSection';
import BidCard from './BidCard';
import PieRechartSection from './PieRechartSection';

const TeacherContent = () => {
  return (
    <div className="teacher-content">
      <BidCard/>
      <PieRechartSection/>
      <BarRechartSection/>
    </div>
  );
};

export default TeacherContent;