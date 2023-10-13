import "./Favourite.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
function Favourite() {
  const [detailsdata, setdata] = useState([]);
  const data = useSelector((state) => state.favourite);
  useEffect(() => {
    setdata(data);
  }, []);
  console.log("detailsdata", detailsdata);

  return (
    <div className="product-list">
      {detailsdata==[] ? (
        <p>There is no receipe in favourites</p>
      ) : (
        detailsdata.map((el)=>{
          return(
        <div className="product-card" key={el.id}>
        <img src={el.image} alt={el.title} />
        <h2>{el.title}</h2>

        <h1>Ingrediant</h1>
        <p>{el.dishTypes} </p>
      </div>
          )
        })
      )}

      
    </div>
  );
}

export default Favourite;
