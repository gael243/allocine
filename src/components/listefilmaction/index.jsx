import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilms } from '../../redux/listeFilm/listefilm.action';
import './listefilmaction.style.css';
import * as ReactBoostrap from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function ListFilms() {

const dispatch = useDispatch();
const { films, loading } = useSelector((state) => state.films);
const { filmFiltre, loadings } = useSelector((state) => state.filmFiltre);
const {range}= useSelector((state) => state.rangeFilm);
const paginate = (e) => {
  let page = e.target.dataset.key;
  if (page == '-2' && range.current > 1) { // Previous
    dispatch(getFilms(range.current - 1));
  } else if (page == '-1' && range.current < range.last_page) { // next
    dispatch(getFilms(range.current + 1));
  } else if (page != '...') {
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
                    <ReactBoostrap.Col xs={12} lg={4}>
                    <ReactBoostrap.Card>
                            <ReactBoostrap.Card.Body>
                            <ReactBoostrap.Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} width="1900px"  />
                <ReactBoostrap.Card.Text><strong>{film.title}</strong></ReactBoostrap.Card.Text>
                <ReactBoostrap.Card.Text><Link to={'/detailfilm/'+film.id}>voir le détail du film</Link></ReactBoostrap.Card.Text>
                            </ReactBoostrap.Card.Body>
                        </ReactBoostrap.Card>
                    </ReactBoostrap.Col>
                         ))}
                </ReactBoostrap.Row>
                <ReactBoostrap.Pagination onClick={paginate} className="paginations">
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
