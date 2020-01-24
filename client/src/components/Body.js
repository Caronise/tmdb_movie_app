import React from 'react';

export default function Body() {

  return (
    <React.Fragment>
    <div id="movie-container">
      <div id="picture-area">IMAGE GOES HERE</div>
      <div id="info-area">
        <span>Title</span>
        <br/>
        <span>Tagline</span>
        <br/>
        <span>Description</span>
        <br/>
        <span>Categories</span>
        <br/>
        <span>Producers</span>
        <br/>
        <span>Release Info</span>
      </div>
    </div>

    </React.Fragment>

  );
};