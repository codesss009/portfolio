import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import Navibar from './components/navbar';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import About from './components/about';
import './components/assets/images/binaryback.jpeg'
import './components/assets/images/bootlogo.jpeg';
import Skills from './components/skills';
import Footer from './components/footer';
import './SSS.JPG'


  

ReactDOM.render(
  <div><Navibar/>
  <Header/>
  <About/>
  <Skills/>
  <Footer/></div>,
 document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
