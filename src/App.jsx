import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Crew from "./pages/crew/Crew";
import Destination from "./pages/destination/Destination";
import Home from "./pages/home/Home";
import Technology from "./pages/technology/Technology";
import "./styles/style.css";
import Data from './data/data.json'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(Data)
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew data={data}/>} />
        <Route path="/destination" element={<Destination data={data}/>} />
        <Route path="/technology" element={<Technology data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
