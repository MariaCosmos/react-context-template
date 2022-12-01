import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import { GlobalContext } from "../context/GlobalContext"

function Router() {

  const context = useContext(GlobalContext)
  const {pokelist, addToPokedex, pokedex, removeFromPokedex} = context

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              pokelist={pokelist}
              addToPokedex={addToPokedex}
              pokedex={pokedex}
            />
          }
        />
        <Route
          path="/pokedex"
          element={
            <PokedexPage
              pokedex={pokedex}
              removeFromPokedex={removeFromPokedex}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
