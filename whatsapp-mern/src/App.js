
import './App.css';
import Sidebbar from './Sidebbar';
import Chat from './Chat';
import React from 'react';
function App() {
  return (
    <div className="app">
       <div className='app__body'>
          <Sidebbar/>
          <Chat/>
    </div>
    </div>
  );
}

export default App;
