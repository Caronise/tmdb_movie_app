import React from 'react';

export default function Header() {

  return (
    <React.Fragment>
      <div id="search-container">
        <div id="logo-area">
            <img src={require("../images/PrimaryLogo_Green.png")} alt="The Movide DB logo" height="80px" width="100px"></img>
        </div>
        <div id="search-area">
            <input type="textarea"></input>
        </div>
      </div>

    </React.Fragment>

  );
}

