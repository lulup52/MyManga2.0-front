// import { API_BASE_URL} from '../../globalsVar';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../style.scss';

export default function AddSeriePopup({serieId}) {
    const [popUpSerie, setpopUpSerie] = useState(false)

    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")
    const [src_cover, setSrc_cover] = useState("")
    const [author, setAuthor] = useState("")
    const [sumary, setSumary] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        const tome ={title, genre, src_cover, author, sumary}
        console.log(tome)
        let options = {
            method: "POST",
            url: "http://localhost:5000/api/serie",
            data: tome,
        };
        
        Axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
    } 

    

    const createForm = () => {
        return (
            <div className='tomeAddFormContainer modale'>
                <div  onClick={() => setpopUpSerie(!popUpSerie)} className='modaleBg'></div>
                
                <div className='formContainner modaleContent'>
                    <button className="modaleCloseBtn" onClick={() => {setpopUpSerie(!popUpSerie)}}>X</button>
                    <form class onSubmit={handleSubmit}>

                        <label>title : </label>
                        <input required type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} value={title}/>

                        <label>genre : </label>
                        <input required type="text" name="genre" id="genre" onChange={(e) => setGenre(e.target.value)} value={genre}/>

                        <label>src_cover : </label>
                        <input required type="text" name="src_cover" id="src_cover" onChange={(e) => setSrc_cover(e.target.value)} value={src_cover}/>
                        
                        <label>sumary : </label>
                        <input required type="text" name="sumary" id="sumary" onChange={(e) => setSumary(e.target.value)} value={sumary}/>

                        <label>author : </label>
                        <input required type="text" name="author" id="author" onChange={(e) => setAuthor(e.target.value)} value={author}/>

                        <button className='forSubmitBtn'>ajouter une Série</button>
                    </form>
                </div>
            </div>
        )
    }
    return (
    <div className="AddSeriePopup">
        <button onClick={() => {setpopUpSerie(!popUpSerie)}}>créer une série</button>
        {
            popUpSerie?
                createForm()
            :
                ""
        }
    </div>
  );
}






// ### post a serie
// POST http://localhost:5000/api/serie
// Content-type: application/json

// {
//   "title": "ddddzdzdzdzdzd",
//   "genre": "shonenenenene",   
//   "src_cover": "kukrapok",
//   "author": "Masashi Kishimoto",
//   "sumary": "Naruto encore et toujours"
// }