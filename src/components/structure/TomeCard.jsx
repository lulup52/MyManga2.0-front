// import { API_BASE_URL} from '../../globalsVar';
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import Axios from 'axios';
// import './style.scss';

// POST http://localhost:5000/api/collection
// Content-type: application/json

// {
//   "tome_id": 14,
//   "user_id": 1,
//   "reading_status": 1,
//   "buying_status": 0
// }




    const mapStateToProps = (state) => ({
        user: state.user
    });
    
    const TomeCard = ({tome, user, refresList, popUpToggler}) => {
        const urlCollections = "http://localhost:5000/api/collection"

        const addToLibrary = (tomeId) => {
            const options = {
                method: 'POST',
                url: urlCollections,
                data: 
                    {
                        tome_id: tomeId,
                        user_id: user,
                        reading_status: 0,
                        buying_status: 0
                    },
                };
            Axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                refresList()
                popUpToggler(`${tome.serie_title} n° ${tome.num_tome} ajouté`)
            })
            .catch(function (error) {
                console.error(error);
            });
        }


        
    return (
    <div className="tomeCard">

        <p>{tome.num_tome} : {tome.tome_title}</p>
        {!tome.user_id ? 
            <button className='adToLibrary' onClick={() => {addToLibrary(tome.tome_id)}}>ajouter</button>
        :
            ""
        } 
        <img src={tome.tome_src_cover} />
    </div>
  );
}

export default connect(mapStateToProps)(TomeCard);



