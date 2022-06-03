import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header"
import Checkout from "./Components/Checkout/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<><Home/></>}/>
          <Route exact path="/checkout" element={<><Checkout/></>}/>
        </Routes>
     </Router>
      
    </div>
  );
}

export default App;
