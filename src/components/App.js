import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plants) => setPlants(plants));
  }, []);
  // console.log(plants); nice got the plants data set to plants array

  ///make a render function to be passed down as a prop to plant page
  ///then plant form adding the newPlantObj to the existing OG plants array
  function renderPlant(newPlantObj) {
    setPlants([...plants, newPlantObj ]);
  }
  
  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} renderPlant = {renderPlant} />
    </div>
  );
}

export default App;
