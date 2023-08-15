import Navbar from "./Navbar"
import Home from "./Home"
import Create from "./Create"
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/blogs/:id" element={<BlogDetails />} />

          </Routes>


          {/* <h1>My Classic Website</h1> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
