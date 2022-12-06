import React from "react";
import "./App.css";
import {useState} from "react";
import axios from "axios";
import Home from "./Home";
import Graph from "./components/Graph";
import Form from "./components/Form"


function App(){

  return (

    <div style={{ textAlign: "left" }}>
      <h1>Income and Expense</h1>
      <div className="App">


    
     
      <Graph></Graph>
      <Form></Form>




      </div>
    </div>
  );
};

export default App;