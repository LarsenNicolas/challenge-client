import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/nav/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

render(
  <BrowserRouter>
    <Header />
    <ToastContainer />
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);