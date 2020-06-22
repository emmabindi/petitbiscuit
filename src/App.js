import React from 'react';
import './App.css';
import Bio from './components/bio';
import ConditionalRender from './components/cr'
import Discography from './components/discography';

function App() {
  return (
    <div className="App">
      < Bio /> 
      < ConditionalRender />
      < Discography />
    </div>
  );
}

export default App;
