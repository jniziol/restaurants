import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './Page';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Page />
  </BrowserRouter>, document.getElementById('root'));

