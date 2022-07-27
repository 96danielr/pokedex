import { HashRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserInput from "./components/UserInput";
import PokeLibrary from "./components/PokeLibrary";
import PokeDetail from "./components/PokeDetail";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/Pokemon" element={<PokeLibrary />}></Route>
            <Route path="/Pokemon/:id" element={<PokeDetail />}></Route>
          </Route>

          <Route path="/" element={<UserInput />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
