import { API_BASE_URL} from '../../../globalsVar';
import React, { useState, useEffect } from 'react';
import {useParams, Navigate } from 'react-router-dom';
 
import { Link } from 'react-router-dom';

import MultyBtn from '../structure/MultyBtn'
import TomeCard from '../structure/TomeCard'

import Axios from 'axios';
import '../style.scss';

import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  user: state.user,
});

const AddCollectionTomeList = ({serieId, user, dispatch, parentRefesh}) => {

  const [updateAllTOmes, setUpdateAllTOmes] = useState(false)  
  const [allTomesToShow, setAllTomesToShow] = useState([])

  const refresList = () => {
    setUpdateAllTOmes(!updateAllTOmes)
    parentRefesh()
  }

  let timer = ""
  const popUpToggler = (mesage) => {
    dispatch({ type: 'TOGGLE_POPUP', toggle : false, popUpMsg : ''})
    setTimeout(() => {
      dispatch({ type: 'TOGGLE_POPUP', toggle : true, popUpMsg : mesage})
    },100)
    
  }



 
  // contruction de l'adresse de la requette et rcupération des variables pour la remplire 
  let userId = user
  let tomeToShowUrl = API_BASE_URL + `api/mangas/serie/${serieId}/${userId}`
  console.log(serieId)
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
        if (!tome.user_id) {
          return (
            <div className="tomeCard" key={key}>
              <TomeCard tome={tome} refresList={refresList} popUpToggler={popUpToggler}/>
            </div>
          )
        }
        
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
    <div className='addCollectionModaleContent'>
        <div className='modaleContentTop'>
          <h1>Ajouter une tome</h1>
          
          <h1>{allTomesToShow[0] != null ? allTomesToShow[0].serie_title : ""}</h1>
        </div>
        <div className="modaleContentBot">
          <div className="modaleTomeListe">
            {generateTomeCardList()}
          </div>
        </div>
       
        
    </div>
  );
}

export default connect(mapStateToProps)(AddCollectionTomeList);


