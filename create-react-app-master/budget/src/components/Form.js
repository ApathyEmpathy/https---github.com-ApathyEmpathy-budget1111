import axios from 'axios';
import React, { useState, useEffect } from "react";

function Form() {
  const [name1,setName]=useState("");
  const [cost1,setCost]=useState("");
  const [type1,setType]=useState("");

  const handlename = (event) => {
    const name = event.target.value;
    setName(name);
  };

  
  const handlecost = (event) => {
    const cost = event.target.value;
    setCost(cost);
  };

  const handletype = (event) => {
    const type = event.target.value;
    setType(type);
  };

  const submitUser = async (e) => {
    e.preventDefault();
    const userdata = {
      name: name1,
      cost: cost1,
      type: type1,
    };
    await axios.post("http://localhost:8080/exp",userdata)
      .then((result) => {
    
        console.log(result.data);
        
      });
  };


  return (

            <form onSubmit={submitUser}>
              <div>
                <label>Name </label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => handlename(e)}
                />
              </div>

              <div>
                <label>cost</label>
                <input
                  type="text"
                  name="cost"
                  onChange={(e) => handlecost(e)}
                />
              </div>

              <div>
                <label>type</label>
                <input
                  type="text"
                  name="type"
                  onChange={(e) => handletype(e)}
                />
              </div>

              <div>
                <button type="submit">
                  Submit
                </button>
              </div>
            </form>
          
    
  );
}
export default Form;