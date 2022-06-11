import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hotel from "./hotel/Hotel";
import List from "./list/List";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
