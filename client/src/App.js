import React from "react";
import './App.css';

import Header from './components/Header';
import Body from './components/Body';

export default function App() {
  return (
    <body>
      <div id="main-container">
        <Header />

        <Body />
      </div>
    </body>
  );
}
