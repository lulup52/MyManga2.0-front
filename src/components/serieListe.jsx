import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoEye from "../assets/logo/eye.svg"

import Axios from 'axios';
import './style.scss';

export default function serieListe() {
const allSeriesUrl = 'http://localhost:5000/api/series';

const [allSeries, setAllSeries] = useState([])


// récupérer la liste des tomes
useEffect(() => {
  // Effectuer une requête GET
  Axios.get(allSeriesUrl)
  .then(function (response) {
    // Gérer la réponse réussie ici
    setAllSeries(response.data)
    console.log(response.data)

  })
  .catch(function (error) {
    // Gérer les erreurs ici
    console.error(error);
  });
},[])

    return (
    <div className="serieListe">
        <h1>Toutes les séries</h1>
        {allSeries.map((serie, key) => {
          return (
            <div key={serie.id}>
              <Link  to={`/serie/${serie.id}`} >
                <div>{serie.title}</div>
                <img src={logoEye} />
                <img src={serie.src_cover} />
                <div>{serie.author}</div>
                <div>{serie.sumary}</div>
              </Link>
            </div>
          )
        })}
    </div>
  );
}



