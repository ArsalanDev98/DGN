import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Layout from "./Layout";
import styles from "./PageTransition.module.css";

import HomePage from "./pages/HomePage";
import VisionPage from "./pages/VisionPage";
import IncentivePage from "./pages/IncentivePage";
import RoadmapPage from "./pages/RoadmapPage";
import HowPage from "./pages/HowPage";
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <Layout>
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames={{
            enter: styles.pageTransition,
            enterActive: styles.entered,
            exit: styles.pageTransition,
            exitActive: styles.exiting,
          }}
          timeout={300}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="vision" element={<VisionPage />} />
            <Route path="incentive" element={<IncentivePage />} />
            <Route path="roadmap" element={<RoadmapPage />} />
            <Route path="how-to-use" element={<HowPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
};

export default App;
