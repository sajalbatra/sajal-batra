// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import WebDevDomainPage from './Components/Domain/domainpages/WebDevDomainPage';
// import UIUXDomainPage from './Components/Domain/domainpages/UIUXDomainPage';
// import IOtDomainPage from './Components/Domain/domainpages/IOtDomainPage';
import NotFound from './Components/Domain/domainpages/Pagenotfound';

import Main from './Main'; // Import the Main component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} /> {/* Use the Root component */}
        {/* <Route path="/webdev-domain" element={<WebDevDomainPage />} />
        <Route path="/uiux-domain" element={<UIUXDomainPage />} />
        <Route path="/iot-domain" element={<IOtDomainPage/>} /> */}
        <Route path="*" element={<NotFound/>} />

      </Routes>
    </Router>
  );
}

export default App;
