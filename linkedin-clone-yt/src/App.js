import React from 'react';
import Header from './Header';
import './App.css';
import HeaderOption from './HeaderOption';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
     <Header/>
      <HeaderOption/>
      
      <div className="app__body">
       <Sidebar/>
       <Feed/>
      </div>
     {/*widgets*/}
    </div>
  );
}

export default App;
