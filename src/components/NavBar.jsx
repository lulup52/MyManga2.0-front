// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  user: state.user,
});

const NavBar = ({user, dispatch}) => {
  return (
    <nav>
      <ul>
        <p>user : {user}</p>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/serie">series</Link>
        </li>
        <li>
          <Link to={`/collection_user/serie/${user}`}>ma bibliotheque</Link>
        </li>
       
      </ul>
    </nav>
  );
}

export default connect(mapStateToProps)(NavBar);
