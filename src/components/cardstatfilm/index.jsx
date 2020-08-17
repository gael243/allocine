import React, {useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategorie } from '../../redux/categorie/categorie.action';
import './cardstatfilm.style.css';
import * as ReactBoostrap from 'react-bootstrap';
;


export default function CardStatFilm(){
    const dispatch = useDispatch();
    const { categorie, loading } = useSelector((state) => state.categorie);
    console.log(categorie.map((res)=>{return res.genres}));
    useEffect(() => {
        dispatch(getCategorie());
      }, []);
    return(
        <ReactBoostrap.Card>
            <ReactBoostrap.Card.Body className="cardstat">
                <ul className="listecard">
                    {
                     categorie.map((response)=>
                    <li className="listegenre">{response.genres}</li>
                      )  
                    }

                </ul>
            </ReactBoostrap.Card.Body>
        </ReactBoostrap.Card>
        )
}