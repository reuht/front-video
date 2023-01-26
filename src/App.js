import bootstrap from "bootstrap";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Movies from "./Components/Movies";
import Login from "./Components/Login";

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
};

export default App;
