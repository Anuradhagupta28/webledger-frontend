import { Route, Routes } from "react-router-dom"
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import RandomReceipe from "./Components/Random";
import AddToCart from "./Components/Addtocart";
import Receipe from "./Components/Receipe"
function AllRoute(){
return(
    <div>
        <Routes>
        <Route path='/' element={<Signup/>}/>
        < Route path='/login' element={<Login/>}/>
           <Route path="/receipe" element={<Receipe/>} /> 
           <Route path="/randomReceipe" element={<RandomReceipe/>} /> 
           <Route path="/addtocart" element={<AddToCart/>} /> 

        </Routes>
    </div>
)
}
export default AllRoute;