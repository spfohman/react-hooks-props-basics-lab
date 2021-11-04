import React from "react";


function Home({city, username, color}) {
  return (
    <div id="home">
      <h1 style={ {color: color} }>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
