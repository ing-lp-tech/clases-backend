import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login, Register } from "./components";

function App() {
  return (
    <>
      {/* <h1>Bienvenidos devuelta a FRONTEND 😎😍😘</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
