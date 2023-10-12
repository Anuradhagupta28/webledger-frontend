import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Provider } from 'react-redux';
import store from './Redux/Store';

import AllRoute from './Routes/AllRoute';
function App() {
  return (
    <div className="App">
   <Provider store={store}>
   <Navbar/>
    <AllRoute/>
   </Provider>
 

 
   
     
    </div>
  );
}

export default App;
