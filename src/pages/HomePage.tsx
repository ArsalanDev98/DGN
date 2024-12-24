import React, { Suspense } from "react";
import Dgn from "../components/Dgn/Dgn";
import CheckeredLine from "../components/CheckeredLine/CheckeredLine";
import AboutUs from "../components/AboutUs/AboutUs";
import Faq from "../components/Faq/Faq";
import Community from "../components/Community/Community";

const Team = React.lazy(() => import("../components/Team/Team"));

const HomePage: React.FC = () => {
  return (
    <>
      <Dgn />
      <CheckeredLine />
      <AboutUs />
      <Faq />
      <Suspense fallback={<div>Loading...</div>}>
        <Team />
        <Community />
      </Suspense>
    </>
  );
};

export default HomePage;
