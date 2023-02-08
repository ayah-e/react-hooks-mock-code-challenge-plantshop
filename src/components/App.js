import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
const [plants, setPlants] = useState([]);
useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then(response => response.json())
  .then(plants => setPlants(plants));
},[]);
// console.log(plants); nice got the plants data set to plants array
  return (
    <div className="app">
      <Header />
      <PlantPage plants = {plants} />
    </div>
  );
}

export default App;
