import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Button } from 'reactstrap';

function Nav({onSearch}) {
  return (
    <div><nav class="navbar navbar-light bg-light">
    <a class="navbar-brand">Henry</a>
    <form class="form-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav></div>
  );
};

export default Nav;
