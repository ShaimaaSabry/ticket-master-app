import './App.css'
import Home from "./pages/Home/Home.tsx";
import {Route, Routes} from "react-router-dom";
import Event from "./pages/Event/Event.js";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<Event />} />
    </Routes>
  )
}

export default App
