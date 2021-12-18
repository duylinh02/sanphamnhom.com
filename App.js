
import './App.css';
import Header from './component/Header';
import Aside from './component/Aside';
import Conten from './component/Conten';
import Image from './component/Image';
import Anh from './component/Anh';
import { useState } from 'react';
import Footer from './component/Footer';
import React, { Component }  from 'react';
function App() {
  const [isShow, setisShow] = useState(false)
  return (
    <div id='app'>
      <Header />
      <Image />
      <Aside />
      <Conten />
      <div id='nut'><button onClick={() => setisShow(!isShow)}>Bấm vào đây</button></div>
      
      {
        isShow ?
          <Anh />
          : null
      }
      <Footer />
    </div>

  );
}

export default App;
