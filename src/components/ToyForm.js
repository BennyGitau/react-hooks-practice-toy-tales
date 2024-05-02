import React, {useState} from "react";
import axios from 'axios'

function ToyForm({addNewToy}) {
  const [newToy, setNewToy] = useState({
    name: '',
    image: ''
  })
  function handleChange(e){
    setNewToy({
      ...newToy,
      [e.target.name]: e.target.value
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    const addedToy = {
      ...newToy,
      likes: 0
    }
    axios.post(`http://localhost:3001/toys`,addedToy)
    .then(res => addNewToy(res.data))
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={newToy.name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          value={newToy.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}

        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
