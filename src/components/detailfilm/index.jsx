import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './detailfilm.style.css';
import * as ReactBoostrap from 'react-bootstrap';
import {useParams} from 'react-router';
import API from '../../service/api';

export default function DetailFilm() {
  let {id}=useParams();
  const [detailfilm,setdetailfilm]=useState([]);
  const dispatch = useDispatch();
  const { film, loading } = useSelector((state) => state.film);
  useEffect(() => {
    API.get(`movie/${id}?api_key=59d73d300b5c7045284b10d150d60b82`).then((res)=>{
      const data=[]
      data.push({
        title:res.data.title,
        poster_path:res.data.poster_path,
        overview:res.data.overview,
        vote_count:res.data.vote_count,
        production_countries:res.data.production_countries.map((res)=>{return res.name}),
        revenue:res.data.revenue,
        production_companies:res.data.production_companies.map((res) => {
          if (res.logo_path == null) {
            res.logo_path = 'https://www.bagherra.eu/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png'
          } else {
            res.logo_path = `https://image.tmdb.org/t/p/w500/${res.logo_path}`;
          }

          return res;
        }),
        popularity:res.data.popularity,
        logo_path:res.data.production_companies.map((res)=>{return res.logo_path})
      })
      setdetailfilm(data)
    })
  }, []);
  
  return (
      <div>
          <ReactBoostrap.Container fluid className="bg-white px-md-5 topcard">
              {
                  detailfilm.map((res)=>
                    <ReactBoostrap.Row className="mx-md-5 py-5">
                      <ReactBoostrap.Col className="imgdetail" xs={12} lg={4}>
                        <img className="img-fluid" src={`https://image.tmdb.org/t/p/w500/${res.poster_path}`} />
                      </ReactBoostrap.Col>
                      <ReactBoostrap.Col className="details" xs={12} lg={8}>
                        <dl className="row">
                          <dt className="col-md-4 col-12">Titre</dt>
                          <dd className="col-md-8 col-12 with-colon">
                            {res.title}
                          </dd>
                          <dt className="col-md-4 col-12">Nombre de vote</dt>
                          <dd className="col-md-8 col-12 with-colon">
                            {res.vote_count}
                          </dd>
                          <dt className="col-md-4 col-12">Revenue</dt>
                          <dd className="col-md-8 col-12 with-colon">
                            {res.revenue}$
                          </dd>
                          <dt className="col-md-4 col-12">Pays de production</dt>
                          <dd className="col-md-8 col-12 with-colon">
                            {res.production_countries}
                          </dd>
                          <dt className="col-md-4 col-12">Description</dt>
                          <dd className="col-md-8 col-12 with-colon">
                            {res.overview}
                          </dd>
                          <dt className="col-md-4 col-12">Popularité</dt>
                          <dd className="col-md-8 col-12 with-colon">
                            {res.popularity}
                          </dd>

                          <dt className="col-12">Maison de production</dt>
                          <dd className="col-12 py-3">
                            <ReactBoostrap.Row>
                              {
                                res.production_companies.map(company => 
                                  <ReactBoostrap.Col xs={6} sm={4} lg={3} className="py-2">
                                    <small className="text-muted">
                                      {company.name}({company.origin_country})
                                    </small>
                                    <img className="img-fluid" src={company.logo_path} />
                                  </ReactBoostrap.Col>
                                )
                              }
                            </ReactBoostrap.Row>
                          </dd>
                        </dl>
                      </ReactBoostrap.Col>
                    </ReactBoostrap.Row>
                  )
                }
          </ReactBoostrap.Container>
      </div>
  );
}
