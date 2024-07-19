import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import AllCourses from './components/AllCourses';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import './App.css'
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<AllCourses />} />
          <Route path="/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
