// import { API_BASE_URL} from '../../globalsVar';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import './style.scss';
import AddCollectionTomeList from "./AddCollectionTomeList"

export default function AddCollectionModale({toggleModal, serieId, parentRefesh}) {
  
    return (
    <div className="addCollectionModaleContainner">
        <div  onClick={() => toggleModal()} className='modaleBg'></div>

        <div className='addCollectionModale'>
            <button onClick={() => toggleModal()} className='modaleCloseBtn'>X</button>
            <AddCollectionTomeList serieId={serieId} parentRefesh={parentRefesh}/>
            testtesttest

        </div>
        

    </div>
  );
}




