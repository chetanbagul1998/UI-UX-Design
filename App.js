
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';
import Page9 from './pages/Page9';
import Page10 from './pages/Page10';
import './App.css'; 

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="container">
          <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
          <div className={`main-content ${isSidebarCollapsed ? 'collapsed' : ''}`}>
            <Routes>
              <Route path="/" element={<MainContent />}>
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
                <Route path="/page4" element={<Page4 />} />
                <Route path="/page5" element={<Page5 />} />
                <Route path="/page6" element={<Page6 />} />
                <Route path="/page7" element={<Page7 />} />
                <Route path="/page8" element={<Page8 />} />
                <Route path="/page9" element={<Page9 />} />
                <Route path="/page10" element={<Page10 />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
