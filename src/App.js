import React from 'react';
import logo from './logo.svg';
import './App.css';
import candData from './candInfo'
import Cand from './Cand'

function App() {
  const candComponents = candData.map(cand => <Cand name ={cand.name} age = {cand.age} party = {cand.party}
    />) 
  return (
    <div>
      {candComponents}
    </div>
  );
}

export default App;
