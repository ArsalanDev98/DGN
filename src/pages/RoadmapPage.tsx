import React from 'react';
import Newsletter from '../components/Newsletter/Newsletter';
import Community from '../components/Community/Community';
import Roadmap from '../components/Roadmap/Roadmap';

const RoadmapPage: React.FC = () => {
  return (
    <>
      <Roadmap />
      <Community />
      <Newsletter />
    </>
  );
};

export default RoadmapPage;
