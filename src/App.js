import React from 'react';
import logo from './logo.svg';
import './App.css';
import candData from './Data/candInfo'
import Cand from './Components/Cand'
import Navbar from './Components/Navbar'

function App() {
  const candComponents = candData.map(cand => 
  <Cand name ={cand.name} age = {cand.age} party = {cand.party} img = {cand.img}
    />) 
  return (
    <div>
      <Navbar />
      {candComponents}
    </div>
  );
}

export default App;
