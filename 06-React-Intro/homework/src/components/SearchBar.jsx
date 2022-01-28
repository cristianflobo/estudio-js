import React from "react";
import Search from "./SearchBar.module.css";

export default function SearchBar(onSearch) {
  // acá va tu código
  return (
    <div className={Search.Agregar}>
      <input type="search" placeholder="escribir la ciudad que buscas" />
      <button className={Search.Bott} onClick={() => onSearch("una ciudad")}>Agregar</button>
    </div>
  );
}
