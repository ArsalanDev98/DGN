import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VisionPage from './pages/VisionPage';
import BlogPage from './pages/BlogPage';
import IncentivePage from './pages/IncentivePage';
import RoadmapPage from './pages/RoadmapPage';
import HowPage from './pages/HowPage';
import Layout from './Layout';
import NotFoundPage from './pages/NotFoundPage';


const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="vision" element={<VisionPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="incentive" element={<IncentivePage />} />
            <Route path="roadmap" element={<RoadmapPage />} />
            <Route path="how-to-use" element={<HowPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;