import React, {useState} from "react";

function NewPlantForm({renderPlant}) {
  const [newPlant, setNewPlant] = useState({});

  function handleAddPlant(e) {
    //this is setting the newPlant obj to adding the key name: value//
    setNewPlant({...newPlant, [e.target.name]: [e.target.value]});
  }
  // console.log(newPlant);

  function handleSubmit(e) {
    e.preventDefault();
    const newPlantObject = {
      name: newPlant.name,
      image: newPlant.image,
      price: newPlant.price
  }
  e.target.reset();
  renderPlant(newPlantObject);

fetch("http://localhost:6001/plants", {
  method: "POST",
  headers: {'Content-Type': 'application/json'}, 
  body: JSON.stringify(newPlantObject)
})
.then(res => res.json())
.then(data => console.log(data)) 
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit}>
        <input onChange = {handleAddPlant} type="text" name="name" placeholder="Plant name" />
        <input onChange = {handleAddPlant} type="text" name="image" placeholder="Image URL" />
        <input onChange = {handleAddPlant} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
