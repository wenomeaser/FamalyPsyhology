import React from 'react';
import './App.css';

import MainBlock from './components/MainBlock/MainBlock';
import Header from './components/Header/Header';



const App = () => {
  return (
    <div className='app-wrapper'>
    <Header/>
    <MainBlock/>
    </div>
  );
}


export default App;
