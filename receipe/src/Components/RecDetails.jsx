import React from "react";
import "./RecDetails.css";
import { useSelector } from "react-redux";


export const RecDetails = () => {
 
  const detailsdata=useSelector((state)=>state.details)

  return (
   <div className="main">
    <div className="card">
<div className="header">
  <img src={detailsdata.image}/>
</div>
<div className="info">
  <p className="title">{detailsdata.title}</p>
  <h1>Ingrediant</h1>
  <p>{detailsdata.dishTypes} </p>
  <h1>Instruction</h1>
  <p>{detailsdata.instructions} </p>
 
</div>
<div className="footer">
  <p className="tag">#HTML #CSS </p>
  <button type="button" className="action">Add to Favourite Receipe</button>
</div>
</div>
   </div>
  );
};
