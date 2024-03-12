import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/home1';

import App from "./App";
import Story from './components/story';
import Food from './components/food.js';
import History from './components/History';
import Thanjavur from './img/thanvajur.jpeg';
import Madurai from './img/meenasi_temple.jpg'
import Adikumbeswarar from './img/Adi_Kumbeswarar_Temple.jpg'
import SriRanganathaswamy from './img/Sri_Ranganathaswamy.jpg'
import SriRajagopala from './img/Sri_Rajagopala.jpg';
import Kanchi_Kailasanathar from './img/Kanchi_Kailasanathar.jpg';
import Srivilliputhur_Andal from './img/Srivilliputhur_Andal.jpg';
import Kumari_Amman from './img/Kumari_Amman.jpg';
import { HashLink as Link } from 'react-router-hash-link';

import ExplorePage from './components/ExplorePage';
import Dance from './components/dance';
import Games from './components/Games.js';
import TN from './components/TN';
import KL from './components/KL';
import KN from './components/KN';
import AP from './components/AP';
import Near from './components/Home';
import Quiz from './components/Quiz';
import Bot from './components/Bot';


import {

  BrowserRouter,
  
  Routes,
  
  Route, 

  Switch

  
  } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  
   <Route path="/story" element={<History/>} />
   <Route path="/" element={<Home/>} />
   <Route path="/video" element={<App/>} />
   <Route path="/temples" element={<Story/>} />
   
   <Route path="/food" element={<Food/>} />
   
   <Route path="/dance" element={<Dance/>} />
   <Route path="/games" element={<Games/>} />
   <Route path="/tamilnadu_wedding" element={<TN/>} />
   <Route path="/kerala_wedding" element={<KL/>} />
   <Route path="/karnataka_wedding" element={<KN/>} />
   <Route path="/andhra_wedding" element={<AP/>} />
   <Route path="/nearby" element={<Near/>} />
   <Route path="/quiz" element={<Quiz/>} />
   <Route path="/bot" element={<Bot/>} />
   <Route path="/explore/:index" element={<ExplorePage/>} />
  
  
 </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
