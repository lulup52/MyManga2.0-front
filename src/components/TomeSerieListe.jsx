import { API_BASE_URL} from '../../globalsVar';
import React, { useState, useEffect } from 'react';
import {useParams, Navigate } from 'react-router-dom';
 
import { Link } from 'react-router-dom';

import MultyBtn from './structure/MultyBtn'
import TomeCard from './structure/TomeCard'

import Axios from 'axios';
import './style.scss';

import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  user: state.user,
  popUpState: state.popUpState
});

const TomeSerieListe = ({usage, user, popUpState, dispatch}) => {
  
  const [modaleDisplay, setModalDisplay] = useState(false)
  const [updateAllTOmes, setUpdateAllTOmes] = useState(false)  
  const [allTomesToShow, setAllTomesToShow] = useState([])

  const refresList = () => {
    setUpdateAllTOmes(!updateAllTOmes)
  }

  let timer = ""
  const popUpToggler = (mesage) => {

    dispatch({ type: 'TOGGLE_POPUP', toggle : false, popUpMsg : ''})
    setTimeout(() => {
      dispatch({ type: 'TOGGLE_POPUP', toggle : true, popUpMsg : mesage})
    },100)
    
  }

  const defTitle = () => {
    if (usage !== undefined) {
      if (usage.includes("series")) {
        return (
          <h1>Serie</h1>
        )
      } else if (usage.includes("collection")) {
        return (
          <h1>Ma collection</h1>
        )
      }
    }
  }
  // contruction de l'adresse de la requette et rcupération des variables pour la remplire 
  let userId = user
  let SerieId = ''
  let tomeToShowUrl = ''

  if (usage.includes("collection")) {
    SerieId = useParams().serieId;
    tomeToShowUrl = API_BASE_URL + `api/collection_user/tome_serie/${userId}/${SerieId}`

  }else if (usage.includes("series")) {
    SerieId = useParams().id;
    tomeToShowUrl = API_BASE_URL + `api/mangas/serie/${SerieId}/${userId}`
  }
  
  

const toggleModal = () => {
  setModalDisplay(!modaleDisplay)
}
// récupérer la liste des tomes
useEffect(() => {
  // Effectuer une requête GET
  Axios.get(tomeToShowUrl)
  .then(function (response) {
    // Gérer la réponse réussie ici
    setAllTomesToShow(response.data)
    console.log(response.data)
  })
  .catch(function (error) {
    // Gérer les erreurs ici
    console.error(error);
  });
},[updateAllTOmes])

  const generateTomeCardList = () => {
    if (allTomesToShow.length > 0) {
      let allTomesToShowList = allTomesToShow.map((tome, key) => {
        return (
          <div className="tomeCard" key={key}>
            {usage.includes("collection") 
            ?
            <div className='optionBtnContainer'>
              <MultyBtn tome={tome} refresList={refresList} popUpToggler={popUpToggler}/>
            </div>
            :
              ""
            }
            
            <TomeCard tome={tome} refresList={refresList} popUpToggler={popUpToggler}/>
          </div>
        )
      })
      return allTomesToShowList;
    } else if (allTomesToShow.message) {
      let userId = user
      return (
        <Navigate to={`/collection_user/serie/${user}`} />
      )
    }
    
  }


    return (
    <div className="serieListe">
        <div>
          {defTitle()}
          <div className='addCOllectionBtn'>
            {usage.includes("collection") ?
              <button onClick={() => {toggleModal()}}>ajouter un tome</button>
            :
              ""
            }
          </div>
          <h1>{allTomesToShow[0] != null ? allTomesToShow[0].serie_title : ""}</h1>
        </div>
        {generateTomeCardList()}
        {usage.includes("collection") ?
            (modaleDisplay ? 
              "test"
            :
              "patest")
          :
            ""
          }
        
    </div>
  );
}

export default connect(mapStateToProps)(TomeSerieListe);


