import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Sliderr from "./components/slider/Slider.js";

import "./App.css";
import Loading from "./components/loading/Loading.js";
import Nav from "./components/navbar/Nav.js";

function App() {
  // const [response, setResponse] = useState("");
  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  }, []);
  return (
    <div className="App">
      {/* <Nav /> */}
      {/* <Sliderr /> */}
      <h1 style={{color:'white'}}>Something</h1>
    </div>
  );
}

export default App;
