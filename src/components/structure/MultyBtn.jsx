// import { API_BASE_URL} from '../../globalsVar';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import './style.scss';

export default function MultyBtn({tome, refresList}) {
    const [buyingStatus, setButingStatus] = useState(tome.buying_status)
    const [readingingStatus, setReadingStatus] = useState(tome.reading_status)
    const urlCollections = `http://localhost:5000/api/collection/${tome.collection_id}`
    // set datas to update request
    const updateOption = (method, buying ,reading) => {

        let options = {
            method: method,
            url: urlCollections,
            data: {
                tome_id: tome.tome_id,
                user_id: tome.user_id,
                reading_status: reading,
                buying_status:  buying
            },
        };
        return options;
    }
    // manage witch behavior is needed and adapt the update behavior by seting option variable
    const updateCollection = (e, behavior) => {
        let buying = buyingStatus
        let reading = readingingStatus
        let method = 'PUT'
        switch(behavior) {
            case "buying" :
                if (buyingStatus === 0){
                    buying = 1
                } else if (buyingStatus === 1){
                    buying = 0
                }
                break
            case "reading" :
                if (readingingStatus === 0){
                    reading = 1
                } else if (readingingStatus === 1){
                    reading = 2
                } else if (readingingStatus === 2){
                    reading = 0
                }
                break
            case "delete" :
                method = 'DELETE'
                break

        }
        
       

        // send request to uptade collection
        Axios
        .request(updateOption(method, buying ,reading))
        .then(function (response) {
            console.log(response.data);
            if (method !== "DELETE") {
                setReadingStatus(reading)
                setButingStatus(buying)
            } else {
                refresList()
            }
        })
        .catch(function (error) {
            console.error(error);
        });
    }
    return (
    <div className="multyBtn">
        <p>for collection {tome.collection_id}</p>
        <button onClick={(e) => updateCollection(e, "buying")}>achat : {buyingStatus}</button>
        <button onClick={(e) => updateCollection(e, "reading")}>lecture : {readingingStatus}</button>
        <button onClick={(e) => updateCollection(e, "delete")}>supprimer</button>
    </div>
  );
}




