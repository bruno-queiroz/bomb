import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Bomb from "./pages/Bomb";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bomb" element={<Bomb />} />
      </Routes>
    </>
  );
};

export default App;
