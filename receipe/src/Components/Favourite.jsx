import "./Favourite.css"
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
function Favourite(){
   
    const [detailsdata,setdata]=useState([])
    const data=useSelector((state)=>state.favourite)
   useEffect(()=>{
    setdata(data)
   
   },[])
   console.log("detailsdata",detailsdata)
   
    
    return(
        <div className="product-list">

       
          <div className="product-card" key={detailsdata.id}>
            <img src={detailsdata.image} alt={detailsdata.title} />
            <h2>{detailsdata.title}</h2>
            

            <h1>Ingrediant</h1>
            <p>{detailsdata.dishTypes} </p>
           

           </div>
        
      </div>
    )
}

export default Favourite