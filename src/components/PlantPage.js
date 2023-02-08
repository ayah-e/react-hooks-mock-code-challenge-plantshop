import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, renderPlant}) {


  return (
    <main>
      <NewPlantForm renderPlant = {renderPlant} />
      <Search />
      <PlantList plants = {plants}/>
    </main>
  );
}

export default PlantPage;
