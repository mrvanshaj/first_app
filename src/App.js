import Navbar from "./Navbar"
import Home from "./Home.js"
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <Routes>
            <Route exact path="/Home"> */}
        <Home />
        {/* </Route>
            <Route path="/Create"> */}
        {/* <Create /> */}
        {/* </Route>
          </Routes> */}
        {/* <Home /> */}
        {/* <h1>My Classic Website</h1> */}
      </div>
    </div>
    // </BrowserRouter>
  );
}

export default App;
