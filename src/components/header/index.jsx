import React from 'react';
import './header.style.css';
import * as ReactBoostrap from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import Search from '../search';



export default function Header(){
    const dispatch = useDispatch(); 
const { films, loading } = useSelector((state) => state.films);
const { filmFiltre, loadings } = useSelector((state) => state.filmFiltre);


const recherche=((e)=>{
    e.preventDefault();
    const filtre=films.filter((resultats)=>{
        const titre=resultats.title.toLowerCase();
        const value=(e.target.firstChild.value).toLowerCase();
        return titre.includes(value);
    })
 if(e.target.firstChild.value ==''){
    dispatch({type:"SET_FILMS",payload:filmFiltre});
 }else{
    dispatch({type:"SET_FILMS",payload:filtre});  
 }    
})
    return(
        <ReactBoostrap.Navbar bg="dark" variant="dark" fixed="top" className="navheader">
            <ReactBoostrap.Navbar.Brand href="#home"><Link to='/'><img src="https://images.pingidentity.com/image/upload/f_auto,q_auto/ping_dam/content/dam/ping-6-2-assets/images/customer-stories/netflix/Netflix-logo-white.png" width="120px"/></Link></ReactBoostrap.Navbar.Brand>
            <ReactBoostrap.Form inline onSubmit={recherche}>
            <ReactBoostrap.FormControl type="text"   placeholder="Search" className="mr-sm-2 intputText" />
            <ReactBoostrap.Button variant="outline-info" type="submit">Search</ReactBoostrap.Button>
            </ReactBoostrap.Form>
        </ReactBoostrap.Navbar>


    )
}