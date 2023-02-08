import React, {useState} from "react";

function PlantCard({name, image, price}) {
  const [soldOut, setSoldOut] = useState(true);
  function handleSoldOut() {
    setSoldOut(soldOut =>!soldOut);
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>

      {soldOut ? (
        <button className="primary" onClick = {handleSoldOut}>In Stock</button>
      ) : (
        <button onClick = {handleSoldOut}>Out of Stock</button>
      )}

    </li>
  );
}

export default PlantCard;
