import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import logoEye from "../assets/logo/eye.svg"

import Axios from 'axios';
import './style.scss';

export default function serieListe() {
  const user_id  = useParams().userId;
  
  

  const allUserSeriesUrl = `http://localhost:5000/api/collection_user/series/${user_id}`;
  
const [allSeries, setAllSeries] = useState([])
// récupérer la liste des tomes
useEffect(() => {
  // Effectuer une requête GET
  Axios.get(allUserSeriesUrl)
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
        <h1>Ma collection</h1>
        {allSeries.map((serie, key) => {
          return (
            <div key={serie.id}>
              <Link  to={`/collection_user/tome_serie/${user_id}/${serie.id}`} >
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



