import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Sliderr from "./components/slider/Slider.js";

import "./App.css";

function App() {
  // const [response, setResponse] = useState("");
  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();

    // const socket = socketIOClient("http://localhost:5000/images");
    // socket.on("FromAPI", (data) => {
    //   setResponse(data);
    //   console.log(response);
    // });
  }, []);
  return (
    <div className="App">
      <h1>hello bnry</h1>
      <Sliderr />
    </div>
  );
}

export default App;
