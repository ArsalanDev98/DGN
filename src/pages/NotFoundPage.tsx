import React from 'react';
import NotFound from '../components/NotFound/NotFound';
import Newsletter from '../components/Newsletter/Newsletter';
import Community from '../components/Community/Community';


const NotFoundPage: React.FC = () => {
  return (
    <>
      <NotFound />
      <Community />
      <Newsletter />
    </>
  );
};

export default NotFoundPage;
