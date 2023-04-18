import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Bomb from "./pages/Bomb";
import GameMode from "./pages/GameMode";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-mode" element={<GameMode />} />
        <Route path="/bomb" element={<Bomb />} />
      </Routes>
    </>
  );
};

export default App;
