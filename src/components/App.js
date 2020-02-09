import React,{useEffect, useRef, useState } from 'react';
import logo from '../logo.svg';
import '../App.css';

import Projects from "./projects"
import Area from "./Area"
import Header4 from "./Header4"
import Footer from "./Footer"


function App() {
  return (
    <div className="App">
      <Header4/>
      <div className="container2">      
        <Area title="About Me" bgColor="#fff">
          <div className="area-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac tincidunt ipsum, at gravida quam. Pellentesque ut rutrum massa, posuere malesuada odio. Praesent at augue sem. Duis ut efficitur lorem. Ut diam justo, dignissim vel tortor sed, venenatis pharetra dolor. Etiam sed scelerisque nisi, sit amet tincidunt justo. Phasellus hendrerit pellentesque tincidunt. Duis sit amet nisl sed massa tempor imperdiet at eget velit. Sed fringilla ac metus varius aliquam. Pellentesque et egestas mauris, elementum semper tellus. Pellentesque dictum id quam eu scelerisque. Integer semper rhoncus maximus.

          Proin varius velit vel laoreet egestas. Morbi consectetur ligula ac eros sodales, pellentesque ultricies risus bibendum. Proin sollicitudin purus sed commodo convallis. Pellentesque ac tempor magna. Suspendisse potenti. Sed pharetra metus lectus, ac tincidunt dolor gravida pulvinar. Nam vestibulum enim odio, vel consequat ante efficitur in. Aliquam erat volutpat.
          </div>
        </Area>
        <Area title="Projects" bgColor="#f6f6f6"><Projects /></Area>
        <Footer title="Contacts" bgColor="#b86363">
          <div className="footer-content">
            facebook
          </div>
        </Footer>
      </div>
      
    </div>
  );
}

export default App;

/**
 * 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
 */