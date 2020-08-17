import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilms } from '../../redux/listeFilm/listefilm.action';
import './listefilm.style.css';
import * as ReactBoostrap from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';

export default function ListFilms() {

const dispatch = useDispatch();
const { films, loading } = useSelector((state) => state.films);
const { filmFiltre, loadings } = useSelector((state) => state.filmFiltre);
const {range}= useSelector((state) => state.rangeFilm);
const paginate = (e) => {
  let page = e.target.dataset.key;
  console.log(`THIS IS MY PAGE ${page}`)
  if (page == '-2' && range.current > 1) { // Previous
    console.log('range.current prev =',range.current);
    dispatch(getFilms(range.current - 1));
  } else if (page == '-1' && range.current < range.last_page) { // next
    console.log('range.current next =',range.current);
    dispatch(getFilms(range.current + 1));
  } else if (page != '...') {
    console.log('range.current indexed =',range.current);
    dispatch(getFilms(page));
  }
};

  let tableauFilm=[];
  if (films.length) {
    tableauFilm=films
  }else{
    tableauFilm=filmFiltre
  }
  useEffect(() => {
    dispatch(getFilms());
  }, []);
  
  return (
          <div className="listfilm">
            <ReactBoostrap.Container>
                    <ReactBoostrap.Row>
                    {loading?(<div>chargement...</div>):(
                    tableauFilm.map((film)=>
                    <ReactBoostrap.Col xs={12} lg={3}>
                   
                    <ReactBoostrap.Card className="cardimg">
                            <ReactBoostrap.Card.Body className="bodycard">
                            <Link to={'/detailfilm/'+film.id}><ReactBoostrap.Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}/></Link> 
                            <div className="cardText">
                                <ReactBoostrap.Card.Text className="titles"><strong>{film.title}</strong></ReactBoostrap.Card.Text>
                            </div>
                            </ReactBoostrap.Card.Body>
                        </ReactBoostrap.Card>
                    </ReactBoostrap.Col>
                         ))}
                </ReactBoostrap.Row>
                <ReactBoostrap.Pagination onClick={paginate} className="pagenatin">
                    <ReactBoostrap.Pagination.Prev data-key="-2" ctive={ range.current > 1 }/>
                     {(range.pages.map((element, index) =>
                      <ReactBoostrap.Pagination.Item key={index} data-key={element} active={range.current == element}>
                          {element}
                      </ReactBoostrap.Pagination.Item> 
                     ))} 
                    <ReactBoostrap.Pagination.Next data-key="-1" disabled={range.last_page == range.current}/>
                </ReactBoostrap.Pagination>
            </ReactBoostrap.Container>
          </div>
  );
}
