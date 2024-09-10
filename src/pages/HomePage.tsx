import React, { Suspense } from "react";
import BetLounge from "../components/BetLounge/BetLounge";
import AboutUs from "../components/AboutUs/AboutUs";
import Faq from "../components/Faq/Faq";

const Team = React.lazy(() => import("../components/Team/Team"));

const HomePage: React.FC = () => {
  return (
    <>
      <BetLounge />
      <AboutUs />
      <Faq />
      <Suspense fallback={<div>Loading...</div>}>
        <Team />
      </Suspense>
    </>
  );
};

export default HomePage;
