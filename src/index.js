import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import { ThornsRoses } from "./components/thorns-roses"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThornsRoses />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

