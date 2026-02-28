import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import List from "./pages/List";
import Singup from "./pages/Singup";
import Browser from "./pages/Browser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browser" element={<Browser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/MyList" element={<List />} />
        <Route path="/signup" element={<Singup />} />
      </Routes>
    </>
  );
}

export default App;
