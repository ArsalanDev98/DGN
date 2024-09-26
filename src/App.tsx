import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Layout from "./Layout";

import HomePage from "./pages/HomePage";
import VisionPage from "./pages/VisionPage";
import IncentivePage from "./pages/IncentivePage";
import RoadmapPage from "./pages/RoadmapPage";
import HowPage from "./pages/HowPage";
import NotFoundPage from "./pages/NotFoundPage";

const PreloadLinks: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const preloadRoutes = [
      "/vision",
      "/blog",
      "/incentive",
      "/roadmap",
      "/how-to-use",
    ];

    preloadRoutes.forEach((route) => {
      if (location.pathname !== route) {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.href = route;
        document.head.appendChild(link);
      }
    });
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <PreloadLinks />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="vision" element={<VisionPage />} />
          <Route path="incentive" element={<IncentivePage />} />
          <Route path="roadmap" element={<RoadmapPage />} />
          <Route path="how-to-use" element={<HowPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
