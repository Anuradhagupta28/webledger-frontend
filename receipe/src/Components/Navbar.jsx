import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
// import { StateContext } from '../Contex/stateContex';
import { useDispatch } from "react-redux";
import { setDataSave } from "../Redux/receipeAction";

const Navbar = () => {
  // const {isLoggedIn,login,logout}=useContext(AuthContext);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch(); // Initialize the dispatch function

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetch(`http://localhost:8080/api/search/recipes?query=${inputValue}`)
        .then((response) => response.json())
        .then((data) => {
          // Dispatch the setDataSave action to update Redux state
          console.log(data);
          console.log("data2", data.data);
          dispatch(setDataSave(data.data));
        })
        .catch((error) => console.error("Error fetching data:", error));
      // console.log("setDataSave",setDataSave)
      setInputValue("");
      navigate("/receipe");
    }
  };

  const handleFav = () => {
    navigate("/favourite");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img
          alt="Example Image"
          width="200"
          height="80"
          className="navbar-brand"
          src="https://www.linkpicture.com/q/cadbury-removebg-preview.png"
        />

        <div className="navbar-container2">
          <ul className="navbar-links">
            <input
              className="input"
              type="text"
              value={inputValue}
              placeholder="Enter Food.."
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />

            <li>
              <Link to="/receipe">Receipe</Link>
            </li>

            <li>
              <Link to="/">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <button data-quantity="0" class="btn-cart" onClick={handleFav}>
            <svg
              class="icon-cart"
              viewBox="0 0 24.38 30.52"
              height="30.52"
              width="24.38"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>icon-cart</title>
              <path
                transform="translate(-3.62 -0.85)"
                d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
              ></path>
            </svg>
            <span class="quantity"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
