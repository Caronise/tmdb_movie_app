import React from "react";
import './App.css';

import Header from './components/Header';
import Body from './components/Body';

export default function App() {
  return (
    <body>

      <div className="head">
        <Header></Header>
      </div>

      <div className="body">
        <Body></Body>
      </div>


    </body>
  );
}
