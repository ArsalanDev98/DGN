import React, { Suspense } from 'react';
import BetLounge from '../components/BetLounge/BetLounge';
import AboutUs from '../components/AboutUs/AboutUs';
import Faq from '../components/Faq/Faq';

const Team = React.lazy(() => import('../components/Team/Team'));
const Blog = React.lazy(() => import('../components/Blog/Blog'));
const Community = React.lazy(() => import('../components/Community/Community'));
const Newsletter = React.lazy(() => import('../components/Newsletter/Newsletter'));

const HomePage: React.FC = () => {
  return (
    <>
      <BetLounge />
      <AboutUs />
      <Faq />
      <Suspense fallback={<div>Loading...</div>}>
        <Team />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Blog />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Community />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Newsletter />
      </Suspense>
    </>
  );
};

export default HomePage;