import Navbar from "./Navbar"
import Home from "./Home"
import Create from "./Create"
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="content">

        <Routes>
            <Route exact path="/home" element={ <Home/> }/>
            <Route exact path="/create" element={ <Create/> } />
          </Routes>


            <h1>My Classic Website</h1>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
