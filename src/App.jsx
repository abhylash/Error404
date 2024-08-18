import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error404 from './404Error';

function App() {
  return (
    <Router>
      <Routes>
        {/* Other routes can go here */}
        <Route path="*" element={<Error404 />} /> {/* Catch-all route for undefined paths */}
      </Routes>
    </Router>
  );
}

export default App;
