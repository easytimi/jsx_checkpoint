//import logo from './logo.svg';
import React from 'react';
import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Address from './component/profile/Address' ;

function App() {
  return (
    <div className="App">
      <div  className='container'>
        <ProfilePhoto  ></ProfilePhoto>
      </div>
      <div  className='mains'>
         <FullName></FullName>
         <Address></Address>
      </div>
    </div>
  );
}

export default App;
