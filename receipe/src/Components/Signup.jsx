import { useState } from "react";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Redux/Action";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signData = useSelector((state) => state.sign);
  // console.log("sig",signData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(inputValues));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (signData.message == "Registration successful") {
      alert("Registration successful");
      navigate("/login");
    }
    if (signData.message == "User already exists") {
      alert("User already exists");
    }
    console.log("signup", signData);
  };
  return (
    <div class="maindiv">
      <form action="" class="form_main" onSubmit={handleFormSubmit}>
        <p class="heading">Signup</p>
        <p className="small">Create a new account ,it's quick & easy</p>

        <div class="inputContainer">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            class="inputIcon"
          >
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="1.5"
              stroke="#141B34"
              d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"
            ></path>
            <path
              stroke-linejoin="round"
              stroke-width="1.5"
              stroke="#141B34"
              d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
            ></path>
          </svg>

          <input
            type="text"
            class="inputField"
            id="username"
            placeholder="Full Name"
            value={inputValues.name}
            name="name"
            required
            onChange={handleInputChange}
          />
        </div>
        <div class="inputContainer">
          <svg
            class="inputIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="#2e2e2e"
            viewBox="0 0 16 16"
          >
            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
          </svg>
          <input
            type="email"
            class="inputField"
            id="Email"
            placeholder="Email"
            value={inputValues.email}
            name="email"
            required
            onChange={handleInputChange}
          />
        </div>

        <div class="inputContainer">
          <svg
            class="inputIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#2e2e2e"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
          </svg>
          <input
            type="password"
            class="inputField"
            id="password"
            placeholder="Password"
            value={inputValues.password}
            name="password"
            required
            onChange={handleInputChange}
          />
        </div>

        <button id="button" onClick={handleSubmit}>
          Submit
        </button>
        <a class="forgotLink" href="/login">
          Already have an account?
        </a>
      </form>
    </div>
  );
}
export default Signup;
