import React from 'react';
import Newsletter from '../components/Newsletter/Newsletter';
import Community from '../components/Community/Community';
import Incentive from '../components/Incentive/Incentive';


const IncentivePage: React.FC = () => {
  return (
    <>
      <Incentive />
      <Community />
      <Newsletter />
    </>
  );
};

export default IncentivePage;
