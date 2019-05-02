import React from 'react';
import './App.css';
import mtglogo from './img/logo/mtglogo.png'

import Input from './Input'
import SearchCard from './SearchCard'

function App() {
  console.log(mtglogo)
  return (
    <div className="App App-header">
     <div>
        <img src={mtglogo}/>
      </div>
      <header>
        <a>Magic Tutor</a> 
        <Input />
      </header>
      <SearchCard/>
    </div>
  );
}

export default App;
