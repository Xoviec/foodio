import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {Navbar} from './components/navbar';
import {Hero} from './components/hero';

import reportWebVitals from './reportWebVitals';
import { Socialproof } from './components/socialproof';
import { Tutorial } from './components/tutorial';
import { Dishes } from './components/dishes';
import { PriceList } from './components/price-list';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Hero></Hero>
    <Socialproof></Socialproof>
    <Tutorial></Tutorial>
    <Dishes></Dishes>
    <PriceList></PriceList>
    {/* <App /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
