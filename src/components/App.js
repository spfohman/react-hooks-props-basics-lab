import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links"
// pass this data down as props to the child component(s) that need it!
import user from "../data/user";


function App(props) {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Links />
    </div>
  );
}

export default App;
