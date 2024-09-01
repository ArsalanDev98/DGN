import React from 'react';
import Newsletter from '../components/Newsletter/Newsletter';
import Community from '../components/Community/Community';
import HowToUse from '../components/HowToUse/HowToUse';


const HowPage: React.FC = () => {
  return (
    <>
      <HowToUse />
      <Community />
      <Newsletter />
    </>
  );
};

export default HowPage;
