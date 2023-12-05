import React from "react";
import "./index.css";
import Home from "./rotas/Home";
import Contato from "./rotas/Contato";
import Sobre from "./rotas/Sobre";
import Projeto from "./rotas/Projeto";

import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projeto" element={<Projeto />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  );
}

export default App;
