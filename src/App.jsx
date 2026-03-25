import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/men" element={<Men/>}>Men</Route>
        <Route path="/women" element={<Women/>}>Women</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
