import { Route, Routes } from "react-router-dom"
import Login from "../Components/Login";
import Signup from "../Components/Signup";

import Receipe from "../Components/Receipe"
import { RecDetails } from "../Components/RecDetails";
import Favourite from "../Components/Favourite";
import { PrivateRoute } from "./PrivateRoute";
function AllRoute(){
return(
    <div>
        <Routes>
        <Route path='/' element={<Signup/>}/>
        < Route path='/login' element={<Login/>}/>
           <Route path="/receipe" element={<Receipe/>} /> 
           <Route path="/recdetails" element={<PrivateRoute> <RecDetails/></PrivateRoute>} /> 
           <Route path="/favourite" element={<PrivateRoute><Favourite/></PrivateRoute>} /> 

        </Routes>
    </div>
)
}
export default AllRoute;