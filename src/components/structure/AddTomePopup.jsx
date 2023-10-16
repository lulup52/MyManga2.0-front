// import { API_BASE_URL} from '../../globalsVar';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../style.scss';

export default function AddTomePopup({serieId}) {
    const [popUpTome, setpopUpTome] = useState(false)
    
    const [serie_id, setSerie_id] = useState(serieId)
    const [title, setTitle] = useState("")
    const [num_tome, setNum_tome] = useState(0)
    const [src_cover, setSrc_cover] = useState("")
    const [tome_sumary, setTome_sumary] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const tome ={serie_id, title, num_tome, src_cover, tome_sumary}
        console.log(tome)
        let options = {
            method: "POST",
            url: "http://localhost:5000/api/mangas",
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
            <div className='tomeAddFormContaine popUpr'>
                <form onSubmit={handleSubmit}>
                    <label>title : </label>
                    <input required type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} value={title}/>
                    <label>num_tome : </label>
                    <input required type="number" name="num_tome" id="num_tome" onChange={(e) => setNum_tome(e.target.value)} value={num_tome}/>
                    <label>src_cover : </label>
                    <input required type="text" name="src_cover" id="src_cover" onChange={(e) => setSrc_cover(e.target.value)} value={src_cover}/>
                    <label>tome_sumary : </label>
                    <input required type="text" name="tome_sumary" id="tome_sumary" onChange={(e) => setTome_sumary(e.target.value)} value={tome_sumary}/>
                    <button>ajouter un tome</button>
                </form>
            </div>
        )
    }
    return (
    <div className="addTomePopup">
        <button onClick={() => {setpopUpTome(!popUpTome)}}>créer un tome</button>
        {
            popUpTome?
                createForm()
            :
                "fermé"
        }
    </div>
  );
}







// POST http://localhost:5000/api/mangas
// Content-type: application/json

// {
//   "serie_id": 4,
//   "title": "tartetlu",
//   "num_tome": 12,
//   "src_cover": "test post",
//   "tome_sumary": "test post"
// }

// <div className="serieListe">
//         <input type="text" className="" />serie_id
//         <input type="text" className="" />title
//         <input type="text" className="" />num_tome
//         <input type="text" className="" />src_cover
//         <input type="text" className="" />tome_sumary
//       <div className="addTomePopup"></div>