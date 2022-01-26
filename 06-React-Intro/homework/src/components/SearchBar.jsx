import React from 'react';

export default function SearchBar(onSearch) {
  // acá va tu código
  return (<div>
  <input type="search" placeholder='escribir la ciudad que buscas'/>
  <button onClick ={() => onSearch('una ciudad')}>Agregar</button>
  </div>)
};