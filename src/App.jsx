import './App.css'
import Home from "./pages/Home/Home.tsx";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Event from "./pages/Event/Event.tsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<Event />} />
      </Routes>
    </Layout>
  );
}

export default App
