import React from 'react';
import ContentAvtalen from './Components/ContentAvtalen'
import Search from './Components/Search';
import './App.css';
import './index.css'


const App = () => {

  return(
   <div className="App">
       <h1>Treaty on the Prohibition of Nuclear Weapons</h1>
       <img src="./img/cranes.png" alt="paper cranes"></img>
       
       <Search />
       <ContentAvtalen />
  </div>
    )
}

export default App;
