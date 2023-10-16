import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';


import './style.scss';

const mapStateToProps = (state) => ({
    user: state.user
  });

const Home = ({user, dispatch}) => {
    // on simule le log d'un utilisateur et on atribut son id fictif à la propriété user du state
    // useEffect(() => {
    //     dispatch({ type: 'UPDATE', value: 10 })
    // },[])

    return (
    <div className="serieListe">
        <h1>Home</h1>
        <p>{user}</p>
        <button  className='btnExemple' onClick={() => dispatch({ type: 'UPDATE', value: 1 })} >dispatch 1</button>
        <button  className='btnExemple' onClick={() => dispatch({ type: 'UPDATE', value: 2 })} >dispatch 2</button>
        <button  className='btnExemple' onClick={() => dispatch({ type: 'UPDATE', value: 3 })} >dispatch 3</button>
    </div>
  );
}
export default connect(mapStateToProps)(Home);



