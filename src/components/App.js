import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
import axios from 'axios';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:3001/toys`)
    .then(res => setToys(res.data))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(newToy){
    setToys([...toys, newToy])

  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}/>
    </>
  );
}

export default App;
