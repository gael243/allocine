import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './search.style.css';
import * as ReactBoostrap from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";


export default function Search(){   
const dispatch = useDispatch(); 
const { films, loading } = useSelector((state) => state.films);
const { filmFiltre, loadings } = useSelector((state) => state.filmFiltre);


const recherche=((e)=>{
    const filtre=films.filter((resultats)=>{
        const titre=resultats.title.toLowerCase();
        const value=(e.target.value).toLowerCase();
        return titre.includes(value);
    })
 if(e.target.value ==''){
    dispatch({type:"SET_FILMS",payload:filmFiltre});
 }else{
    dispatch({type:"SET_FILMS",payload:filtre});  
 }    
})
    return(
        <div>
            <ReactBoostrap.Container>
                <ReactBoostrap.Row>
                    <ReactBoostrap.Col xs="12">
                        <ReactBoostrap.Form className="form" >
                           <ReactBoostrap.Form.Control className="containeSearch" size="lg" type="text" onChange={recherche}   placeholder="Rechercher un Film..."/>
                        </ReactBoostrap.Form>
                    </ReactBoostrap.Col>
                </ReactBoostrap.Row>
            </ReactBoostrap.Container>
        </div>
    )
}