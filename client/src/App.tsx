import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes";
import './App.css';
import TopBar from "./components/TopBar";

function App() {
  return (
      <div>
          <TopBar/>
          <Router>
              <Routes />
          </Router>
      </div>

  );
}

export default App;
